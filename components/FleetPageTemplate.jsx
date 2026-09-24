import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { Check } from "./icons.jsx";
import { fleetPages } from "../lib/data.js";

const sharedFaqs = [
  { q: "How do I book this vehicle?", a: "Select it when you request a quote, or tell dispatch which class you want by phone or text." },
  { q: "Can I switch vehicle class after booking?", a: "Yes, subject to availability — contact dispatch as early as possible if your group size changes." },
];

export default function FleetPageTemplate({ vehicle }) {
  const related = fleetPages.filter(f => f.slug !== vehicle.slug).map(f => [f.title, f.href, f.img]);

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
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={vehicle.img} alt={vehicle.title} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">SPECS</p>
            <ul className="tick">
              <li><Check /><span><b>Models</b> — {vehicle.models}</span></li>
              <li><Check /><span><b>Capacity</b> — {vehicle.capacity}</span></li>
              <li><Check /><span><b>Rate</b> — {vehicle.rate}</span></li>
            </ul>
            <a className="btn btn-gold" href="/#quote">Get your rate</a>
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
