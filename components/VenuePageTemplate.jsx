import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { Check } from "./icons.jsx";
import { venueDetails, venueImage, venueFaqs } from "../lib/locations.js";

const checklist = [
  "Drop-off at the closest open gate, not a general lot",
  "Pickup staged near the venue as the event ends",
  "Group vehicles available for a full party or suite",
  "No parking, no rideshare surge pricing after the event",
];

export default function VenuePageTemplate({ venue }) {
  const img = venueImage(venue);
  const related = venueDetails.filter(v => v.slug !== venue.slug).map(v => [v.name, v.href, v.img]);

  return (
    <>
      <PageHero
        eyebrow="VENUE TRANSPORTATION"
        title={venue.name}
        lead={`Drop-off and pickup for ${venue.name}, ${venue.area}.`}
        img={img}
        crumbs={[{ name: "Venues", href: "/venues/" }, { name: venue.name, href: venue.href }]}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={img} alt={venue.name} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">EVENT NIGHT</p>
            <h2>{venue.note}</h2>
            <p className="lead" style={{ fontSize: "1rem" }}>Tell dispatch your event and seating section when you book — chauffeurs know the fastest legal drop-off point for {venue.name} and stage your car nearby as the event ends, rather than pre-booking a fixed pickup time.</p>
            <a className="btn btn-gold" href="/get-a-quote/">Get your rate</a>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHAT TO EXPECT</p><h2>Event-night checklist</h2></Reveal>
          <ul className="tick" style={{ maxWidth: "60ch", marginTop: 28 }}>{checklist.map(c => <li key={c}><Check />{c}</li>)}</ul>
        </div>
      </section>

      <PageFaq faqs={venueFaqs(venue)} title={`Questions about ${venue.name}`} />
      <RelatedLinks title="Other venues" links={related} hub={["All venues", "/venues/"]} />
      <Cta img={img} />
    </>
  );
}
