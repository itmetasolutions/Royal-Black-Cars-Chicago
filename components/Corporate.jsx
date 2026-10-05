import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import { homeField } from "../lib/homeDefaults.js";
import KeywordText, { parseKeywordRules } from "./KeywordText.jsx";

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
          <p className="lead"><KeywordText text={homeField(page, "corporateLead")} rules={parseKeywordRules(homeField(page, "keywordLinks"))} /></p>
          <ul className="tick">
            {points.map((p) => <li key={p}><Check />{p}</li>)}
          </ul>
          <a className="btn btn-dark" href={homeField(page, "corporateCtaHref")}>{homeField(page, "corporateCtaLabel")}</a>
        </Reveal>
      </div>
    </section>
  );
}
