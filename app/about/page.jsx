import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { PHONE, PHONE_HREF, serviceDetails, airportDetails, fleetPages, PHOTOS, trustPoints } from "@/lib/data.js";
import { allLocations, venueDetails } from "@/lib/locations.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "About Us | Royal Black Cars Chicago",
  description: "A licensed, insured Chicago black car service built on flat pricing agreed before you ride, vetted chauffeurs and a dispatch desk that answers.",
  path: "/about/",
});

const areasCovered = allLocations.filter((l) => !l.isRoute).length + venueDetails.length;

const stats = [
  { n: `${serviceDetails.length}`, label: "services covered, from airport runs to conventions" },
  { n: `${fleetPages.length}`, label: "vehicle classes, sedan through 55-seat coach" },
  { n: `${airportDetails.length}`, label: "Chicago-area airports served" },
  { n: `${areasCovered}+`, label: "neighborhoods, suburbs and venues with a dedicated page" },
];

const closingCards = [
  {
    h: "Our approach", img: PHOTOS.chauffeur[1],
    p: "Most operators compete on the same generic claims — 24/7 service, flight tracking, meet and greet. We treat those as the baseline, not the pitch, and compete instead on published pricing, a dispatcher who picks up, and knowing our corridors — O'Hare, the I-88 belt, PWK's FBOs — well enough to know their quirks.",
  },
  {
    h: "Coverage", img: PHOTOS.skyline[1], href: "/service-areas/", linkLabel: "Full service area list",
    p: "Daily service across downtown Chicago, the Northwest and West suburbs and the North Shore, plus O'Hare, Midway, Chicago Executive (PWK), DuPage and the region's other airports — plus long-distance runs to Milwaukee, Madison, Indianapolis, South Bend and Detroit.",
  },
  {
    h: "Corporate accounts", img: PHOTOS.handshake[2], href: "/corporate-accounts/", linkLabel: "Set up an account",
    p: "Businesses that book with us regularly move to a corporate account: monthly invoicing, a named dispatcher and NDA-signed chauffeurs for client-facing travel.",
  },
];

export default function Page() {
  return (
    <>
      <section className="sec about-hero">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">ABOUT US</p>
            <h1 style={{ fontSize: "clamp(2.2rem,4.4vw,3.2rem)", maxWidth: "16ch" }}>A dependable alternative to rideshare, built for Chicago</h1>
            <p className="lead" style={{ marginTop: 18 }}>Royal Black Cars Chicago runs a licensed, insured black car fleet across the city and suburbs — flat pricing, vetted chauffeurs, and a dispatch desk that picks up.</p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <a className="btn btn-gold" href="/#quote">Get your rate</a>
              <a className="btn btn-dark" href={PHONE_HREF}>{PHONE}</a>
            </div>
          </Reveal>
          <Reveal delay={1} className="media" slide>
            <img className="photo" src={PHOTOS.chauffeur[2]} alt="Royal Black Cars Chicago chauffeur" loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
        </div>
      </section>

      <section className="stat-band sec" style={{ padding: "48px 0" }}>
        <div className="wrap">
          <div className="stat-row">
            {stats.map((s) => (
              <div key={s.label}><b>{s.n}</b><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={PHOTOS.corporateOffice[0]} alt="Royal Black Cars Chicago chauffeured vehicle" loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Airport, corporate and private aviation transportation</h2>
            <div className="prose">
              <p>We built Royal Black Cars Chicago around three jobs people consistently need done well: a dependable airport transfer that adjusts to a delayed flight, a corporate account a finance team will actually accept, and a chauffeur who shows up in the right car, on time, for private aviation and everyday point-to-point trips.</p>
              <p>Every trip runs on the same principle — the rate is agreed before the car is dispatched, not estimated on a meter or subject to surge pricing. Tolls, standard wait time and gratuity are built into the price you're quoted.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap split">
          <Reveal className="quote-card">
            <q>The dependable premium alternative to rideshare: licensed, insured and winter-ready, with live pricing and specialist coverage for airports, corporate travel and private aviation.</q>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">OUR STANDARD</p>
            <h2 style={{ fontSize: "1.7rem", marginBottom: 20 }}>What that promise looks like ride to ride</h2>
            <div className="mini-grid">
              {trustPoints.map((t) => (
                <div key={t.title} className="feature-card">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">MORE ABOUT US</p><h2>Approach, coverage and corporate accounts</h2></Reveal>
          <div className="detail-grid cols-3" style={{ marginTop: 32 }}>
            {closingCards.map((c, i) => (
              <Reveal key={c.h} delay={i} className="detail-card">
                <img src={c.img} alt="" loading="lazy" />
                <div className="dc-body">
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                  {c.href && <a href={c.href} style={{ display: "inline-block", marginTop: 10, color: "var(--brass)", fontWeight: 600, fontSize: ".88rem" }}>{c.linkLabel} &rarr;</a>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta img={PHOTOS.chauffeur[0]} />
    </>
  );
}
