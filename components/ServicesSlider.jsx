"use client";

import useSliderRail from "../lib/useSliderRail.js";
import { toCards } from "../lib/cards.js";

export default function ServicesSlider({ services, eyebrow = "ALL SERVICES", heading = "Every way we drive Chicago", excludeSlug }) {
  const cards = toCards("service", services).filter((c) => c.slug !== excludeSlug);
  const { railRef, page, pages, atStart, atEnd, scrollBy, goTo, onKey } = useSliderRail({ slideSelector: ".occ-slide" });

  if (!cards.length) return null;

  return (
    <section className="sec" style={{ background: "var(--wash)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 style={{ fontSize: "1.4rem" }}>{heading}</h2>
          </div>
          <div className="sld-nav">
            <button className="sld-btn" aria-label="Previous services" disabled={atStart} onClick={() => scrollBy(-1)}>
              <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="sld-btn" aria-label="Next services" disabled={atEnd} onClick={() => scrollBy(1)}>
              <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="wrap slider" style={{ marginTop: 24 }}>
        <div ref={railRef} className="svc-rail" tabIndex={0} aria-label="All services" onKeyDown={onKey}>
          {cards.map((c) => (
            <a key={c.href} href={c.href} className="occ-card occ-slide">
              <div className="occ-media">
                <img src={c.img} alt="" loading="lazy" />
              </div>
              <div className="occ-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="occ-more">Learn more <span className="arrow">&rarr;</span></span>
              </div>
            </a>
          ))}
        </div>

        <div className="dots" aria-label="Slider pagination">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} aria-current={i === page} onClick={() => goTo(i)} />
          ))}
        </div>
        <p style={{ textAlign: "center", margin: "22px 0 0" }}>
          <a className="btn btn-dark" href="/services/">See all services</a>
        </p>
      </div>
    </section>
  );
}
