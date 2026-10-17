import Reveal from "./Reveal.jsx";
import { homeField } from "../lib/homeDefaults.js";
import RichText from "./RichText.jsx";

export default function Services({ page, cards = [] }) {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <div className="home-svc-head">
            <p className="eyebrow">{homeField(page, "servicesEyebrow")}</p>
            <h2>{homeField(page, "servicesHeading")}</h2>
            <RichText className="lead rich-text" style={{ marginTop: 18 }} value={homeField(page, "servicesDescription")} />
          </div>
        </Reveal>
        <div className="svc-home">
          {cards.map((s, i) => (
            <Reveal as="a" key={s.href} href={s.href} delay={i % 3}>
              <img className="photo" src={s.img} alt="" loading="lazy" />
              <div className="svc-home-text">
                <h3>{s.title}</h3>
                <div className="svc-desc"><p>{s.text}</p></div>
                <span className="svc-cta">{s.cta || `Book ${s.title}`} <span aria-hidden="true">→</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
