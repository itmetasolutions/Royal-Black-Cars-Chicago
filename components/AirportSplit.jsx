import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import AirportTabs from "./AirportTabs.jsx";
import { homeField } from "../lib/homeDefaults.js";

export default function AirportSplit({ page }) {
  const points = homeField(page, "airportPoints");
  const tabs = homeField(page, "airportTabs");

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
          <a className="more-link" href={homeField(page, "airportMoreHref")}>{homeField(page, "airportMoreLabel")}</a>
        </Reveal>
      </div>
      <div className="wrap" style={{ marginTop: 56 }}>
        <Reveal>
          <AirportTabs tabs={tabs} />
        </Reveal>
      </div>
    </section>
  );
}
