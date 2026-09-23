import { PHONE, PHONE_HREF } from "../lib/data.js";

export default function Cta() {
  return (
    <section className="sec cta">
      <div className="wrap">
        <h2>Your car is one minute away</h2>
        <p>Get a flat rate online, or speak to a dispatcher at any hour.</p>
        <div className="cta-b">
          <a className="btn btn-gold" href="/#quote">Get your rate</a>
          <a className="btn btn-line" href={PHONE_HREF}>{PHONE}</a>
        </div>
      </div>
    </section>
  );
}
