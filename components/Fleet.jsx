"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import { Seat, Bag } from "./icons.jsx";
import { fleet } from "../lib/data.js";

export default function Fleet() {
  const rail = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = () => {
    const card = rail.current?.querySelector(".veh");
    return card ? card.getBoundingClientRect().width + 20 : 340;
  };

  const sync = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    setPage(Math.round(el.scrollLeft / step()));
    setPages(Math.max(1, Math.ceil((el.scrollWidth - el.clientWidth) / step()) + 1));
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollBy = (dir) => rail.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
  const goTo = (i) => rail.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  const onKey = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); scrollBy(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollBy(-1); }
  };

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div><p className="eyebrow">THE FLEET</p><h2>Pick your class</h2></div>
          <div className="sld-nav">
            <button className="sld-btn" aria-label="Previous vehicles" disabled={atStart} onClick={() => scrollBy(-1)}>
              <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="sld-btn" aria-label="Next vehicles" disabled={atEnd} onClick={() => scrollBy(1)}>
              <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </Reveal>
      </div>

      <div className="wrap slider">
        <div ref={rail} className="fleet-rail" tabIndex={0} aria-label="Vehicle classes" onScroll={sync} onKeyDown={onKey}>
            {fleet.map(v => (
              <article className="veh" key={v.title}>
                <div className="veh-media">
                  <span className="veh-tag">{v.tag}</span>
                  <img className="photo" src={v.img} alt={v.title} loading="lazy" style={{ zIndex: 1 }} />
                </div>
                <div className="veh-body">
                  <h3>{v.title}</h3>
                  <p>{v.models}</p>
                  <div className="spec">
                    <div><Seat />{v.seats}</div>
                    <div><Bag />{v.bags}</div>
                  </div>
                </div>
              </article>
            ))}
        </div>

        <div className="dots" aria-label="Slider pagination">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} aria-current={i === page} onClick={() => goTo(i)} />
          ))}
        </div>
        <p style={{ textAlign: "center", margin: "22px 0 0" }}>
          <a className="btn btn-dark" href="/fleet/">See all vehicles</a>
        </p>
      </div>
    </section>
  );
}
