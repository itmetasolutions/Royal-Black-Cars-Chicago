import Reveal from "./Reveal.jsx";
import { services } from "../lib/data.js";

export default function Services() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">WHAT WE DRIVE YOU TO</p>
          <h2>Six ways riders use us</h2>
        </Reveal>
        <div className="svc">
          {services.map((s, i) => (
            <Reveal as="a" key={s.title} href={s.href} delay={i % 3}>
              <img className="photo" src={s.img} alt="" loading="lazy" />
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
