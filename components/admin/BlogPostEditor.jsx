"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor.jsx";
import SeoFields from "./fields/SeoFields.jsx";
import ImageField from "./fields/ImageField.jsx";

const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export default function BlogPostEditor({ post }) {
  const router = useRouter();
  const isNew = !post;
  const [slug, setSlug] = useState(post?.slug || "");
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [title, setTitle] = useState(post?.title || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [img, setImg] = useState(post?.img || "");
  const [status, setStatus] = useState(post?.status || "published");
  const [contentHtml, setContentHtml] = useState(post?.contentHtml || "");
  const [seo, setSeo] = useState({
    metaTitle: post?.metaTitle || "", metaDescription: post?.metaDescription || "",
    focusKeyword: post?.focusKeyword || "", secondaryKeywords: post?.secondaryKeywords || "",
  });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const onTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    if (!slugTouched) setSlug(slugify(val));
  };

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const payload = { slug, title, excerpt, contentHtml, img, status, ...seo };
      const res = await fetch(isNew ? "/api/admin/blog-posts" : `/api/admin/blog-posts/${post.id}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) throw new Error(result.error || "Save failed.");
      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setMsg({ type: "err", text: err.message });
      setBusy(false);
    }
  };

  const remove = async () => {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    setBusy(true);
    const res = await fetch(`/api/admin/blog-posts/${post.id}`, { method: "DELETE" });
    if (res.ok) { router.push("/admin/blog"); router.refresh(); }
    else setBusy(false);
  };

  return (
    <form onSubmit={submit}>
      <div className="adm-card">
        <h2>Post details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
          <div className="adm-field">
            <label>Title</label>
            <input value={title} onChange={onTitleChange} required />
          </div>
          <div className="adm-field">
            <label>Slug</label>
            <input value={slug} onChange={(e) => { setSlugTouched(true); setSlug(e.target.value); }} required pattern="[a-z0-9-]+" />
            <small>URL: /blog/{slug || "slug"}/</small>
          </div>
        </div>
        <ImageField label="Featured image" value={img} onChange={setImg} />
        <div className="adm-field" style={{ maxWidth: 300 }}>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div className="adm-field" style={{ maxWidth: 700 }}>
          <label>Excerpt</label>
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} placeholder="Shown on the blog archive and used as the default meta description" />
        </div>

        <RichTextEditor value={contentHtml} onChange={setContentHtml} />
      </div>

      <SeoFields seo={seo} onChange={setSeo} />

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button className="adm-btn adm-btn-gold" type="submit" disabled={busy}>{busy ? "Saving…" : isNew ? "Publish post" : "Save changes"}</button>
        {!isNew && <button type="button" className="adm-btn adm-btn-danger" onClick={remove} disabled={busy}>Delete</button>}
      </div>
      {msg && <p className={`adm-msg ${msg.type}`}>{msg.text}</p>}
    </form>
  );
}
