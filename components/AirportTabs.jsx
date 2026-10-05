"use client";

import { useState } from "react";

export default function AirportTabs({ tabs }) {
  const [active, setActive] = useState(0);
  const current = tabs[active] || tabs[0];
  if (!current) return null;

  return (
    <div className="apt-tabs">
      <div className="apt-tab-list" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`apt-tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="apt-panel" role="tabpanel" key={active}>
        <div className="apt-panel-copy">
          <h3>{current.heading}</h3>
          {(current.text || "").split("\n").filter(Boolean).map((line, i) => (
          <p key={i}>{line}</p>
        ))}
          {current.ctaHref && (
            <a className="btn btn-gold" href={current.ctaHref}>{current.ctaLabel || "View details"}</a>
          )}
        </div>
        {current.image && (
          <div className="apt-panel-media">
            <img src={current.image} alt={current.heading || ""} loading="lazy" />
          </div>
        )}
      </div>
    </div>
  );
}
