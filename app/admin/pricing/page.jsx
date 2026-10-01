"use client";

import { useEffect, useState } from "react";

const GROUPS = [
  { type: "airport", title: "Airport flat rates", note: "Shown on the airports pages, the home page tiles and the rates table." },
  { type: "fleet", title: "Fleet rates", note: "Shown on each vehicle page and the rates table." },
];

export default function PricingPage() {
  const [items, setItems] = useState([]);
  const [fields, setFields] = useState({});
  const [edits, setEdits] = useState({});
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/pricing");
        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error(data.error || "Could not load prices.");
        setItems(data.items || []);
        setFields(data.fields || {});
      } catch (err) {
        setMsg({ type: "err", text: err.message });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const valueOf = (item, key) => edits[item.id]?.[key] ?? item.prices[key] ?? "";

  const setValue = (item, key, value) =>
    setEdits((e) => ({ ...e, [item.id]: { ...item.prices, ...e[item.id], [key]: value } }));

  const dirtyIds = Object.keys(edits).filter((id) => {
    const item = items.find((i) => i.id === id);
    if (!item) return false;
    return Object.entries(edits[id]).some(([k, v]) => (item.prices[k] ?? "") !== v);
  });

  const save = async () => {
    if (dirtyIds.length === 0) return;
    setBusy(true);
    setMsg(null);
    try {
      const updates = dirtyIds.map((id) => ({ id, prices: edits[id] }));
      const res = await fetch("/api/admin/pricing", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updates }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Save failed.");
      setItems((list) => list.map((i) => (edits[i.id] ? { ...i, prices: { ...i.prices, ...edits[i.id] } } : i)));
      setEdits({});
      setMsg({ type: "ok", text: `Saved ${data.saved} ${data.saved === 1 ? "price" : "prices"}.` });
    } catch (err) {
      setMsg({ type: "err", text: err.message });
    } finally {
      setBusy(false);
    }
  };

  if (loading) return (<><h1>Pricing</h1><p className="adm-sub">Loading…</p></>);

  return (
    <>
      <h1>Pricing</h1>
      <p className="adm-sub">
        Every published price in one place. These are the same values as the matching page&apos;s own fields — change
        them here and the pages that quote them update together.
      </p>

      {GROUPS.map((group) => {
        const rows = items.filter((i) => i.type === group.type);
        const cols = fields[group.type] || [];
        if (rows.length === 0) return null;
        return (
          <div className="adm-card" key={group.type}>
            <h2>{group.title}</h2>
            <p className="adm-sub" style={{ marginBottom: 16 }}>{group.note}</p>
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Page</th>
                  {cols.map(([key, label]) => <th key={key}>{label}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.title}
                      <br />
                      <code style={{ fontSize: ".76rem", color: "var(--muted)" }}>{item.slug}</code>
                    </td>
                    {cols.map(([key]) => (
                      <td key={key}>
                        <input
                          className="adm-price-input"
                          value={valueOf(item, key)}
                          onChange={(e) => setValue(item, key, e.target.value)}
                          placeholder="—"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}

      <button className="adm-btn adm-btn-gold" type="button" onClick={save} disabled={busy || dirtyIds.length === 0}>
        {busy ? "Saving…" : dirtyIds.length > 0 ? `Save ${dirtyIds.length} changed ${dirtyIds.length === 1 ? "page" : "pages"}` : "Save changes"}
      </button>
      {msg && <p className={`adm-msg ${msg.type}`}>{msg.text}</p>}
    </>
  );
}
