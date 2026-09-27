const TABS = [
  ["Core pages", "Home, About, Contact, FAQ, Rates, Corporate Accounts, Terms, Privacy — editable, not addable or deletable."],
  ["Service pages", "15 pages sharing one template — edit any, or add a new one with its own slug, content and SEO fields."],
  ["Airport pages", "7 pages sharing one template — same edit/add capability."],
  ["Fleet pages", "8 vehicle pages sharing one template — same edit/add capability."],
];

export default function AdminPagesPlaceholder() {
  return (
    <>
      <h1>Pages</h1>
      <p className="adm-sub">Phase 2 — content editors for every page, grouped by template.</p>
      <div className="adm-card">
        <h2>What's coming</h2>
        <p className="adm-card-sub">
          Each template gets its own tab. Core pages can be edited but not added or removed (they need custom layout work in code either way). Service, Airport and Fleet pages share one design each, so new ones can be added straight from here with the full field set: title, slug, meta title, meta description, focus keyword, secondary keywords, and every content block the template uses.
        </p>
        <div style={{ display: "grid", gap: 12 }}>
          {TABS.map(([title, desc]) => (
            <div key={title} style={{ border: "1px solid var(--line)", borderRadius: "var(--r)", padding: "14px 18px" }}>
              <b style={{ fontSize: ".92rem" }}>{title}</b>
              <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: ".86rem" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
