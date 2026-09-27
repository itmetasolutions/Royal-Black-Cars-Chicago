"use client";

import { useState } from "react";

const FIELDS = [
  ["site_name", "Site name", "Royal Black Cars Chicago"],
  ["tagline", "Tagline", "Chicago's black car service, priced before you ride."],
  ["contact_phone", "Contact phone", "+1 872 484 8060"],
  ["contact_email", "Contact email", "info@royalblackcarchicago.com"],
];

export default function SettingsForm({ initial }) {
  const [values, setValues] = useState(initial || {});
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Save failed.");
      setMsg({ type: "ok", text: "Saved." });
    } catch (err) {
      setMsg({ type: "err", text: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit}>
      {FIELDS.map(([key, label, placeholder]) => (
        <div className="adm-field" key={key}>
          <label htmlFor={`s-${key}`}>{label}</label>
          <input id={`s-${key}`} value={values[key] || ""} onChange={set(key)} placeholder={placeholder} />
        </div>
      ))}
      <button className="adm-btn adm-btn-gold" type="submit" disabled={busy}>{busy ? "Saving…" : "Save settings"}</button>
      {msg && <p className={`adm-msg ${msg.type}`}>{msg.text}</p>}
    </form>
  );
}
