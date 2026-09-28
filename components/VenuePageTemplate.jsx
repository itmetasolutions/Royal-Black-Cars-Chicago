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

export default function VenuePageTemplate({ venue, allVenues = venueDetails }) {
  const img = venueImage(venue);
  const name = venue.title || venue.name;
  const related = allVenues.filter(v => v.slug !== venue.slug).slice(0, 4).map(v => [v.title || v.name, v.href, v.img]);
  const faqs = venue.faqs?.length ? venue.faqs : venueFaqs(venue);

  return (
    <>
      <PageHero
        eyebrow="VENUE TRANSPORTATION"
        title={name}
        lead={`Drop-off and pickup for ${name}, ${venue.area}.`}
        img={img}
        crumbs={[{ name: "Venues", href: "/venues/" }, { name, href: venue.href }]}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={img} alt={name} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">EVENT NIGHT</p>
            <h2>{venue.note}</h2>
            <p className="lead" style={{ fontSize: "1rem" }}>Tell dispatch your event and seating section when you book — chauffeurs know the fastest legal drop-off point for {name} and stage your car nearby as the event ends, rather than pre-booking a fixed pickup time.</p>
            <a className="btn btn-gold" href="/get-a-quote/">Get A Free Quote</a>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHAT TO EXPECT</p><h2>Event-night checklist</h2></Reveal>
          <ul className="tick" style={{ maxWidth: "60ch", marginTop: 28 }}>{checklist.map(c => <li key={c}><Check />{c}</li>)}</ul>
        </div>
      </section>

      <PageFaq faqs={faqs} title={`Questions about ${name}`} />
      <RelatedLinks title="Other venues" links={related} hub={["All venues", "/venues/"]} />
      <Cta img={img} />
    </>
  );
}
