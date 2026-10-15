"use client";

import RichTextEditor from "../RichTextEditor.jsx";

// Fixed at 4 cards to match the "Why ride with us" grid. Each card is its own
// heading and rich-text description; leaving all four blank falls back to
// the site-wide points.
export default function WhyPointsField({ value, onChange }) {
  const points = [0, 1, 2, 3].map((i) => value?.[i] || ["", ""]);

  const update = (i, field, val) => {
    const next = points.map((p, idx) => (idx === i ? (field === "title" ? [val, p[1] || ""] : [p[0] || "", val]) : p));
    onChange(next);
  };

  return (
    <div className="adm-field" style={{ maxWidth: 700 }}>
      <label>Why ride with us (this page&apos;s own points)</label>
      <small style={{ display: "block", marginBottom: 10 }}>
        Leave all four blank to show the site-wide points instead.
      </small>
      {points.map((p, i) => (
        <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 12, marginBottom: 10 }}>
          <input
            value={p[0] || ""}
            onChange={(e) => update(i, "title", e.target.value)}
            placeholder={`Card ${i + 1} heading`}
            style={{ marginBottom: 8 }}
          />
          <RichTextEditor
            value={p[1] || ""}
            onChange={(html) => update(i, "text", html)}
            label={null}
            minHeight={70}
            withImage={false}
          />
        </div>
      ))}
    </div>
  );
}
