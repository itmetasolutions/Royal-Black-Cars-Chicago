"use client";

import useSliderRail from "../lib/useSliderRail.js";
import { hrefFor } from "../lib/cards.js";
import { Plane } from "./icons.jsx";

export default function AirportsSlider({ airports, eyebrow = "ALL AIRPORTS", heading = "Airports we serve" }) {
  const cards = (airports || []).map((a) => ({
    code: a.code,
    rate: a.rate,
    driveTime: a.driveTime,
    href: hrefFor("airport", a),
  }));
  const { railRef, page, pages, atStart, atEnd, scrollBy, goTo, onKey } = useSliderRail({ slideSelector: ".apt-slide" });

  if (!cards.length) return null;

  return (
    <section className="sec">
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 style={{ fontSize: "1.4rem" }}>{heading}</h2>
          </div>
          <div className="sld-nav">
            <button className="sld-btn" aria-label="Previous airports" disabled={atStart} onClick={() => scrollBy(-1)}>
              <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="sld-btn" aria-label="Next airports" disabled={atEnd} onClick={() => scrollBy(1)}>
              <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="wrap slider" style={{ marginTop: 24 }}>
        <div ref={railRef} className="apt-rail" tabIndex={0} aria-label="All airports" onKeyDown={onKey}>
          {cards.map((c) => (
            <div key={c.href} className="airport-card apt-slide">
              <div className="ac-head">
                <b>{c.code}</b>
                <Plane />
              </div>
              <div className="ac-body">
                <div><span>Rate</span><strong>{c.rate}</strong></div>
                <div><span>Drive time</span><strong>{c.driveTime}</strong></div>
              </div>
              <a className="btn btn-gold" href={c.href}>View details</a>
            </div>
          ))}
        </div>

        <div className="dots" aria-label="Slider pagination">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} aria-current={i === page} onClick={() => goTo(i)} />
          ))}
        </div>
        <p style={{ textAlign: "center", margin: "22px 0 0" }}>
          <a className="btn btn-dark" href="/airports/">See all airports</a>
        </p>
      </div>
    </section>
  );
}
