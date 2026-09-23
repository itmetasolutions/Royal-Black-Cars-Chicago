import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Check } from "@/components/icons.jsx";
import { IMG } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "About Us | Royal Black Cars Chicago",
  description: "A licensed, insured Chicago black car service built on flat pricing agreed before you ride, vetted chauffeurs and a dispatch desk that answers.",
  path: "/about/",
});

const values = [
  ["Licensed & insured", "Operating legally in Illinois, with commercial insurance on every vehicle in the fleet."],
  ["Flat pricing, agreed first", "Your rate is confirmed before the chauffeur is dispatched — not estimated, not metered."],
  ["Vetted chauffeurs", "Every chauffeur is background-checked and trained on the fleet before driving a client."],
  ["A dispatcher, not a call centre", "Dispatch answers day or night and can quote, book or change a trip on the spot."],
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="A dependable alternative to rideshare, built for Chicago"
        lead="Royal Black Cars Chicago runs a licensed, insured black car fleet across the city and suburbs — flat pricing, vetted chauffeurs, and a dispatch desk that picks up."
        crumbs={[{ name: "About", href: "/about/" }]}
      />

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
        <div className="wrap">
          <Reveal><p className="eyebrow">WHY CLIENTS CHOOSE US</p><h2>What you can expect on every ride</h2></Reveal>
          <div className="svc" style={{ marginTop: 40 }}>
            {values.map(([title, text], i) => (
              <Reveal key={title} delay={i % 3} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r)", padding: 26 }}>
                <Check style={{ width: 22, height: 22, fill: "var(--brass)", marginBottom: 14 }} />
                <h3>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".95rem", margin: 0 }}>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <h2>Our coverage</h2>
            <p>We run daily service across downtown Chicago, the Northwest and West suburbs and the North Shore, plus O'Hare, Midway, Chicago Executive (PWK), DuPage and the region's other airports. Long-distance bookings cover Milwaukee, Madison, Indianapolis, South Bend and Detroit. See the <a href="/service-areas/">full service area list</a>.</p>
            <h2>Corporate accounts</h2>
            <p>Businesses that book with us regularly move to a corporate account: monthly invoicing, a named dispatcher and NDA-signed chauffeurs for client-facing travel. Details are on the <a href="/corporate-accounts/">corporate accounts page</a>.</p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
