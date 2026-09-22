"use client";

import { useEffect, useState } from "react";
import { Car } from "./icons.jsx";
import { PHONE, PHONE_HREF } from "../lib/data.js";

const links = [
  ["/services/", "Services"], ["/airports/", "Airports"], ["/fleet/", "Fleet"],
  ["/service-areas/", "Areas"], ["/corporate-accounts/", "Corporate"], ["/rates/", "Rates"],
];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`hdr${stuck ? " stuck" : ""}`}>
        <div className="wrap hdr-in">
          <a className="brand" href="/"><i><Car /></i><span>Royal <b>Black Cars</b></span></a>
          <nav className="nav" aria-label="Main">
            {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="btn btn-gold" href="#quote">Book a ride</a>
          <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <svg viewBox="0 0 24 24"><path d="M4 8h16M4 16h16" strokeLinecap="round" /></svg>
          </button>
        </div>
      </header>

      <div className={`drawer${open ? " open" : ""}`} onClick={(e) => e.target.tagName === "A" && setOpen(false)}>
        <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>&times;</button>
        {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        <a href={PHONE_HREF}>{PHONE}</a>
      </div>
    </>
  );
}
