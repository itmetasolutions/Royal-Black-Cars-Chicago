import Reveal from "./Reveal.jsx";
import { homeField } from "../lib/homeDefaults.js";
import KeywordText, { parseKeywordRules } from "./KeywordText.jsx";

export default function VenuesHome({ page, cards = [] }) {

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
