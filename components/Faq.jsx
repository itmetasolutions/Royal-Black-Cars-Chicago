import Reveal from "./Reveal.jsx";
import { PHONE_HREF } from "../lib/data.js";
import { homeField } from "../lib/homeDefaults.js";

export default function Faq({ page }) {
  const faqs = homeField(page, "faqs");

  return (
    <section className="sec">
      <div className="wrap faq-wrap">
        <Reveal>
          <p className="eyebrow">{homeField(page, "faqEyebrow")}</p>
          <h2>{homeField(page, "faqHeading")}</h2>
          <div className="faq-aside" style={{ marginTop: 28 }}>
            <h3 style={{ marginBottom: 10 }}>{homeField(page, "faqAsideHeading")}</h3>
            <p>{homeField(page, "faqAsideText")}</p>
            <a className="btn btn-gold" href={PHONE_HREF}>Call Now</a>
          </div>
        </Reveal>
        <Reveal className="faq" delay={1}>
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
