import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { Check } from "./icons.jsx";
import { serviceDetails, trustPoints } from "../lib/data.js";
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
        img={service.img}
        crumbs={[{ name: "Services", href: "/services/" }, { name: service.title, href: service.href }]}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={service.img} alt={service.title} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">WHAT&apos;S INCLUDED</p>
            <h2>Every {service.title.toLowerCase()} booking includes</h2>
            <ul className="tick">{service.included.map(i => <li key={i}><Check />{i}</li>)}</ul>
            <a className="btn btn-gold" href="/#quote">Get your rate</a>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHY RIDE WITH US</p><h2>The details most services skip</h2></Reveal>
          <div className="feature-grid" style={{ marginTop: 36 }}>
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} delay={i % 3} className="feature-card">
                <Check />
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">THE DETAILS</p>
            <div className="prose">
              {service.body.map((section, i) => (
                <div key={i}>
                  <h3>{section.h}</h3>
                  {section.p.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1} className="faq-aside">
            {service.bestFor && (
              <>
                <h3 style={{ marginBottom: 12 }}>Best for</h3>
                <ul className="tick">{service.bestFor.map(b => <li key={b}><Check />{b}</li>)}</ul>
              </>
            )}
            {service.fleetLinks && (
              <>
                <h3 style={{ marginTop: 22, marginBottom: 12 }}>Recommended vehicles</h3>
                <div className="rl-grid" style={{ margin: 0 }}>
                  {service.fleetLinks.map(([label, href]) => <a key={href} className="rl-chip" href={href}>{label}</a>)}
                </div>
              </>
            )}
          </Reveal>
        </div>
      </section>

      <PageFaq faqs={service.faqs} title={`Questions about ${service.title.toLowerCase()}`} />
      <RelatedLinks title="Other services" links={related} hub={["All services", "/services/"]} />
      <Cta img={service.img} />
    </>
  );
}
