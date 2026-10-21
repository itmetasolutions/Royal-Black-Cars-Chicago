"use client";

import RichTextEditor from "../RichTextEditor.jsx";
import ImageField from "./ImageField.jsx";

// Fixed at 3 sections to match how ServicePageTemplate pairs each with a
// gallery image (gallery[0..2] for sections, gallery[3] for "Best for").
// `withImage` turns on a per-section photo — used by area/cluster pages,
// which show each section side-by-side with its own image; left off for
// service pages, which show these three as a plain text grid instead.
export default function SectionsField({ value, onChange, label = 'Detail sections (3, shown as the "The Details" grid)', withImage = false }) {
  const sections = [0, 1, 2].map((i) => value?.[i] || { h: "", p: [""] });

  const update = (i, key, val) => {
    const next = sections.map((s, idx) => (idx === i ? { ...s, [key]: val } : s));
    onChange(next);
  };

  return (
    <div className="adm-field" style={{ maxWidth: 700 }}>
      <label>{label}</label>
      {sections.map((s, i) => (
        <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 12, marginBottom: 10 }}>
          <input
            value={s.h}
            onChange={(e) => update(i, "h", e.target.value)}
            placeholder={`Section ${i + 1} heading`}
            style={{ marginBottom: 8 }}
          />
          <RichTextEditor
            value={Array.isArray(s.p) ? s.p[0] || "" : s.p || ""}
            onChange={(html) => update(i, "p", [html])}
            label={null}
            minHeight={110}
          />
          {withImage && (
            <ImageField label={`Section ${i + 1} photo (blank uses the page's main photo)`} value={s.img} onChange={(val) => update(i, "img", val)} />
          )}
        </div>
      ))}
    </div>
  );
}
