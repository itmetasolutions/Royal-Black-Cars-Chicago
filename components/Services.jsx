import Reveal from "./Reveal.jsx";
import { homeField } from "../lib/homeDefaults.js";

export default function Services({ page, cards = [] }) {

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{homeField(page, "servicesEyebrow")}</p>
          <h2>{homeField(page, "servicesHeading")}</h2>
        </Reveal>
        <div className="svc">
          {cards.map((s, i) => (
            <Reveal as="a" key={s.href} href={s.href} delay={i % 3}>
              <img className="photo" src={s.img} alt="" loading="lazy" />
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
