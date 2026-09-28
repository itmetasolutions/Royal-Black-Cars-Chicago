"use client";

import { useEffect, useRef, useState } from "react";

export default function MediaLibraryModal({ onSelect, onClose }) {
  const [blobs, setBlobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [notConfigured, setNotConfigured] = useState(false);
  const [error, setError] = useState(null);
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
      onSelect(data.blob.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    upload(e.dataTransfer.files?.[0]);
  };

  return (
    <div className="adm-modal-overlay" onClick={onClose}>
      <div className="adm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="adm-modal-head">
          <h2>Media library</h2>
          <button type="button" className="adm-modal-close" onClick={onClose}>&times;</button>
        </div>

        {notConfigured && (
          <p className="adm-msg err" style={{ marginTop: 0 }}>
            Media library storage isn't connected yet. Add a <code>BLOB_READ_WRITE_TOKEN</code> environment variable
            (Vercel dashboard → Storage → create a Blob store) to enable uploads.
          </p>
        )}

        <div
          className="adm-media-dropzone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          onClick={() => fileInput.current?.click()}
        >
          {uploading ? "Uploading…" : "Click to upload, or drag an image here"}
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => upload(e.target.files?.[0])}
          />
        </div>
        {error && <p className="adm-msg err">{error}</p>}

        {loading ? (
          <p className="adm-media-empty">Loading…</p>
        ) : blobs.length === 0 ? (
          <p className="adm-media-empty">No images uploaded yet.</p>
        ) : (
          <div className="adm-media-grid">
            {blobs.map((b) => (
              <div key={b.url} className="adm-media-item" onClick={() => onSelect(b.url)} title={b.pathname}>
                <img src={b.url} alt={b.pathname} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
