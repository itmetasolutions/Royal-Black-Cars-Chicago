"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Car } from "./icons.jsx";
import { serviceDetails, airportDetails, fleetPages } from "../lib/data.js";
import { clusters } from "../lib/locations.js";
import BookNowButton from "./BookNowButton.jsx";

const defaultServiceLinks = serviceDetails.map((s) => [s.href, s.title]);
const defaultAirportLinks = airportDetails.map((a) => [a.href, a.name]);
const defaultFleetLinks = fleetPages.map((f) => [f.href, f.title]);
const areaGroups = clusters.map((c) => [c.name, c.locations.slice(0, 3).map((l) => [l.href, l.name])]);

const plainLinks = [["/", "Home"], ["/about/", "About"], ["/contact/", "Contact"]];

export default function Header() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  // Renders instantly from the static fallback, then upgrades to live DB
  // content (so admin-added/removed pages show up without a redeploy).
  const [live, setLive] = useState(null);

  const navGroups = [
    { label: "Services", hub: "/services/", links: live?.services || defaultServiceLinks, cols: 3 },
    { label: "Airports", hub: "/airports/", links: live?.airports || defaultAirportLinks, cols: 1 },
    { label: "Fleet", hub: "/fleet/", links: live?.fleet || defaultFleetLinks, cols: 1 },
    { label: "Areas", hub: "/service-areas/", cols: 4, groups: areaGroups },
  ];

  useEffect(() => {
    let cancelled = false;
    fetch("/api/nav")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data && !cancelled) setLive(data); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header className={`hdr${stuck ? " stuck" : ""}`}>
        <div className="wrap hdr-in">
          <a className="brand" href="/"><i><Car /></i><span>Royal <b>Black Cars</b></span></a>
          <nav className="nav" aria-label="Main">
            {navGroups.map((g) => (
              <div key={g.label} className="nav-item">
                <a href={g.hub}>{g.label}<i className="chev" aria-hidden="true" /></a>
                <div className="mega">
                  <div className="mega-panel" style={{ gridTemplateColumns: `repeat(${g.cols},1fr)` }}>
                    {g.groups
                      ? g.groups.map(([title, links]) => (
                          <div key={title} className="mega-col">
                            <p>{title}</p>
                            {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
                          </div>
                        ))
                      : g.links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
                    <div className="mega-more" style={{ gridColumn: "1 / -1" }}>
                      <a href={g.hub}>See all {g.label.toLowerCase()} &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {plainLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <BookNowButton className="btn btn-gold" />
          <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <svg viewBox="0 0 24 24"><path d="M4 8h16M4 16h16" strokeLinecap="round" /></svg>
          </button>
        </div>
      </header>

      <div className={`drawer${open ? " open" : ""}`} onClick={(e) => e.target.tagName === "A" && setOpen(false)}>
        <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>&times;</button>
        {navGroups.map((g) => (
          <details key={g.label}>
            <summary>{g.label}</summary>
            <div className="drawer-sub">
              {g.groups
                ? g.groups.map(([title, links]) => (
                    <div key={title} className="drawer-sub-group">
                      <b>{title}</b>
                      {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
                    </div>
                  ))
                : g.links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
              <a href={g.hub} className="drawer-sub-all">See all {g.label.toLowerCase()} &rarr;</a>
            </div>
          </details>
        ))}
        {plainLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </div>
    </>
  );
}
