import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import { homeField } from "../lib/homeDefaults.js";
import KeywordText, { parseKeywordRules } from "./KeywordText.jsx";

export default function ChildSeats({ page }) {
  const seats = homeField(page, "childSeats");

  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap split rev">
        <Reveal className="media child-media">
          <img src={homeField(page, "childImg")} alt="Infant, toddler and booster car seats available with Royal Black Cars Chicago"
               width={943} height={472} loading="lazy" style={{ objectFit: "contain" }} />
        </Reveal>
        <Reveal delay={1}>
          <p className="eyebrow">{homeField(page, "childEyebrow")}</p>
          <h2>{homeField(page, "childHeading")}</h2>
          <p className="lead"><KeywordText text={homeField(page, "childLead")} rules={parseKeywordRules(homeField(page, "keywordLinks"))} /></p>
          <ul className="tick">
            {seats.map((s) => (
              <li key={s.name}><Check /><span><b>{s.name}</b> — {s.detail}</span></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
