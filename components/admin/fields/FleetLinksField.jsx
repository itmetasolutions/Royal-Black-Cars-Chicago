"use client";

// A pick-list of this site's actual fleet pages, instead of typing a name
// and link by hand. Stored as the selected pages' slugs, in display order.
export default function FleetLinksField({ label = "Recommended vehicles", value, onChange, fleet = [] }) {
  const selected = (value || []).filter((v) => typeof v === "string" && fleet.some((f) => f.slug === v));

  const toggle = (slug) => {
    onChange(selected.includes(slug) ? selected.filter((s) => s !== slug) : [...selected, slug]);
  };
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= selected.length) return;
    const next = selected.slice();
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="adm-field" style={{ maxWidth: 700 }}>
      <label>{label}</label>
      <small style={{ display: "block", marginBottom: 10 }}>
        Pick which vehicles from the fleet to suggest on this page.
      </small>

      {fleet.length === 0 && <p style={{ color: "var(--muted)", fontSize: ".88rem" }}>No fleet pages yet.</p>}

      <div style={{ display: "grid", gap: 6 }}>
        {fleet.map((f) => (
          <label key={f.slug} style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 400, fontSize: ".92rem" }}>
            <input type="checkbox" style={{ width: "auto" }} checked={selected.includes(f.slug)} onChange={() => toggle(f.slug)} />
            {f.title}
          </label>
        ))}
      </div>

      {selected.length > 0 && (
        <div style={{ borderTop: "1px solid var(--line)", marginTop: 14, paddingTop: 10 }}>
          <small style={{ display: "block", marginBottom: 6, color: "var(--muted)" }}>Order shown on the page:</small>
          {selected.map((slug, i) => {
            const f = fleet.find((x) => x.slug === slug);
            return (
              <div key={slug} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, padding: "5px 0" }}>
                <span>{f?.title || slug}</span>
                <div style={{ display: "flex", gap: 6 }}>
                  <button type="button" className="adm-btn adm-btn-line" style={{ padding: "4px 9px", fontSize: ".76rem" }} onClick={() => move(i, -1)} disabled={i === 0}>↑</button>
                  <button type="button" className="adm-btn adm-btn-line" style={{ padding: "4px 9px", fontSize: ".76rem" }} onClick={() => move(i, 1)} disabled={i === selected.length - 1}>↓</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
