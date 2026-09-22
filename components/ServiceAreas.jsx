"use client";

import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { northwest, west, venues, slug, IMG } from "../lib/data.js";

const tabs = [
  { id: "nw", label: "Northwest suburbs", count: northwest.length, hub: "/service-areas/#northwest", hubLabel: "Northwest suburbs hub" },
  { id: "we", label: "West suburbs", count: west.length, hub: "/service-areas/#west", hubLabel: "West suburbs hub" },
  { id: "ve", label: "Venues", count: venues.length, hub: "/venues/", hubLabel: "All venue transport" },
];

export default function ServiceAreas() {
  const [active, setActive] = useState("nw");
  const chips =
    active === "nw" ? northwest.map(n => [n, `/service-areas/${slug(n)}/`])
    : active === "we" ? west.map(n => [n, `/service-areas/${slug(n)}/`])
    : venues.map(([n, u]) => [n, `/venues/${u}/`]);
  const tab = tabs.find(t => t.id === active);

  return (
    <section className="sec areas-band">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">SERVICE AREA</p>
          <h2>58 suburbs, every venue, one dispatch desk</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.75)" }}>
            We run the city and the collar counties daily, plus long-distance runs to Milwaukee, Madison, South Bend and Indianapolis.
          </p>
        </Reveal>

        <div className="areas-grid">
          <Reveal className="map-card" slide>
            <img className="photo" src={IMG.areaMap} alt="Chicago streets we serve" loading="lazy" style={{ zIndex: 2 }} />
            <div className="map-stat">Average pick-up window<b>12 minutes</b></div>
          </Reveal>

          <Reveal delay={1}>
            <div className="area-tabs" role="tablist" aria-label="Service area regions">
              {tabs.map(t => (
                <button key={t.id} role="tab" aria-selected={active === t.id} onClick={() => setActive(t.id)}>
                  {t.label} <span style={{ opacity: 0.7 }}>{t.count}</span>
                </button>
              ))}
            </div>
            <div className="area-panel on">
              <div className="chipgrid">
                {chips.map(([name, href]) => <a key={name} href={href}>{name}</a>)}
              </div>
              <a className="more-link" href={tab.hub}>{tab.hubLabel}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
