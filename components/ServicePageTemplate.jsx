import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { Check } from "./icons.jsx";
import { serviceDetails } from "../lib/data.js";
import { serviceSchema } from "../lib/schema.js";

export default function ServicePageTemplate({ service }) {
  const related = serviceDetails.filter(s => s.slug !== service.slug).slice(0, 6).map(s => [s.title, s.href]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: service.title, description: service.lead, url: `https://www.royalblackcarschicago.com${service.href}` })) }} />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.lead}
        crumbs={[{ name: "Services", href: "/services/" }, { name: service.title, href: service.href }]}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={service.img} alt={service.title} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">WHAT&apos;S INCLUDED</p>
            <ul className="tick">{service.included.map(i => <li key={i}><Check />{i}</li>)}</ul>
            <a className="btn btn-gold" href="/#quote">Get your rate</a>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <div className="prose">{service.body.map((p, i) => <p key={i}>{p}</p>)}</div>
          {service.bestFor && (
            <>
              <h3 style={{ marginTop: 8 }}>Best for</h3>
              <ul className="tick" style={{ maxWidth: "72ch" }}>{service.bestFor.map(b => <li key={b}><Check />{b}</li>)}</ul>
            </>
          )}
          {service.fleetLinks && (
            <>
              <h3>Recommended vehicles</h3>
              <div className="rl-grid">{service.fleetLinks.map(([label, href]) => <a key={href} className="rl-chip" href={href}>{label}</a>)}</div>
            </>
          )}
        </div>
      </section>

      <PageFaq faqs={service.faqs} title={`Questions about ${service.title.toLowerCase()}`} />
      <RelatedLinks title="Other services" links={related} hub={["All services", "/services/"]} />
      <Cta />
    </>
  );
}
