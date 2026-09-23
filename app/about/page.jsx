import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { serviceDetails, airportDetails, fleetPages, IMG, trustPoints } from "@/lib/data.js";
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

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="A dependable alternative to rideshare, built for Chicago"
        lead="Royal Black Cars Chicago runs a licensed, insured black car fleet across the city and suburbs — flat pricing, vetted chauffeurs, and a dispatch desk that picks up."
        img={IMG.hero}
        crumbs={[{ name: "About", href: "/about/" }]}
      />

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
            <img className="photo" src={IMG.corporate} alt="Royal Black Cars Chicago chauffeured vehicle" loading="lazy" style={{ zIndex: 2 }} />
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
          <div className="prose">
            <h2>Our approach</h2>
            <p>Most operators in this market compete on the same generic claims — 24/7 service, flight tracking, meet and greet. We treat those as the baseline, not the pitch. What we actually compete on is the part that's harder to fake: publishing real pricing instead of "call for a quote," running a dispatch desk that picks up rather than a call centre queue, and covering the specific corridors — O'Hare and Midway, the I-88 corporate belt, PWK's FBOs — well enough to know their quirks, not just their addresses.</p>
            <p>That's also why this site links to specific pages for specific trips rather than one generic booking form. An O'Hare pickup, a McCormick Place convention shuttle and a Naperville client visit are different jobs with different logistics, and each one gets its own page with real detail — rates, drive times, what's included — instead of a single page pretending to cover everything equally well.</p>
            <h2>Coverage</h2>
            <p>We run daily service across downtown Chicago, the Northwest and West suburbs and the North Shore, plus O'Hare, Midway, Chicago Executive (PWK), DuPage and the region's other airports. Long-distance bookings cover Milwaukee, Madison, Indianapolis, South Bend and Detroit. See the <a href="/service-areas/">full service area list</a>.</p>
            <h2>Corporate accounts</h2>
            <p>Businesses that book with us regularly move to a corporate account: monthly invoicing, a named dispatcher and NDA-signed chauffeurs for client-facing travel. Details are on the <a href="/corporate-accounts/">corporate accounts page</a>.</p>
          </div>
        </div>
      </section>

      <Cta img={IMG.corporate} />
    </>
  );
}
