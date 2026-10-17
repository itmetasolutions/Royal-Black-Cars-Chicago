import Reveal from "./Reveal.jsx";
import { PHONE_HREF } from "../lib/data.js";
import { homeField } from "../lib/homeDefaults.js";
import RichText from "./RichText.jsx";

export default function Faq({ page }) {
  const faqs = homeField(page, "faqs");

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="faq-head">
          <p className="eyebrow">{homeField(page, "faqEyebrow")}</p>
          <h2>{homeField(page, "faqHeading")}</h2>
        </Reveal>
        <Reveal className="faq faq-2col" delay={1}>
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <RichText className="faq-a" value={f.a} />
            </details>
          ))}
        </Reveal>
        <Reveal className="faq-aside faq-aside-full" delay={2}>
          <h3>{homeField(page, "faqAsideHeading")}</h3>
          <RichText className="rich-text" value={homeField(page, "faqAsideText")} />
          <a className="btn btn-gold" href={PHONE_HREF}>Call Now</a>
        </Reveal>
      </div>
    </section>
  );
}
