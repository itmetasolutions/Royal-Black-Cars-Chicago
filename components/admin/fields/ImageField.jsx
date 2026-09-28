"use client";

import { useState } from "react";
import MediaLibraryModal from "../MediaLibraryModal.jsx";

export default function ImageField({ label, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="adm-field" style={{ maxWidth: 700 }}>
      {label && <label>{label}</label>}
      <div className="adm-image-field">
        <div className={`adm-image-preview${value ? "" : " empty"}`}>
          {value ? <img src={value} alt="" /> : "No image"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <input value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder="https://..." />
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="adm-btn" style={{ padding: "7px 16px", fontSize: ".82rem" }} onClick={() => setOpen(true)}>
              Choose from library
            </button>
            {value && (
              <button type="button" className="adm-btn adm-btn-line" style={{ padding: "7px 16px", fontSize: ".82rem", color: "var(--text)", borderColor: "var(--line)" }} onClick={() => onChange("")}>
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
      {open && (
        <MediaLibraryModal
          onClose={() => setOpen(false)}
          onSelect={(url) => { onChange(url); setOpen(false); }}
        />
      )}
    </div>
  );
}
