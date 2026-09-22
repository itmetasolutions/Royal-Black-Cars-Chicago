import Reveal from "./Reveal.jsx";
import { Stars } from "./icons.jsx";
import { reviews } from "../lib/data.js";

export default function Reviews() {
  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap">
        <Reveal><p className="eyebrow">REVIEWS</p><h2>4.9 across 300+ rides</h2></Reveal>
        <div className="revs">
          {reviews.map((r, i) => (
            <Reveal className="rev" key={r.name} delay={i}>
              <Stars />
              <q>{r.quote}</q>
              <cite><b>{r.name}</b>{r.trip}</cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
