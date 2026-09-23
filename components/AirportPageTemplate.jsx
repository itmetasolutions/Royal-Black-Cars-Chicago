import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { airportDetails } from "../lib/data.js";

export default function AirportPageTemplate({ airport }) {
  const related = airportDetails.filter(a => a.slug !== airport.slug).map(a => [a.name, a.href]);

  return (
    <>
      <PageHero
        eyebrow="AIRPORT CAR SERVICE"
        title={airport.name}
        lead={`Flat-rate pickups and drop-offs, ${airport.driveTime}.`}
        crumbs={[{ name: "Airports", href: "/airports/" }, { name: airport.name, href: airport.href }]}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={airport.img} alt={airport.name} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">RATE</p>
            <table className="rate-table">
              <tbody>
                <tr><td>Rate{airport.rateNote ? ` (${airport.rateNote})` : ""}</td><td>{airport.rate}</td></tr>
                <tr><td>Typical drive time</td><td style={{ fontFamily: "inherit", fontSize: ".94rem" }}>{airport.driveTime}</td></tr>
              </tbody>
            </table>
            <p><strong>Terminals:</strong> {airport.terminals}</p>
            <p><strong>Wait-time policy:</strong> {airport.waitPolicy}</p>
            <a className="btn btn-gold" href="/#quote">Get your rate</a>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap prose">{airport.body.map((p, i) => <p key={i}>{p}</p>)}</div>
      </section>

      <PageFaq faqs={airport.faqs} title={`Questions about ${airport.name}`} />
      <RelatedLinks title="Other airports" links={related} hub={["All airports", "/airports/"]} />
      <Cta />
    </>
  );
}
