import { splitPairs } from "./HomeExtras.jsx";
import Reveal from "./Reveal.jsx";
import { homeField } from "../lib/homeDefaults.js";
import KeywordText, { parseKeywordRules } from "./KeywordText.jsx";

export default function VenuesHome({ page, cards = [] }) {
  const guide = Object.fromEntries(splitPairs(homeField(page, "venuesGuide")));

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", maxWidth: "100%" }}>
          <div className="venues-head">
            <p className="eyebrow">{homeField(page, "venuesEyebrow")}</p>
            <h2>{homeField(page, "venuesHeading")}</h2>
            {(homeField(page, "venuesDescription") || "").split("\n").filter(Boolean).map((line, i) => (
              <p key={i} className="lead" style={{ marginTop: i === 0 ? 18 : 10, maxWidth: "none" }}><KeywordText text={line} rules={parseKeywordRules(homeField(page, "keywordLinks"))} /></p>
            ))}
          </div>
          <a className="btn btn-line" href="/venues/">{homeField(page, "venuesLinkLabel")}</a>
        </Reveal>
        <div className="venue-cards">
          {cards.map((v, i) => (
            <Reveal key={v.href} delay={i % 3} as="a" href={v.href} className="venue-card">
              <div className="venue-card-img">
                <img src={v.img} alt={v.title} loading="lazy" />
                {v.meta && <span className="venue-card-tag">{v.meta}</span>}
              </div>
              <div className="venue-card-body">
                <h3>{v.title}</h3>
                {guide[v.title] && <p>{guide[v.title]}</p>}
                <span className="venue-card-link">Venue transportation <span aria-hidden="true">→</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
