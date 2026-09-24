import { PHONE, PHONE_HREF, IMG } from "../lib/data.js";

export default function Cta({ img }) {
  return (
    <section className="sec cta">
      <div className="cta-bg" aria-hidden="true">
        <img src={img || IMG.hero} alt="" loading="lazy" />
      </div>
      <div className="wrap">
        <h2>Your car is one minute away</h2>
        <p>Get a flat rate online, or speak to a dispatcher at any hour.</p>
        <div className="cta-b">
          <a className="btn btn-gold" href="/get-a-quote/">Get a free quote</a>
          <a className="btn btn-line" href={PHONE_HREF}>{PHONE}</a>
        </div>
      </div>
    </section>
  );
}
