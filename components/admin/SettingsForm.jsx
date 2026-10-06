"use client";

import { useState } from "react";
import ImageField from "./fields/ImageField.jsx";

const FIELDS = [
  ["site_name", "Site name", "Royal Black Car Chicago"],
  ["tagline", "Tagline", "Chicago's black car service, priced before you ride."],
  ["contact_phone", "Contact phone", "+1 872 484 8060"],
  ["contact_email", "Contact email", "info@royalblackcarchicago.com"],
];

const NUMBER_FIELDS = [
  ["logo_width", "Logo width in pixels (height adjusts automatically)", "150"],
  ["logo_width_mobile", "Logo width on mobile in pixels", "120"],
];

const IMAGE_FIELDS = [
  ["logo_url", "Logo (header and footer)"],
  ["favicon_url", "Favicon (browser tab icon — SVG or PNG)"],
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
      {IMAGE_FIELDS.map(([key, label]) => (
        <ImageField key={key} label={label} value={values[key]} onChange={(v) => setValues({ ...values, [key]: v })} />
      ))}
      {NUMBER_FIELDS.map(([key, label, placeholder]) => (
        <div className="adm-field" key={key}>
          <label htmlFor={`s-${key}`}>{label}</label>
          <input id={`s-${key}`} type="number" min="40" max="600" step="1" value={values[key] || ""} onChange={set(key)} placeholder={placeholder} />
        </div>
      ))}
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
