import { PHONE_HREF, IMG } from "../lib/data.js";
import BookNowButton from "./BookNowButton.jsx";

export default function Cta({ img, heading, text }) {
  return (
    <section className="sec cta">
      <div className="cta-bg" aria-hidden="true">
        <img src={img || IMG.hero} alt="" loading="lazy" />
      </div>
      <div className="wrap">
        <h2>{heading || "Your car is one minute away"}</h2>
        {(text || "Get a flat rate online, or speak to a dispatcher at any hour.").split("\n").filter(Boolean).map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <div className="cta-b">
          <BookNowButton className="btn btn-gold" />
          <a className="btn btn-line" href="/get-a-quote/">Get A Free Quote</a>
          <a className="btn btn-line" href={PHONE_HREF}>Call Now</a>
        </div>
      </div>
    </section>
  );
}
