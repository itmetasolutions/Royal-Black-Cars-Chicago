import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import { homeField } from "../lib/homeDefaults.js";
import RichText from "./RichText.jsx";

export default function ChildSeats({ page }) {
  const seats = homeField(page, "childSeats");

  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap split">
        <Reveal className="media child-media">
          <img src={homeField(page, "childImg")} alt="Infant, toddler and booster car seats available with Royal Black Cars Chicago"
               width={943} height={472} loading="lazy" />
        </Reveal>
        <Reveal delay={1}>
          <p className="eyebrow">{homeField(page, "childEyebrow")}</p>
          <h2>{homeField(page, "childHeading")}</h2>
          <RichText className="lead rich-text" value={homeField(page, "childLead")} />
          <ul className="tick seat-tick">
            {seats.map((s) => (
              <li key={s.name}>
                <Check />
                <span><b>{s.name}</b> — {s.detail}</span>
                {s.price && <span className="seat-price">{s.price}</span>}
              </li>
            ))}
          </ul>
          <div className="chips" style={{ marginTop: 18 }}>
            {(homeField(page, "childUses") || []).map((u) => <span key={u} className="chip">{u}</span>)}
          </div>
          <a className="gold-cta" href={homeField(page, "childCtaHref")}>{homeField(page, "childCtaLabel")} <span aria-hidden="true">→</span></a>
        </Reveal>
      </div>
    </section>
  );
}
