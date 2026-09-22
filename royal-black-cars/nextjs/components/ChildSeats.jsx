import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";

const seats = [
  ["Infant seat", "rear-facing, up to 35 lb"],
  ["Toddler seat", "forward-facing, 20 to 65 lb"],
  ["Booster seat", "40 to 100 lb"],
];

export default function ChildSeats() {
  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap split rev">
        <Reveal className="media" style={{ aspectRatio: "2/1", background: "var(--card)", display: "grid", placeItems: "center", padding: 20 }}>
          <img src="/images/car-seats.png" alt="Infant, toddler and booster car seats available with Royal Black Cars Chicago"
               width={943} height={472} loading="lazy" style={{ objectFit: "contain" }} />
        </Reveal>
        <Reveal delay={1}>
          <p className="eyebrow">FAMILY TRAVEL</p>
          <h2>Child seats, fitted and checked</h2>
          <p className="lead">Add a seat when you book and it is installed before the car reaches you. First seat is free on every ride.</p>
          <ul className="tick">
            {seats.map(([name, detail]) => (
              <li key={name}><Check /><span><b>{name}</b> — {detail}</span></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
