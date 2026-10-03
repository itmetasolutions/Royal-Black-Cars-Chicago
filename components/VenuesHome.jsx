import Reveal from "./Reveal.jsx";
import { homeField } from "../lib/homeDefaults.js";

export default function VenuesHome({ page, cards = [] }) {

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div style={{ maxWidth: "min(60%, 720px)" }}>
            <p className="eyebrow">{homeField(page, "venuesEyebrow")}</p>
            <h2>{homeField(page, "venuesHeading")}</h2>
            <p className="lead" style={{ marginTop: 18 }}>{homeField(page, "venuesDescription")}</p>
          </div>
          <a className="btn btn-line" href="/venues/">{homeField(page, "venuesLinkLabel")}</a>
        </Reveal>
        <div className="strip" style={{ marginTop: 28 }}>
          {cards.map((v, i) => (
            <Reveal key={v.href} delay={i} as="a" href={v.href} className="strip-card">
              <img src={v.img} alt={v.title} loading="lazy" />
              <span>{v.title}<small>{v.meta}</small></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
