import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { Check, Seat, Bag, Car as CarIcon } from "./icons.jsx";
import { fleetPages } from "../lib/data.js";

const sharedFaqs = [
  { q: "How do I book this vehicle?", a: "Select it when you request a quote, or tell dispatch which class you want by phone or text." },
  { q: "Can I switch vehicle class after booking?", a: "Yes, subject to availability — contact dispatch as early as possible if your group size changes." },
];

export default function FleetPageTemplate({ vehicle, allVehicles = fleetPages }) {
  const related = allVehicles.filter(f => f.slug !== vehicle.slug).map(f => [f.title, f.href, f.img]);
  const [passengersPart, bagsPart] = vehicle.capacity.split(",").map((s) => s.trim());
  const passengerCount = passengersPart.replace(/\s*passengers?$/i, "");

  return (
    <>
      <PageHero
        eyebrow="FLEET"
        title={vehicle.title}
        lead={vehicle.body}
        img={vehicle.img}
        crumbs={[{ name: "Fleet", href: "/fleet/" }, { name: vehicle.title, href: vehicle.href }]}
      />

      <section className="sec">
        <div className="wrap">
          <Reveal className="veh-spec">
            <div className="veh-spec-media">
              <img src={vehicle.img} alt={vehicle.title} loading="lazy" />
            </div>
            <div className="veh-spec-sheet">
              <p className="eyebrow">SPEC SHEET</p>
              <div className="veh-spec-pax"><Seat style={{ width: 26, height: 26, fill: "var(--brass)" }} /><b>{passengerCount}</b><span>passengers</span></div>
              <div className="veh-spec-bullets">
                <div><Bag />{bagsPart || "Professional chauffeur included"}</div>
                <div><CarIcon />Models: {vehicle.models}</div>
              </div>
              <div className="veh-spec-rates">
                <div><span>Flat rate</span><b>{vehicle.rate}</b></div>
                <div><span>Hourly</span><b>{vehicle.hourlyRate}</b></div>
              </div>
              <a className="btn btn-gold" href={`/get-a-quote/?vehicle=${encodeURIComponent(vehicle.title)}`}>Get A Free Quote</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">BEST FOR</p><h2>Who books the {vehicle.title.toLowerCase()}</h2></Reveal>
          <div className="feature-grid cols-3" style={{ marginTop: 32 }}>
            {vehicle.bestFor.map((b, i) => (
              <Reveal key={b} delay={i} className="feature-card">
                <Check />
                <h3>{b}</h3>
              </Reveal>
            ))}
          </div>
          {vehicle.services && (
            <>
              <h3 style={{ marginTop: 40 }}>Popular for these services</h3>
              <div className="rl-grid">{vehicle.services.map(([label, href]) => <a key={href} className="rl-chip" href={href}>{label}</a>)}</div>
            </>
          )}
        </div>
      </section>

      <PageFaq faqs={[...(vehicle.faqs || []), ...sharedFaqs]} title="Booking questions" />
      <RelatedLinks title="Other vehicles" links={related} hub={["See the full fleet", "/fleet/"]} />
      <Cta img={vehicle.img} />
    </>
  );
}
