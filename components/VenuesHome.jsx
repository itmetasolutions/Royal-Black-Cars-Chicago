import Reveal from "./Reveal.jsx";
import { venueDetails } from "../lib/locations.js";

const featured = ["Wrigley Field", "Soldier Field", "United Center", "Guaranteed Rate Field", "McCormick Place"];
const venues = featured.map((name) => venueDetails.find((v) => v.name === name)).filter(Boolean);

export default function VenuesHome() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div>
            <p className="eyebrow">GAME DAYS & EVENT NIGHTS</p>
            <h2>Dropped at the gate, picked up after the final horn</h2>
          </div>
          <a className="btn btn-line" href="/venues/">All venues</a>
        </Reveal>
        <div className="strip" style={{ marginTop: 28 }}>
          {venues.map((v, i) => (
            <Reveal key={v.slug} delay={i} as="a" href={v.href} className="strip-card">
              <img src={v.img} alt={v.name} loading="lazy" />
              <span>{v.name}<small>{v.area}</small></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
