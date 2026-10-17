import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import { homeField } from "../lib/homeDefaults.js";
import RichText from "./RichText.jsx";

export default function Corporate({ page }) {
  const points = homeField(page, "corporatePoints");

  return (
    <section className="sec">
      <div className="wrap split">
        <Reveal className="media" slide>
          <img className="photo" src={homeField(page, "corporateImg")} alt="Executive sedan outside a Chicago office tower" loading="lazy" style={{ zIndex: 2 }} />
        </Reveal>
        <Reveal delay={1}>
          <p className="eyebrow">{homeField(page, "corporateEyebrow")}</p>
          <h2>{homeField(page, "corporateHeading")}</h2>
          <RichText className="lead rich-text" value={homeField(page, "corporateLead")} />
          <ul className="tick">
            {points.map((p) => <li key={p}><Check />{p}</li>)}
          </ul>
          <RichText className="rich-text" style={{ marginTop: 18 }} value={homeField(page, "corporateTravel")} />
          <div className="chips" style={{ marginTop: 14 }}>
            {(homeField(page, "corporateUses") || []).map((u) => <span key={u} className="chip">{u}</span>)}
          </div>
          <a className="btn btn-dark" href={homeField(page, "corporateCtaHref")} style={{ marginTop: 26 }}>{homeField(page, "corporateCtaLabel")}</a>
        </Reveal>
      </div>
    </section>
  );
}
