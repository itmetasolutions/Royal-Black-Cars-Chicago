import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import { homeField } from "../lib/homeDefaults.js";

export default function AirportSplit({ page, cards = [] }) {
  const points = homeField(page, "airportPoints");

  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap split">
        <Reveal className="media" slide>
          <img className="photo" src={homeField(page, "airportImg")} alt={homeField(page, "airportImgAlt")} loading="lazy" style={{ zIndex: 2 }} />
          <div className="badge">{homeField(page, "airportBadgeLabel")}<b>{homeField(page, "airportBadgeValue")}</b></div>
        </Reveal>
        <Reveal delay={1}>
          <p className="eyebrow">{homeField(page, "airportEyebrow")}</p>
          <h2>{homeField(page, "airportHeading")}</h2>
          <p className="lead">{homeField(page, "airportLead")}</p>
          <ul className="tick">
            {points.map((p) => <li key={p}><Check />{p}</li>)}
          </ul>
          <div className="ports">
            {cards.map((a) => (
              <a className="port" key={a.href} href={a.href}>
                <span>{a.badge}</span><h3>{a.title}</h3><small>{a.text}</small><b>{a.price}</b>
              </a>
            ))}
          </div>
          <a className="more-link" href={homeField(page, "airportMoreHref")}>{homeField(page, "airportMoreLabel")}</a>
        </Reveal>
      </div>
    </section>
  );
}
