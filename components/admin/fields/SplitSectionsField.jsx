"use client";

import ImageField from "./ImageField.jsx";

const blankSection = () => ({ img: "", heading: "", text: "", points: [], ctaLabel: "", ctaHref: "" });

// A repeatable list of side-by-side sections for a service page: image on one
// side, heading/description/points on the other, with an optional CTA. Any
// number can be added; a blank heading, description, points list or CTA
// label is simply left off the page.
export default function SplitSectionsField({ value, onChange }) {
  const sections = value || [];

  const update = (i, key, val) => onChange(sections.map((s, idx) => (idx === i ? { ...s, [key]: val } : s)));
  const addSection = () => onChange([...sections, blankSection()]);
  const removeSection = (i) => onChange(sections.filter((_, idx) => idx !== i));
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= sections.length) return;
    const next = sections.slice();
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="adm-field" style={{ maxWidth: 700 }}>
      <label>Side-by-side sections</label>
      <small style={{ display: "block", marginBottom: 10 }}>
        Shown below the hero, alternating image left and image right. Add as many as you need — a blank heading,
        description, points list or CTA label just doesn&apos;t appear on the page.
      </small>

      {sections.map((s, i) => (
        <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 14, marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <b>Section {i + 1} — image on the {i % 2 ? "right" : "left"}</b>
            <div style={{ display: "flex", gap: 6 }}>
              <button type="button" className="adm-btn adm-btn-line" style={{ padding: "5px 10px", fontSize: ".78rem" }} onClick={() => move(i, -1)} disabled={i === 0}>↑</button>
              <button type="button" className="adm-btn adm-btn-line" style={{ padding: "5px 10px", fontSize: ".78rem" }} onClick={() => move(i, 1)} disabled={i === sections.length - 1}>↓</button>
              <button type="button" className="adm-btn adm-btn-danger" style={{ padding: "5px 12px", fontSize: ".78rem" }} onClick={() => removeSection(i)}>Remove</button>
            </div>
          </div>

          <ImageField label="Image (defaults to the hero image)" value={s.img} onChange={(v) => update(i, "img", v)} />

          <div className="adm-field">
            <label>Heading</label>
            <input value={s.heading || ""} onChange={(e) => update(i, "heading", e.target.value)} />
          </div>

          <div className="adm-field">
            <label>Description</label>
            <textarea value={s.text || ""} onChange={(e) => update(i, "text", e.target.value)} rows={3} />
          </div>

          <div className="adm-field">
            <label>Points</label>
            <textarea
              value={(s.points || []).join("\n")}
              onChange={(e) => update(i, "points", e.target.value.split("\n").map((l) => l.trim()).filter(Boolean))}
              rows={Math.max(3, (s.points || []).length + 1)}
            />
            <small>One per line.</small>
          </div>

          <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="adm-field">
              <label>CTA label</label>
              <input value={s.ctaLabel || ""} onChange={(e) => update(i, "ctaLabel", e.target.value)} placeholder="Leave blank to hide the button" />
            </div>
            <div className="adm-field">
              <label>CTA link</label>
              <input value={s.ctaHref || ""} onChange={(e) => update(i, "ctaHref", e.target.value)} placeholder="Leave blank to open the booking form" />
            </div>
          </div>
        </div>
      ))}

      <button type="button" className="adm-btn" style={{ background: "transparent", border: "1px solid var(--line)", color: "var(--text)" }} onClick={addSection}>
        + Add section
      </button>
    </div>
  );
}
