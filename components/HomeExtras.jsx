import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import KeywordText, { parseKeywordRules } from "./KeywordText.jsx";
import { homeField } from "../lib/homeDefaults.js";

// "Title | text" lines from the admin become [title, text] pairs.
export const splitPairs = (lines) =>
  (lines || []).map((line) => {
    const i = String(line).indexOf("|");
    return i < 0 ? [String(line).trim(), ""] : [line.slice(0, i).trim(), line.slice(i + 1).trim()];
  });

const paras = (value) => (Array.isArray(value) ? value : String(value || "").split("\n")).filter(Boolean);

function SectionHead({ eyebrow, heading, lead }) {
  return (
    <Reveal className="section-head head-70">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{heading}</h2>
      {lead && <p className="lead" style={{ marginTop: 16, maxWidth: "none" }}>{lead}</p>}
    </Reveal>
  );
}

export function WhyChoose({ page }) {
  const points = splitPairs(homeField(page, "whyPoints"));
  return (
    <section className="sec">
      <div className="wrap split">
        <Reveal className="media" slide>
          <img className="photo" src={homeField(page, "whyImg")} alt={homeField(page, "whyImgAlt")} loading="lazy" style={{ zIndex: 2 }} />
        </Reveal>
        <Reveal delay={1}>
          <p className="eyebrow">{homeField(page, "whyEyebrow")}</p>
          <h2>{homeField(page, "whyHeading")}</h2>
          <p className="lead">{homeField(page, "whyLead")}</p>
          {paras(homeField(page, "whyBody")).map((p) => <p key={p}>{p}</p>)}
          <div className="pillars">
            {points.map(([title, text]) => (
              <div key={title} className="pillar">
                <b>{title}</b>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OHareDetail({ page }) {
  const options = splitPairs(homeField(page, "ohareOptions"));
  const imgs = homeField(page, "ohareOptionImgs") || [];
  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap">
        <SectionHead eyebrow={homeField(page, "ohareEyebrow")} heading={homeField(page, "ohareHeading")} lead={homeField(page, "ohareLead")} />
        <div className="ohare-grid">
          <Reveal className="opt-grid">
            {options.map(([title, text], i) => (
              <div key={title} className="opt-card">
                <img src={imgs[i]} alt={title} loading="lazy" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={1} className="route-box">
            <p className="eyebrow">ROUTES</p>
            <h3>{homeField(page, "ohareRouteHeading")}</h3>
            <p>{homeField(page, "ohareRouteText")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ExperienceDifferent({ page }) {
  const points = splitPairs(homeField(page, "diffPoints"));
  return (
    <section className="sec">
      <div className="wrap">
        <div className="diff-banner">
          <img src={homeField(page, "diffImg")} alt={homeField(page, "diffImgAlt")} loading="lazy" />
          <div className="diff-banner-text">
            <p className="eyebrow">{homeField(page, "diffEyebrow")}</p>
            <h2>{homeField(page, "diffHeading")}</h2>
            <p className="lead">{homeField(page, "diffLead")}</p>
          </div>
        </div>
        <div className="diff-points">
          {paras(homeField(page, "diffBody")).map((p) => <p key={p} className="diff-body">{p}</p>)}
          <div className="feature-grid cols-3" style={{ marginTop: 28 }}>
            {points.map(([title, text], i) => (
              <Reveal key={title} delay={i % 3} className="feature-card">
                <Check />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GroupTransport({ page }) {
  const imgs = homeField(page, "groupImgs") || [];
  const uses = homeField(page, "groupUses") || [];
  const questions = homeField(page, "groupQuestions") || [];
  const rules = parseKeywordRules(homeField(page, "keywordLinks"));
  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap split">
        <Reveal>
          <p className="eyebrow">{homeField(page, "groupEyebrow")}</p>
          <h2>{homeField(page, "groupHeading")}</h2>
          <p className="lead">{homeField(page, "groupLead")}</p>
          {paras(homeField(page, "groupBody")).map((p) => <p key={p}><KeywordText text={p} rules={rules} /></p>)}
          <p className="chips-title">We accommodate transportation needs for</p>
          <div className="chips">
            {uses.map((u) => <span key={u} className="chip">{u}</span>)}
          </div>
          <ul className="tick" style={{ marginTop: 22 }}>
            {questions.map((q) => <li key={q}><Check />{q}</li>)}
          </ul>
          <p style={{ marginTop: 18 }}>{homeField(page, "groupClosing")}</p>
        </Reveal>
        <Reveal delay={1} className="group-mosaic">
          <img className="gm-big" src={imgs[0]} alt={homeField(page, "groupHeading")} loading="lazy" />
          <img src={imgs[1]} alt="" loading="lazy" />
          <img src={imgs[2]} alt="" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}
