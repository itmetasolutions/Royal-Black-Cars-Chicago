"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | busy | sent | error
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setStatus("busy");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return <p className="qnote" style={{ color: "var(--ok)", textAlign: "left", fontSize: "1rem" }}>Thanks — dispatch will reply within a few minutes during business hours, or first thing the next morning overnight.</p>;
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" value={form.name} onChange={set("name")} placeholder="Your name" required /></div>
      <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" required /></div>
      <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="(312) 555-0142" /></div>
      <div className="field"><label htmlFor="c-message">Message</label><input id="c-message" value={form.message} onChange={set("message")} placeholder="Tell us about your trip" /></div>
      {status === "error" && <p className="qnote" style={{ color: "var(--err, #c0392b)", textAlign: "left", fontSize: ".9rem" }}>{error}</p>}
      <button className="btn btn-gold" type="submit" disabled={status === "busy"}>{status === "busy" ? "Sending…" : "Send message"}</button>
    </form>
  );
}
