import Reveal from "./Reveal.jsx";
import { faqSchema } from "../lib/schema.js";

export default function PageFaq({ faqs, eyebrow = "GOOD TO KNOW", title = "Questions" }) {
  if (!faqs?.length) return null;
  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
        <Reveal><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></Reveal>
        <Reveal className="faq" delay={1} style={{ marginTop: 32 }}>
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="faq-a" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
