import Reveal from "./Reveal.jsx";
import { faqs, PHONE_HREF } from "../lib/data.js";

export default function Faq() {
  return (
    <section className="sec">
      <div className="wrap faq-wrap">
        <Reveal>
          <p className="eyebrow">GOOD TO KNOW</p>
          <h2>Questions riders ask</h2>
          <div className="faq-aside" style={{ marginTop: 28 }}>
            <h3 style={{ marginBottom: 10 }}>Still unsure?</h3>
            <p>Dispatch answers in under a minute, day or night, and can quote a trip on the phone.</p>
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
