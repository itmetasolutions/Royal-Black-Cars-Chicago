"use client";

import RichTextEditor from "../RichTextEditor.jsx";

// A repeatable list of short rich-text points (e.g. "Best for"), each its
// own small editor so a point can carry a link or bold text.
export default function RichPointsField({ label, value, onChange, hint }) {
  const points = value && value.length ? value : [""];

  const update = (i, html) => onChange(points.map((p, idx) => (idx === i ? html : p)));
  const addPoint = () => onChange([...points, ""]);
  const removePoint = (i) => onChange(points.filter((_, idx) => idx !== i));

  return (
    <div className="adm-field" style={{ maxWidth: 700 }}>
      <label>{label}</label>
      {hint && <small style={{ display: "block", marginBottom: 10 }}>{hint}</small>}
      {points.map((p, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
          <div style={{ flex: 1 }}>
            <RichTextEditor value={p} onChange={(html) => update(i, html)} label={null} minHeight={50} withImage={false} />
          </div>
          <button type="button" className="adm-btn adm-btn-danger" style={{ padding: "7px 12px", fontSize: ".78rem", flexShrink: 0 }} onClick={() => removePoint(i)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className="adm-btn" style={{ background: "transparent", border: "1px solid var(--line)", color: "var(--text)" }} onClick={addPoint}>
        + Add point
      </button>
    </div>
  );
}
