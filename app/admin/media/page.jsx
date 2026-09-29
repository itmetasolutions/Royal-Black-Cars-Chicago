"use client";

import { useEffect, useRef, useState } from "react";

export default function MediaLibraryPage() {
  const [blobs, setBlobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [notConfigured, setNotConfigured] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(null);
  const fileInput = useRef(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      setBlobs(data.blobs || []);
      setNotConfigured(!!data.notConfigured);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const upload = async (file) => {
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/media", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Upload failed.");
      setBlobs((b) => [data.blob, ...b]);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const remove = async (url) => {
    if (!confirm("Delete this image? Any page still referencing it will show a broken image.")) return;
    setBlobs((b) => b.filter((x) => x.url !== url));
    await fetch(`/api/admin/media?url=${encodeURIComponent(url)}`, { method: "DELETE" });
  };

  const copy = (url) => {
    navigator.clipboard?.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 1500);
  };

  const onDrop = (e) => {
    e.preventDefault();
    upload(e.dataTransfer.files?.[0]);
  };

  return (
    <>
      <h1>Media Library</h1>
      <p className="adm-sub">Every image lives here — upload once, then pick it from any page or blog post's image field.</p>

      {notConfigured && (
        <div className="adm-card">
          <p className="adm-msg err" style={{ margin: 0 }}>
            Storage isn't connected yet. In the Vercel dashboard, go to Storage → Create Database → Blob, connect it to
            this project, then redeploy. This uses Vercel's own runtime credentials, so it only works once deployed —
            add <code>BLOB_READ_WRITE_TOKEN</code> to your local <code>.env</code> if you also want to test uploads here.
          </p>
        </div>
      )}

      <div className="adm-card">
        <div
          className="adm-media-dropzone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          onClick={() => fileInput.current?.click()}
        >
          {uploading ? "Uploading…" : "Click to upload, or drag an image here"}
          <input ref={fileInput} type="file" accept="image/*" hidden onChange={(e) => upload(e.target.files?.[0])} />
        </div>
        {error && <p className="adm-msg err">{error}</p>}

        {loading ? (
          <p className="adm-media-empty">Loading…</p>
        ) : blobs.length === 0 ? (
          <p className="adm-media-empty">No images uploaded yet.</p>
        ) : (
          <div className="adm-media-grid">
            {blobs.map((b) => (
              <div key={b.url} className="adm-media-item" title={b.pathname}>
                <img src={b.url} alt={b.pathname} loading="lazy" onClick={() => copy(b.url)} />
                <span className="adm-media-item-name">{copied === b.url ? "Copied!" : b.pathname.split("/").pop()}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {blobs.length > 0 && (
        <div className="adm-card">
          <h2>All images</h2>
          <table className="adm-table">
            <thead><tr><th>File</th><th>Size</th><th>Uploaded</th><th></th></tr></thead>
            <tbody>
              {blobs.map((b) => (
                <tr key={b.url}>
                  <td><code style={{ fontSize: ".8rem" }}>{b.pathname}</code></td>
                  <td>{(b.size / 1024).toFixed(0)} KB</td>
                  <td>{new Date(b.uploadedAt).toLocaleDateString()}</td>
                  <td style={{ textAlign: "right", display: "flex", gap: 8, justifyContent: "flex-end" }}>
                    <button type="button" className="adm-btn" style={{ padding: "6px 14px", fontSize: ".8rem" }} onClick={() => copy(b.url)}>
                      {copied === b.url ? "Copied!" : "Copy URL"}
                    </button>
                    <button type="button" className="adm-btn adm-btn-danger" style={{ padding: "6px 14px", fontSize: ".8rem" }} onClick={() => remove(b.url)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
