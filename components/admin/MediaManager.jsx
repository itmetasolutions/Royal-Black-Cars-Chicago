"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const formatSize = (bytes) => {
  if (!bytes && bytes !== 0) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const formatDims = (w, h) => (w && h ? `${w} × ${h}` : "—");

// Reads the pixel dimensions in the browser before upload, so the size is
// known without decoding the file again on the server. Never rejects — an
// unreadable file just uploads without dimensions.
function measure(file) {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({ width: null, height: null });
    };
    img.src = url;
  });
}

/**
 * Shared by the Media Library page and the image-picker modal.
 * mode="picker" adds click-to-select and hides the destructive actions.
 */
export default function MediaManager({ mode = "page", onSelect }) {
  const [blobs, setBlobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notConfigured, setNotConfigured] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(null);

  // One entry per file the user picked, processed strictly in order.
  const [queue, setQueue] = useState([]);
  const running = useRef(false);
  const fileInput = useRef(null);

  const [altDrafts, setAltDrafts] = useState({});
  // url -> "saving" | "saved" | "error", shown next to the field.
  const [altStatus, setAltStatus] = useState({});
  const altTimers = useRef({});

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      setBlobs(data.blobs || []);
      setNotConfigured(!!data.notConfigured);
    } catch {
      setError("Could not load the media library.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  // Uploads one file at a time: the next only starts once the previous has
  // finished, so a batch of large images can't open a dozen parallel requests.
  // The worklist is a ref, not state, so a re-render (or StrictMode running an
  // effect twice) can never upload the same file twice or skip one.
  const pendingRef = useRef([]);
  // In the picker, a batch still uploads every file, but only the first one
  // to finish is dropped into the field — otherwise each completion would
  // overwrite the last pick while the modal is closing.
  const pickedRef = useRef(false);

  const drain = useCallback(async () => {
    if (running.current) return;
    running.current = true;
    try {
      while (pendingRef.current.length > 0) {
        const current = pendingRef.current.shift();
        setQueue((q) => q.map((i) => (i.id === current.id ? { ...i, status: "uploading" } : i)));

        try {
          const { width, height } = await measure(current.file);
          const form = new FormData();
          form.append("file", current.file);
          if (width) form.append("width", String(width));
          if (height) form.append("height", String(height));

          const res = await fetch("/api/admin/media", { method: "POST", body: form });
          const data = await res.json();
          if (!res.ok || !data.ok) throw new Error(data.error || "Upload failed.");

          setBlobs((b) => [data.blob, ...b.filter((x) => x.url !== data.blob.url)]);
          setQueue((q) => q.map((i) => (i.id === current.id ? { ...i, status: "done" } : i)));
          if (mode === "picker" && onSelect && !pickedRef.current) {
            pickedRef.current = true;
            onSelect(data.blob.url);
          }
        } catch (err) {
          setQueue((q) => q.map((i) => (i.id === current.id ? { ...i, status: "failed", error: err.message } : i)));
        }
      }
    } finally {
      running.current = false;
    }
  }, [mode, onSelect]);

  const enqueue = (fileList) => {
    const files = Array.from(fileList || []).filter((f) => f.type?.startsWith("image/"));
    if (files.length === 0) return;
    setError(null);
    const items = files.map((file, i) => ({
      id: `${Date.now()}-${i}-${file.name}`,
      file, name: file.name, size: file.size, status: "queued",
    }));
    pendingRef.current.push(...items);
    setQueue((q) => [...q, ...items]);
    drain();
  };

  const saveAlt = async (url, alt) => {
    setAltStatus((st) => ({ ...st, [url]: "saving" }));
    try {
      const blob = blobs.find((b) => b.url === url);
      const res = await fetch("/api/admin/media/meta", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, alt, width: blob?.width, height: blob?.height }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Could not save alt text.");
      setBlobs((b) => b.map((x) => (x.url === url ? { ...x, alt } : x)));
      setAltStatus((st) => ({ ...st, [url]: "saved" }));
    } catch (err) {
      setAltStatus((st) => ({ ...st, [url]: "error" }));
      setError(err.message);
    }
  };

  // Typing saves on its own shortly after the editor stops, and immediately on
  // blur, so there is no button to forget to press.
  const onAltChange = (url, alt) => {
    setAltDrafts((d) => ({ ...d, [url]: alt }));
    setAltStatus((st) => ({ ...st, [url]: null }));
    clearTimeout(altTimers.current[url]);
    altTimers.current[url] = setTimeout(() => saveAlt(url, alt), 700);
  };

  const flushAlt = (url) => {
    if (!altTimers.current[url]) return;
    clearTimeout(altTimers.current[url]);
    altTimers.current[url] = null;
    const draft = altDrafts[url];
    const current = blobs.find((b) => b.url === url)?.alt ?? "";
    if (draft !== undefined && draft !== current) saveAlt(url, draft);
  };

  // Don't leave a pending save behind if the view goes away mid-edit.
  useEffect(() => {
    const timers = altTimers.current;
    return () => Object.values(timers).forEach((t) => clearTimeout(t));
  }, []);

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

  // Backfills dimensions for images uploaded before they were recorded.
  const onImgLoad = (url, e) => {
    const { naturalWidth: width, naturalHeight: height } = e.target;
    const blob = blobs.find((b) => b.url === url);
    if (!width || !height || (blob?.width && blob?.height)) return;
    setBlobs((b) => b.map((x) => (x.url === url ? { ...x, width, height } : x)));
    fetch("/api/admin/media/meta", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, alt: blob?.alt || "", width, height }),
    }).catch(() => {});
  };

  const pending = queue.filter((q) => q.status === "queued" || q.status === "uploading").length;

  return (
    <>
      {notConfigured && (
        <p className="adm-msg err" style={{ marginTop: 0 }}>
          Media library storage isn&apos;t connected yet. Connect a Blob store to this project (Vercel dashboard →
          Storage) — this only works once deployed, since it relies on Vercel&apos;s own runtime credentials.
        </p>
      )}

      <div
        className="adm-media-dropzone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); enqueue(e.dataTransfer.files); }}
        onClick={() => fileInput.current?.click()}
      >
        {pending > 0 ? `Uploading… ${pending} left` : "Click to upload, or drag images here — you can pick several at once"}
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => { enqueue(e.target.files); e.target.value = ""; }}
        />
      </div>

      {queue.length > 0 && (
        <ul className="adm-upload-queue">
          {queue.map((item, i) => (
            <li key={item.id} className={`adm-upload-item is-${item.status}`}>
              <span className="adm-upload-pos">{i + 1}</span>
              <span className="adm-upload-name">{item.name}</span>
              <span className="adm-upload-size">{formatSize(item.size)}</span>
              <span className="adm-upload-status">
                {item.status === "queued" && "Waiting"}
                {item.status === "uploading" && "Uploading…"}
                {item.status === "done" && "Done"}
                {item.status === "failed" && (item.error || "Failed")}
              </span>
            </li>
          ))}
          {pending === 0 && (
            <li>
              <button type="button" className="adm-btn" style={{ padding: "6px 14px", fontSize: ".8rem" }} onClick={() => setQueue([])}>
                Clear list
              </button>
            </li>
          )}
        </ul>
      )}

      {error && <p className="adm-msg err">{error}</p>}

      {loading ? (
        <p className="adm-media-empty">Loading…</p>
      ) : blobs.length === 0 ? (
        <p className="adm-media-empty">No images uploaded yet.</p>
      ) : (
        <div className="adm-media-grid">
          {blobs.map((b) => (
            <div key={b.url} className={`adm-media-item${mode === "picker" ? " is-picker" : ""}`}>
              <img
                src={b.url}
                alt={b.alt || b.filename || ""}
                loading="lazy"
                onLoad={(e) => onImgLoad(b.url, e)}
                onClick={() => (mode === "picker" ? onSelect?.(b.url) : copy(b.url))}
              />
              <div className="adm-media-meta">
                <b title={b.filename}>{b.filename || b.pathname?.split("/").pop()}</b>
                <small>{formatSize(b.size)} · {formatDims(b.width, b.height)}</small>
                {b.alt ? <small className="adm-media-alt">Alt: {b.alt}</small> : <small className="adm-media-alt is-missing">No alt text</small>}
              </div>

              {mode === "page" && (
                <div className="adm-media-actions">
                  <input
                    value={altDrafts[b.url] ?? b.alt ?? ""}
                    placeholder="Alt text"
                    onChange={(e) => onAltChange(b.url, e.target.value)}
                    onBlur={() => flushAlt(b.url)}
                  />
                  <span className={`adm-alt-status is-${altStatus[b.url] || "idle"}`}>
                    {altStatus[b.url] === "saving" && "Saving…"}
                    {altStatus[b.url] === "saved" && "Saved"}
                    {altStatus[b.url] === "error" && "Not saved"}
                  </span>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <button type="button" className="adm-btn" style={{ padding: "5px 12px", fontSize: ".78rem" }} onClick={() => copy(b.url)}>
                      {copied === b.url ? "Copied!" : "Copy URL"}
                    </button>
                    <button type="button" className="adm-btn adm-btn-danger" style={{ padding: "5px 12px", fontSize: ".78rem" }} onClick={() => remove(b.url)}>
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
