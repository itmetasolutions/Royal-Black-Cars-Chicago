import Reveal from "./Reveal.jsx";
import { homeField } from "../lib/homeDefaults.js";

// Brand statement directly under the hero: a centred editorial band rather
// than another image/text split, so it reads as a statement and does not
// repeat the rhythm of the sections below it.
export default function Intro({ page }) {
  const body = homeField(page, "introBody") || [];

  return (
    <section className="sec intro-band">
      <div className="wrap">
        <Reveal className="intro-head">
          <p className="eyebrow">{homeField(page, "introEyebrow")}</p>
          <h2>{homeField(page, "introHeading")}</h2>
          <span className="intro-rule" aria-hidden="true" />
          <p className="intro-lead">{homeField(page, "introLead")}</p>
        </Reveal>

        {body.length > 0 && (
          <Reveal delay={1} className="intro-body">
            {body.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        )}
      </div>
    </section>
  );
}
