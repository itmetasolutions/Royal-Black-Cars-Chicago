"use client";

import { useEffect, useState } from "react";
import { fleetPages, serviceDetails } from "../lib/data.js";

const tripToService = {
  airport: "Airport Car Service",
  transfer: "Point-to-Point Car Service",
  hourly: "Hourly Chauffeur Service",
};

const empty = {
  name: "", email: "", phone: "", passengers: "1",
  date: "", time: "", pickup: "", drop: "",
  vehicle: "", service: "", stop: "", notes: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));
    const q = new URLSearchParams(window.location.search);
    setForm((f) => ({
      ...f,
      pickup: q.get("pickup") || f.pickup,
      drop: q.get("drop") || f.drop,
      date: q.get("date") || f.date,
      time: q.get("time") || f.time,
      vehicle: q.get("vehicle") || f.vehicle,
      service: tripToService[q.get("trip")] || f.service,
    }));
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.pickup.trim()) {
      return document.getElementById("qf-name")?.focus();
    }
    // TODO: POST to your booking API here
    setSent(true);
  };

  if (sent) {
    return (
      <div className="quote-panel">
        <h2>Request sent</h2>
        <p className="qp-sub" style={{ color: "#8FD4AE" }}>
          Thanks, {form.name.split(" ")[0] || "there"} — a dispatcher will text or email your flat rate within a few minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="quote-panel">
      <h2>Get your free quote</h2>
      <p className="qp-sub">Fill in your trip details and a dispatcher will confirm your flat rate — no obligation.</p>
      <form onSubmit={submit} noValidate>
        <div className="row2">
          <div className="field"><label htmlFor="qf-name">Full name</label><input id="qf-name" value={form.name} onChange={set("name")} placeholder="Your name" required /></div>
          <div className="field"><label htmlFor="qf-passengers">Passengers</label><input id="qf-passengers" type="number" min="1" max="55" value={form.passengers} onChange={set("passengers")} /></div>
        </div>
        <div className="row2">
          <div className="field"><label htmlFor="qf-email">Email address</label><input id="qf-email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" required /></div>
          <div className="field"><label htmlFor="qf-phone">Phone number</label><input id="qf-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="(312) 555-0142" required /></div>
        </div>
        <div className="row2">
          <div className="field"><label htmlFor="qf-date">Pickup date</label><input id="qf-date" type="date" min={minDate} value={form.date} onChange={set("date")} /></div>
          <div className="field"><label htmlFor="qf-time">Pickup time</label><input id="qf-time" type="time" value={form.time} onChange={set("time")} /></div>
        </div>
        <div className="field"><label htmlFor="qf-pickup">Pickup from</label><input id="qf-pickup" value={form.pickup} onChange={set("pickup")} placeholder="Address, hotel or terminal" required /></div>
        <div className="field"><label htmlFor="qf-drop">Drop off</label><input id="qf-drop" value={form.drop} onChange={set("drop")} placeholder="Address, venue or airport" /></div>
        <div className="field"><label htmlFor="qf-stop">Additional stop (optional)</label><input id="qf-stop" value={form.stop} onChange={set("stop")} placeholder="Any stop along the way" /></div>
        <div className="row2">
          <div className="field">
            <label htmlFor="qf-vehicle">Select vehicle</label>
            <select id="qf-vehicle" value={form.vehicle} onChange={set("vehicle")}>
              <option value="">No preference</option>
              {fleetPages.map((f) => <option key={f.slug} value={f.title}>{f.title}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="qf-service">Select service</label>
            <select id="qf-service" value={form.service} onChange={set("service")}>
              <option value="">Not sure yet</option>
              {serviceDetails.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            </select>
          </div>
        </div>
        <div className="field"><label htmlFor="qf-notes">Special notes</label><textarea id="qf-notes" value={form.notes} onChange={set("notes")} placeholder="Car seats, extra luggage, flight number — anything dispatch should know" /></div>
        <button className="btn btn-gold" type="submit">Get my free quote</button>
      </form>
    </div>
  );
}
