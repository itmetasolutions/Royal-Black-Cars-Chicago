import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { airportDetails, trustPoints } from "../lib/data.js";

const steps = [
  ["We track your flight", "From the moment it departs, so a delay or an early landing moves your pickup automatically."],
  ["Your chauffeur is already there", "Parked or waiting inside baggage claim before you reach the curb."],
  ["Meet & greet", "A name board inside arrivals — or planeside for private aviation — no hunting for a curb pickup."],
  ["Drive off", "One flat rate, tolls and standard wait time included. No meter, no surge."],
];

export default function AirportPageTemplate({ airport }) {
  const related = airportDetails.filter(a => a.slug !== airport.slug).map(a => [a.name, a.href]);

  return (
    <>
      <PageHero
        eyebrow="AIRPORT CAR SERVICE"
        title={airport.name}
        lead={`Flat-rate pickups and drop-offs, ${airport.driveTime}.`}
        img={airport.img}
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
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHAT TO EXPECT</p><h2>Landing to leaving, in four steps</h2></Reveal>
          <div className="steps">
            {steps.map(([title, text], i) => (
              <Reveal key={title} delay={i % 3} className="step">
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="prose">{airport.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <div className="feature-grid cols-3">
            {trustPoints.slice(0, 3).map((t, i) => (
              <Reveal key={t.title} delay={i} className="feature-card">
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageFaq faqs={airport.faqs} title={`Questions about ${airport.name}`} />
      <RelatedLinks title="Other airports" links={related} hub={["All airports", "/airports/"]} />
      <Cta img={airport.img} />
    </>
  );
}
