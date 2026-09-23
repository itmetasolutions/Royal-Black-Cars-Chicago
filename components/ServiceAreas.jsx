"use client";

import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { clusters, venueDetails } from "../lib/locations.js";
import { IMG } from "../lib/data.js";

const tabs = [
  ...clusters.map((c) => ({ id: c.name, label: c.name, locations: c.locations, hub: "/service-areas/" })),
  { id: "Venues", label: "Venues", locations: venueDetails, hub: "/venues/" },
];

export default function ServiceAreas() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active);

  return (
    <section className="sec areas-band">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">SERVICE AREA</p>
          <h2>Downtown, the suburbs and every major venue</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.75)" }}>
            We run Chicago and the collar counties daily, plus long-distance runs to Milwaukee, Madison, South Bend and Indianapolis.
          </p>
        </Reveal>

        <div className="areas-grid">
          <Reveal className="map-card" slide>
            <img className="photo" src={IMG.areaMap} alt="Chicago streets we serve" loading="lazy" style={{ zIndex: 2 }} />
            <div className="map-stat">Average pick-up window<b>12 minutes</b></div>
          </Reveal>

          <Reveal delay={1}>
            <div className="area-tabs" role="tablist" aria-label="Service area regions">
              {tabs.map((t) => (
                <button key={t.id} role="tab" aria-selected={active === t.id} onClick={() => setActive(t.id)}>
                  {t.label} <span style={{ opacity: 0.7 }}>{t.locations.length}</span>
                </button>
              ))}
            </div>
            <div className="area-panel on">
              <div className="chipgrid">
                {tab.locations.map((l) => <a key={l.slug} href={l.href}>{l.name}</a>)}
              </div>
              <a className="more-link" href={tab.hub}>{tab.hub === "/venues/" ? "All venue transport" : "All service areas"}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
