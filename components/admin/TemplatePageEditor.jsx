"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LinesField from "./fields/LinesField.jsx";
import PairsField from "./fields/PairsField.jsx";
import FaqEditor from "./fields/FaqEditor.jsx";
import SectionsField from "./fields/SectionsField.jsx";
import SeoFields from "./fields/SeoFields.jsx";

const TYPE_LABEL = { service: "Service", airport: "Airport", fleet: "Fleet vehicle" };
const LIST_HREF = { service: "/admin/pages/service", airport: "/admin/pages/airport", fleet: "/admin/pages/fleet" };

export default function TemplatePageEditor({ type, page }) {
  const router = useRouter();
  const isNew = !page;
  const [slug, setSlug] = useState(page?.slug || "");
  const [title, setTitle] = useState(page?.title || "");
  const [data, setData] = useState(page?.data || {});
  const [seo, setSeo] = useState({
    metaTitle: page?.metaTitle || "", metaDescription: page?.metaDescription || "",
    focusKeyword: page?.focusKeyword || "", secondaryKeywords: page?.secondaryKeywords || "",
  });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const setField = (key) => (e) => setData({ ...data, [key]: e.target.value });
  const setFieldValue = (key) => (val) => setData({ ...data, [key]: val });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const payload = { type, slug, title, data, ...seo };
      const res = await fetch(isNew ? "/api/admin/template-pages" : `/api/admin/template-pages/${page.id}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) throw new Error(result.error || "Save failed.");
      router.push(LIST_HREF[type]);
      router.refresh();
    } catch (err) {
      setMsg({ type: "err", text: err.message });
      setBusy(false);
    }
  };

  const remove = async () => {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    setBusy(true);
    const res = await fetch(`/api/admin/template-pages/${page.id}`, { method: "DELETE" });
    if (res.ok) { router.push(LIST_HREF[type]); router.refresh(); }
    else setBusy(false);
  };

  return (
    <form onSubmit={submit}>
      <div className="adm-card">
        <h2>{TYPE_LABEL[type]} details</h2>
        <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
          <div className="adm-field">
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="adm-field">
            <label>Slug {!isNew && "(fixed after creation)"}</label>
            <input value={slug} onChange={(e) => setSlug(e.target.value)} disabled={!isNew} required pattern="[a-z0-9-]+" />
            <small>URL: {type === "service" ? `/${slug || "slug"}/` : `/${type === "airport" ? "airports" : "fleet"}/${slug || "slug"}/`}</small>
          </div>
        </div>

        <div className="adm-field" style={{ maxWidth: 700 }}>
          <label>Hero image URL</label>
          <input value={data.img || ""} onChange={setField("img")} placeholder="https://..." />
        </div>

        {type === "service" && (
          <>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Eyebrow</label>
              <input value={data.eyebrow || ""} onChange={setField("eyebrow")} />
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Lead paragraph</label>
              <textarea value={data.lead || ""} onChange={setField("lead")} rows={2} />
            </div>
            <LinesField label="What's included" value={data.included} onChange={setFieldValue("included")} />
            <LinesField label="Best for" value={data.bestFor} onChange={setFieldValue("bestFor")} />
            <SectionsField value={data.body} onChange={setFieldValue("body")} />
            <PairsField label="Recommended vehicles" value={data.fleetLinks} onChange={setFieldValue("fleetLinks")} />
          </>
        )}

        {type === "airport" && (
          <>
            <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, maxWidth: 700 }}>
              <div className="adm-field"><label>Airport code</label><input value={data.code || ""} onChange={setField("code")} /></div>
              <div className="adm-field"><label>Rate</label><input value={data.rate || ""} onChange={setField("rate")} placeholder='e.g. "$95" or "Custom quote"' /></div>
              <div className="adm-field"><label>Rate note</label><input value={data.rateNote || ""} onChange={setField("rateNote")} /></div>
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Drive time</label>
              <input value={data.driveTime || ""} onChange={setField("driveTime")} />
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Second image URL</label>
              <input value={data.img2 || ""} onChange={setField("img2")} />
            </div>
            <LinesField label="About this airport (body paragraphs)" value={data.body} onChange={setFieldValue("body")} />
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Terminals</label>
              <textarea value={data.terminals || ""} onChange={setField("terminals")} rows={2} />
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Wait-time policy</label>
              <textarea value={data.waitPolicy || ""} onChange={setField("waitPolicy")} rows={2} />
            </div>
          </>
        )}

        {type === "fleet" && (
          <>
            <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
              <div className="adm-field"><label>Models</label><input value={data.models || ""} onChange={setField("models")} /></div>
              <div className="adm-field"><label>Capacity</label><input value={data.capacity || ""} onChange={setField("capacity")} placeholder='e.g. "1–3 passengers, 2 bags"' /></div>
            </div>
            <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
              <div className="adm-field"><label>Flat rate</label><input value={data.rate || ""} onChange={setField("rate")} placeholder='e.g. "Airport from $85" or "Quoted at booking"' /></div>
              <div className="adm-field"><label>Hourly rate</label><input value={data.hourlyRate || ""} onChange={setField("hourlyRate")} /></div>
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Description</label>
              <textarea value={data.body || ""} onChange={setField("body")} rows={3} />
            </div>
            <LinesField label="Best for" value={data.bestFor} onChange={setFieldValue("bestFor")} />
            <PairsField label="Popular services" value={data.services} onChange={setFieldValue("services")} />
          </>
        )}

        <FaqEditor value={data.faqs} onChange={setFieldValue("faqs")} />
      </div>

      <SeoFields seo={seo} onChange={setSeo} />

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button className="adm-btn adm-btn-gold" type="submit" disabled={busy}>{busy ? "Saving…" : isNew ? "Create page" : "Save changes"}</button>
        {!isNew && <button type="button" className="adm-btn adm-btn-danger" onClick={remove} disabled={busy}>Delete</button>}
      </div>
      {msg && <p className={`adm-msg ${msg.type}`}>{msg.text}</p>}
    </form>
  );
}
