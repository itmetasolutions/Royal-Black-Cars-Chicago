"use client";

import RichTextEditor from "../RichTextEditor.jsx";

export default function FaqEditor({ label = "FAQs", value, onChange }) {
  const faqs = value && value.length ? value : [{ q: "", a: "" }];

  const update = (i, key, val) => {
    const next = faqs.map((f, idx) => (idx === i ? { ...f, [key]: val } : f));
    onChange(next);
  };
  const addRow = () => onChange([...faqs, { q: "", a: "" }]);
  const removeRow = (i) => onChange(faqs.filter((_, idx) => idx !== i));

  return (
    <div className="adm-field" style={{ maxWidth: 700 }}>
      <label>{label}</label>
      {faqs.map((f, i) => (
        <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 12, marginBottom: 10 }}>
          <input
            value={f.q}
            onChange={(e) => update(i, "q", e.target.value)}
            placeholder="Question"
            style={{ marginBottom: 8 }}
          />
          <RichTextEditor value={f.a} onChange={(html) => update(i, "a", html)} label="Answer" minHeight={110} />
          <button type="button" className="adm-btn adm-btn-danger" style={{ marginTop: 8, padding: "5px 12px", fontSize: ".78rem" }} onClick={() => removeRow(i)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className="adm-btn" style={{ background: "transparent", border: "1px solid var(--line)", color: "var(--text)" }} onClick={addRow}>
        + Add question
      </button>
    </div>
  );
}
