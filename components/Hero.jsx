"use client";

import { useEffect, useState } from "react";
import { IMG, PHONE_HREF, fleetPages } from "../lib/data.js";

export default function Hero() {
  const [trip, setTrip] = useState("airport");
  const [minDate, setMinDate] = useState("");
  const [form, setForm] = useState({ pickup: "", drop: "", date: "", time: "", vehicle: fleetPages[0].title });

  useEffect(() => {
    const now = new Date();
    const t = now.toISOString().slice(0, 10);
    setMinDate(t);
    now.setMinutes(now.getMinutes() + 90);
    const defaultTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    setForm((f) => ({ ...f, date: f.date || t, time: f.time || defaultTime }));
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.pickup.trim()) return document.getElementById("pickup")?.focus();
    const params = new URLSearchParams({
      trip, pickup: form.pickup, drop: form.drop, date: form.date, time: form.time, vehicle: form.vehicle,
    });
    window.location.href = `/get-a-quote/?${params.toString()}`;
  };

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img className="photo" src={IMG.hero} alt="" fetchPriority="high" style={{ zIndex: 1 }} />
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="wrap hero-in">
        <div className="hero-grid">
          <div>
            <h1>
              <span><i>Chicago&apos;s black car</i></span>
              <span><i>service, priced</i></span>
              <span><i>before you ride.</i></span>
            </h1>
            <p className="lead">Vetted chauffeurs, late-model sedans and SUVs, flights tracked in real time. One flat rate agreed up front — no surge, no surprises.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="/get-a-quote/">Get a Free Quote</a>
              <a className="btn btn-line" href={PHONE_HREF}>Call Now</a>
            </div>
          </div>

          <div className="quote" id="quote">
            <h2>Book in a minute</h2>
            <div className="tabs" role="tablist" aria-label="Trip type">
              {[["airport", "Airport"], ["transfer", "Point to point"], ["hourly", "Hourly"]].map(([id, label]) => (
                <button key={id} role="tab" aria-selected={trip === id} onClick={() => setTrip(id)}>{label}</button>
              ))}
            </div>
            <form onSubmit={submit} noValidate>
              <div className="field">
                <label htmlFor="pickup">Pick-up</label>
                <input id="pickup" value={form.pickup} onChange={set("pickup")} placeholder="Address, hotel or terminal" required />
              </div>
              {trip !== "hourly" && (
                <div className="field">
                  <label htmlFor="drop">Drop-off</label>
                  <input id="drop" value={form.drop} onChange={set("drop")} placeholder="Address, venue or airport" />
                </div>
              )}
              <div className="row2">
                <div className="field"><label htmlFor="date">Date</label><input id="date" type="date" min={minDate} value={form.date} onChange={set("date")} required /></div>
                <div className="field"><label htmlFor="time">Time</label><input id="time" type="time" value={form.time} onChange={set("time")} required /></div>
              </div>
              <div className="field">
                <label htmlFor="veh">Vehicle</label>
                <select id="veh" value={form.vehicle} onChange={set("vehicle")}>
                  {fleetPages.map((f) => <option key={f.slug}>{f.title}</option>)}
                </select>
              </div>
              <button className="btn btn-gold" type="submit">See my flat rate</button>
              <p className="qnote">Free cancellation up to 2 hours before pick-up.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
