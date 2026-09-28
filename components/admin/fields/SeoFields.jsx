"use client";

export default function SeoFields({ seo, onChange }) {
  const set = (k) => (e) => onChange({ ...seo, [k]: e.target.value });
  return (
    <div className="adm-card" style={{ background: "var(--wash)" }}>
      <h2>SEO</h2>
      <p className="adm-card-sub">Search engine title, description and keyword targeting for this page.</p>
      <div className="adm-field">
        <label>Meta title</label>
        <input value={seo.metaTitle || ""} onChange={set("metaTitle")} placeholder="Shown as the page title in search results" />
      </div>
      <div className="adm-field">
        <label>Meta description</label>
        <textarea value={seo.metaDescription || ""} onChange={set("metaDescription")} rows={2} placeholder="Shown as the snippet in search results" />
      </div>
      <div className="adm-field">
        <label>Focus keyword</label>
        <input value={seo.focusKeyword || ""} onChange={set("focusKeyword")} placeholder="The main keyword this page targets" />
      </div>
      <div className="adm-field">
        <label>Secondary keywords</label>
        <input value={seo.secondaryKeywords || ""} onChange={set("secondaryKeywords")} placeholder="Comma-separated" />
      </div>
    </div>
  );
}
