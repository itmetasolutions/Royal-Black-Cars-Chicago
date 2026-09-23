import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Check } from "@/components/icons.jsx";
import { airportDetails, IMG } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Rates & Instant Quote | Royal Black Cars Chicago",
  description: "Flat airport rates from downtown Chicago, what's included in every fare, and how hourly and long-distance pricing works.",
  path: "/rates/",
});

const included = [
  "Tolls, parking and gratuity",
  "60 minutes of free wait time at O'Hare and Midway",
  "Live flight tracking and automatic pick-up adjustment",
  "The first child seat, free",
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="RATES"
        title="One flat rate, agreed before you ride"
        lead="No meter, no surge pricing. Airport rates are published below; every other trip is quoted before you book."
        img={IMG.airport}
        crumbs={[{ name: "Rates", href: "/rates/" }]}
      />

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">FLAT AIRPORT RATES</p><h2>From downtown, in a luxury sedan</h2></Reveal>
          <div className="stat-grid">
            {airportDetails.slice(0, 3).map((a) => (
              <div key={a.code} className="stat-card"><span>{a.name.replace(" International Airport", "").replace(" Airport", "")}</span><b>{a.rate}</b></div>
            ))}
          </div>
          <Reveal delay={1}>
            <table className="rate-table">
              <thead><tr><th>Airport</th><th>Typical drive</th><th>Flat rate</th></tr></thead>
              <tbody>
                {airportDetails.map((a) => (
                  <tr key={a.code}>
                    <td><a href={a.href}>{a.name} ({a.code})</a></td>
                    <td style={{ fontFamily: "inherit", fontSize: ".94rem" }}>{a.driveTime}</td>
                    <td>{a.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ color: "var(--muted)", fontSize: ".9rem" }}>SUVs, Sprinters and rides from the suburbs are quoted at booking. Rates marked &quot;Custom quote&quot; vary by pickup point — ask dispatch for an exact figure.</p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">WHAT&apos;S INCLUDED</p>
            <h2>Every quoted rate already includes</h2>
            <ul className="tick">{included.map((i) => <li key={i}><Check />{i}</li>)}</ul>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">OTHER PRICING</p>
            <h3>Hourly &amp; as-directed</h3>
            <p style={{ color: "var(--muted)" }}>A 2-hour minimum, then billed in clean hourly increments. Rate depends on vehicle class — see <a href="/hourly-chauffeur/">hourly chauffeur</a> for details.</p>
            <h3>Long-distance &amp; city-to-city</h3>
            <p style={{ color: "var(--muted)" }}>Milwaukee, Madison, Indianapolis, South Bend and Detroit are quoted flat, round-trip or one-way. See <a href="/long-distance-car-service/">long-distance car service</a>.</p>
            <h3>Corporate accounts</h3>
            <p style={{ color: "var(--muted)" }}>Monthly invoicing with cost centres and trip codes — see <a href="/corporate-accounts/">corporate accounts</a>.</p>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
