import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import { airports, IMG } from "../lib/data.js";

const points = [
  "60 minutes of free wait time at ORD and MDW",
  "Tolls, parking, meet & greet and gratuity included",
  "Child seats fitted before pick-up, first seat free",
];

export default function AirportSplit() {
  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap split">
        <Reveal className="media" slide>
          <img className="photo" src={IMG.airport} alt="Chauffeur meeting a client at O'Hare International Airport" loading="lazy" style={{ zIndex: 2 }} />
          <div className="badge">O&apos;Hare from downtown<b>$95 flat</b></div>
        </Reveal>
        <Reveal delay={1}>
          <p className="eyebrow">AIRPORTS</p>
          <h2>Land, walk out, drive off</h2>
          <p className="lead">Your chauffeur watches the flight, parks, and meets you inside baggage claim with a name board. If the flight lands early, so does the car.</p>
          <ul className="tick">
            {points.map(p => <li key={p}><Check />{p}</li>)}
          </ul>
          <div className="ports">
            {airports.map(a => (
              <a className="port" key={a.code} href={a.href}>
                <span>{a.code}</span><h3>{a.name}</h3><small>{a.note}</small><b>{a.rate}</b>
              </a>
            ))}
          </div>
          <a className="more-link" href="/airports/">All airports, including DuPage, Milwaukee and Gary</a>
        </Reveal>
      </div>
    </section>
  );
}
