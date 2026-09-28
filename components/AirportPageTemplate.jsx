import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { Plane, Check } from "./icons.jsx";
import { airportDetails, trustPoints } from "../lib/data.js";

const steps = [
  ["We track your flight", "From the moment it departs, so a delay or an early landing moves your pickup automatically."],
  ["Your chauffeur is already there", "Parked or waiting inside baggage claim before you reach the curb."],
  ["Meet & greet", "A name board inside arrivals — or planeside for private aviation — no hunting for a curb pickup."],
  ["Drive off", "One flat rate, tolls and standard wait time included. No meter, no surge."],
];

export default function AirportPageTemplate({ airport, allAirports = airportDetails }) {
  const related = allAirports.filter(a => a.slug !== airport.slug).slice(0, 4).map(a => [a.name, a.href, a.img]);

  return (
    <>
      <PageHero
        eyebrow="AIRPORT CAR SERVICE"
        title={airport.name}
        lead={`Flat-rate pickups and drop-offs, ${airport.driveTime}.`}
        img={airport.img}
        crumbs={[{ name: "Airports", href: "/airports/" }, { name: airport.name, href: airport.href }]}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 3, marginTop: -34 }}>
        <Reveal className="ticket">
          <div className="ticket-stub">
            <Plane />
            <b>{airport.code}</b>
            <span>AIRPORT</span>
          </div>
          <div className="ticket-body">
            <div><span className="tl">Rate</span><b>{airport.rate}{airport.rateNote ? ` · ${airport.rateNote}` : ""}</b></div>
            <div><span className="tl">Drive time</span><b style={{ fontSize: "1.05rem" }}>{airport.driveTime}</b></div>
            <div><span className="tl">Terminals</span><b style={{ fontSize: ".92rem", fontFamily: "inherit", fontWeight: 500 }}>{airport.terminals.split(" — ")[0]}</b></div>
            <a className="btn btn-gold" href="/get-a-quote/" style={{ marginLeft: "auto" }}>Get your rate</a>
          </div>
        </Reveal>
      </div>

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={airport.img} alt={airport.name} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">TERMINALS & WAIT TIME</p>
            <h2>What to know before you land</h2>
            <p style={{ color: "var(--muted)", marginBottom: 14 }}><strong style={{ color: "var(--text)" }}>Terminals:</strong> {airport.terminals}</p>
            <p style={{ color: "var(--muted)" }}><strong style={{ color: "var(--text)" }}>Wait-time policy:</strong> {airport.waitPolicy}</p>
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
        <div className="wrap split rev">
          <Reveal className="media" slide>
            <img className="photo" src={airport.img2 || airport.img} alt={airport.name} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2>{airport.name.split(" ")[0]} in detail</h2>
            <div className="prose">{airport.body.map((p, i) => <p key={i}>{p}</p>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHY RIDE WITH US</p><h2>The same standard, every airport</h2></Reveal>
          <div className="feature-grid cols-3" style={{ marginTop: 32 }}>
            {trustPoints.slice(0, 3).map((t, i) => (
              <Reveal key={t.title} delay={i} className="feature-card">
                <Check />
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
