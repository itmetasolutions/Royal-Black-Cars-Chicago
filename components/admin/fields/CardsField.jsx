"use client";

import ImageField from "./ImageField.jsx";

// Generic repeater for the list-shaped sections (service cards, child seats,
// airport tiles, marquee items…). `spec` names the sub-fields of one row, so
// one editor covers every list instead of a bespoke component per section.
export default function CardsField({ label, value, onChange, spec, hint, max }) {
  const rows = Array.isArray(value) ? value : [];

  const update = (i, key, val) => onChange(rows.map((r, idx) => (idx === i ? { ...r, [key]: val } : r)));
  const add = () => onChange([...rows, Object.fromEntries(spec.map(([k]) => [k, ""]))]);
  const remove = (i) => onChange(rows.filter((_, idx) => idx !== i));
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= rows.length) return;
    const next = [...rows];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="adm-field" style={{ maxWidth: 700 }}>
      <label>{label}</label>
      {rows.map((row, i) => (
        <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 12, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <b style={{ fontSize: ".78rem", color: "var(--muted)" }}>#{i + 1}</b>
            <div style={{ display: "flex", gap: 6 }}>
              <button type="button" className="adm-btn" style={{ padding: "4px 10px", fontSize: ".78rem" }} onClick={() => move(i, -1)} disabled={i === 0}>↑</button>
              <button type="button" className="adm-btn" style={{ padding: "4px 10px", fontSize: ".78rem" }} onClick={() => move(i, 1)} disabled={i === rows.length - 1}>↓</button>
              <button type="button" className="adm-btn" style={{ padding: "4px 10px", fontSize: ".78rem" }} onClick={() => remove(i)}>Remove</button>
            </div>
          </div>
          {spec.map(([key, sublabel, kind]) => {
            if (kind === "image") {
              return <ImageField key={key} label={sublabel} value={row[key]} onChange={(val) => update(i, key, val)} />;
            }
            if (kind === "textarea") {
              return (
                <div className="adm-field" key={key}>
                  <label>{sublabel}</label>
                  <textarea value={row[key] || ""} onChange={(e) => update(i, key, e.target.value)} rows={2} />
                </div>
              );
            }
            return (
              <div className="adm-field" key={key}>
                <label>{sublabel}</label>
                <input value={row[key] || ""} onChange={(e) => update(i, key, e.target.value)} />
              </div>
            );
          })}
        </div>
      ))}
      {(!max || rows.length < max) && (
        <button type="button" className="adm-btn" style={{ padding: "7px 16px", fontSize: ".82rem" }} onClick={add}>+ Add item</button>
      )}
      {hint && <small style={{ display: "block", marginTop: 8 }}>{hint}</small>}
    </div>
  );
}
