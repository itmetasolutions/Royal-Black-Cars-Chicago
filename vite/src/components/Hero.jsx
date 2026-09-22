import { useState } from "react";
import { IMG, PHONE, PHONE_HREF } from "../lib/data.js";

const today = () => new Date().toISOString().slice(0, 10);

export default function Hero() {
  const [trip, setTrip] = useState("airport");
  const [note, setNote] = useState({ text: "Free cancellation up to 2 hours before pick-up.", ok: false });
  const [form, setForm] = useState({ pickup: "", drop: "", date: today(), time: "", vehicle: "Luxury sedan" });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.pickup.trim()) return document.getElementById("pickup")?.focus();
    // TODO: POST to your booking API here
    setNote({ text: "Thanks — a dispatcher will text your flat rate within a few minutes.", ok: true });
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
              <a className="btn btn-gold" href="#quote">Get your rate</a>
              <a className="btn btn-line" href={PHONE_HREF}>{PHONE}</a>
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
                <div className="field"><label htmlFor="date">Date</label><input id="date" type="date" min={today()} value={form.date} onChange={set("date")} required /></div>
                <div className="field"><label htmlFor="time">Time</label><input id="time" type="time" value={form.time} onChange={set("time")} required /></div>
              </div>
              <div className="field">
                <label htmlFor="veh">Vehicle</label>
                <select id="veh" value={form.vehicle} onChange={set("vehicle")}>
                  {["Luxury sedan","Executive sedan","Midsize SUV","Full-size SUV","Premium luxury SUV","Executive SUV","Sprinter van","Stretch limo","Minibus"].map(v => <option key={v}>{v}</option>)}
                </select>
              </div>
              <button className="btn btn-gold" type="submit">See my flat rate</button>
              <p className="qnote" style={note.ok ? { color: "#8FD4AE" } : undefined}>{note.text}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
