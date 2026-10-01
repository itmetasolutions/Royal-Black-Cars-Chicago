import Reveal from "./Reveal.jsx";
import { venueDetails } from "../lib/locations.js";
import { homeField } from "../lib/homeDefaults.js";

export default function VenuesHome({ page }) {
  const venues = homeField(page, "venuesFeatured")
    .map((name) => venueDetails.find((v) => v.name === name))
    .filter(Boolean);

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div>
            <p className="eyebrow">{homeField(page, "venuesEyebrow")}</p>
            <h2>{homeField(page, "venuesHeading")}</h2>
          </div>
          <a className="btn btn-line" href="/venues/">{homeField(page, "venuesLinkLabel")}</a>
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
