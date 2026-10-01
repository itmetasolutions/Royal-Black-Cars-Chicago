"use client";

import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { clusters, venueDetails } from "../lib/locations.js";
import { homeField } from "../lib/homeDefaults.js";

const tabs = [
  ...clusters.map((c) => ({ id: c.name, label: c.name, locations: c.locations, hub: "/service-areas/" })),
  { id: "Venues", label: "Venues", locations: venueDetails, hub: "/venues/" },
];

export default function ServiceAreas({ page }) {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active);

  return (
    <section className="sec areas-band">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{homeField(page, "areasEyebrow")}</p>
          <h2>{homeField(page, "areasHeading")}</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.75)" }}>{homeField(page, "areasLead")}</p>
        </Reveal>

        <div className="areas-grid">
          <Reveal className="map-card" slide>
            <img className="photo" src={homeField(page, "areasImg")} alt="Chicago streets we serve" loading="lazy" style={{ zIndex: 2 }} />
            <div className="map-stat">{homeField(page, "areasStatLabel")}<b>{homeField(page, "areasStatValue")}</b></div>
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
