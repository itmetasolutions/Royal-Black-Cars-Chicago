"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    // TODO: POST to your contact/booking API here
    setSent(true);
  };

  if (sent) {
    return <p className="qnote" style={{ color: "var(--ok)", textAlign: "left", fontSize: "1rem" }}>Thanks — dispatch will reply within a few minutes during business hours, or first thing the next morning overnight.</p>;
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" value={form.name} onChange={set("name")} placeholder="Your name" required /></div>
      <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" required /></div>
      <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="(312) 555-0142" /></div>
      <div className="field"><label htmlFor="c-message">Message</label><input id="c-message" value={form.message} onChange={set("message")} placeholder="Tell us about your trip" /></div>
      <button className="btn btn-gold" type="submit">Send message</button>
    </form>
  );
}
