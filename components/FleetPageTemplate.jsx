import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import Cta from "./Cta.jsx";
import { Check } from "./icons.jsx";
import { fleetPages } from "../lib/data.js";

export default function FleetPageTemplate({ vehicle }) {
  const related = fleetPages.filter(f => f.slug !== vehicle.slug).map(f => [f.title, f.href]);

  return (
    <>
      <PageHero
        eyebrow="FLEET"
        title={vehicle.title}
        lead={vehicle.body}
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
            </ul>
            <h3>Best for</h3>
            <ul className="tick">{vehicle.bestFor.map(b => <li key={b}><Check />{b}</li>)}</ul>
            <a className="btn btn-gold" href="/#quote">Get your rate</a>
          </Reveal>
        </div>
      </section>

      <RelatedLinks title="Other vehicles" links={related} hub={["See the full fleet", "/fleet/"]} />
      <Cta />
    </>
  );
}
