import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import Cta from "./Cta.jsx";
import { venueDetails } from "../lib/locations.js";

export default function VenuePageTemplate({ venue }) {
  const related = venueDetails.filter(v => v.slug !== venue.slug).map(v => [v.name, v.href]);
  return (
    <>
      <PageHero
        eyebrow="VENUE TRANSPORTATION"
        title={venue.name}
        lead={`Drop-off and pickup for ${venue.name}, ${venue.area}.`}
        crumbs={[{ name: "Venues", href: "/venues/" }, { name: venue.name, href: venue.href }]}
      />
      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <p>{venue.note}</p>
            <p>Tell dispatch your event and seating section when you book — chauffeurs know the fastest legal drop-off point for {venue.name} and stage your car near the venue as the event ends, rather than pre-booking a fixed pickup time that assumes it runs on schedule.</p>
          </div>
          <a className="btn btn-gold" href="/#quote">Get your rate</a>
        </div>
      </section>
      <RelatedLinks title="Other venues" links={related} hub={["All venues", "/venues/"]} />
      <Cta />
    </>
  );
}
