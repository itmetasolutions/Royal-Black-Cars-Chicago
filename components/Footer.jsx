"use client";

import { usePathname } from "next/navigation";
import { Car, Facebook, Instagram, XformerlyTwitter, LinkedIn } from "./icons.jsx";
import { PHONE, PHONE_HREF, EMAIL } from "../lib/data.js";

// Placeholder hrefs — swap in the real profile URLs when they're ready.
const social = [
  ["Facebook", "#", Facebook],
  ["Instagram", "#", Instagram],
  ["X (Twitter)", "#", XformerlyTwitter],
  ["LinkedIn", "#", LinkedIn],
];

const cols = [
  ["SERVICES", [
    ["/airport-car-service/", "Airport transfers"], ["/black-car-service/", "Black car service"],
    ["/corporate-car-service/", "Corporate travel"], ["/hourly-chauffeur/", "Hourly chauffeur"],
    ["/private-jet-transfers/", "Private jet transfers"], ["/wedding-car-service/", "Weddings"],
    ["/birthday-party-transportation/", "Birthday parties"], ["/medical-appointment-transportation/", "Medical appointments"],
  ]],
  ["AIRPORTS", [
    ["/airports/ohare/", "O'Hare (ORD)"], ["/airports/midway/", "Midway (MDW)"],
    ["/airports/chicago-executive-pwk/", "Chicago Executive (PWK)"], ["/airports/dupage/", "DuPage (DPA)"],
    ["/airports/milwaukee-mitchell/", "Milwaukee (MKE)"], ["/airports/gary/", "Gary/Chicago (GYY)"],
  ]],
  ["AREAS", [
    ["/service-areas/schaumburg/", "Schaumburg"], ["/service-areas/naperville/", "Naperville"],
    ["/service-areas/oak-brook/", "Oak Brook"], ["/service-areas/arlington-heights/", "Arlington Heights"],
    ["/service-areas/hinsdale/", "Hinsdale"], ["/service-areas/", "All service areas"],
  ]],
  ["COMPANY", [
    ["/about/", "About us"], ["/corporate-accounts/", "Corporate accounts"],
    ["/rates/", "Rates"], ["/faq/", "FAQ"], ["/blog/", "Blog"], ["/contact/", "Contact"],
  ]],
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <footer>
        <div className="wrap">
          <div className="fg">
            <div>
              <a className="brand" href="/" style={{ color: "#fff", marginBottom: 16 }}>
                <i><Car /></i><span>Royal <b>Black Cars</b></span>
              </a>
              <p style={{ maxWidth: "32ch" }}>Chauffeured black car service for Chicago and the suburbs. Licensed and insured in Illinois.</p>
              <p>
                <a href={PHONE_HREF} style={{ color: "#fff", fontWeight: 600 }}>{PHONE}</a><br />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                Dispatch open 24 hours
              </p>
              <div className="fsocial">
                {social.map(([label, href, Icon]) => (
                  <a key={label} href={href} aria-label={label}><Icon /></a>
                ))}
              </div>
            </div>
            {cols.map(([title, links]) => (
              <div key={title}>
                <h4>{title}</h4>
                <ul>{links.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="fbar">
            <span>© {new Date().getFullYear()} Royal Black Cars Chicago</span>
            <span><a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/sitemap.xml">Sitemap</a></span>
          </div>
        </div>
      </footer>

      <div className="mbar">
        <a className="btn btn-dark" href={PHONE_HREF} style={{ background: "var(--wash)", color: "var(--text)" }}>Call</a>
        <a className="btn btn-gold" href="/get-a-quote/">Book a ride</a>
      </div>
    </>
  );
}
