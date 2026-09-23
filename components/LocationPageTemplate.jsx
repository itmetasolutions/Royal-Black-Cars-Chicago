import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { Check } from "./icons.jsx";
import { trustPoints } from "../lib/data.js";
import { allLocations, cityToCity, locationImage, locationFaqs } from "../lib/locations.js";

export default function LocationPageTemplate({ location }) {
  const img = locationImage(location);
  const faqs = locationFaqs(location);

  if (location.isRoute) {
    const related = cityToCity.filter(r => r.slug !== location.slug).map(r => [r.name, r.href]);
    return (
      <>
        <PageHero
          eyebrow="CITY TO CITY"
          title={location.name}
          lead={`${location.miles} · ${location.drive}, door to door in one car.`}
          img={img}
          crumbs={[{ name: "Service Areas", href: "/service-areas/" }, { name: location.name, href: location.href }]}
        />

        <section className="sec">
          <div className="wrap split">
            <Reveal className="media" slide>
              <img className="photo" src={img} alt={location.name} loading="lazy" style={{ zIndex: 2 }} />
            </Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">LONG DISTANCE</p>
              <h2>One car, the whole way</h2>
              <p className="lead" style={{ fontSize: "1rem" }}>{location.name} is one of our regular long-distance routes: one chauffeur and one vehicle for the entire drive, door to door, with no flight, no connection and no rental counter at the other end.</p>
              <a className="btn btn-gold" href="/#quote">Get your rate</a>
            </Reveal>
          </div>
        </section>

        <section className="sec" style={{ background: "var(--wash)" }}>
          <div className="wrap">
            <div className="stat-grid" style={{ gridTemplateColumns: "repeat(2,1fr)", maxWidth: 560 }}>
              <div className="stat-card"><span>Distance</span><b>{location.miles}</b></div>
              <div className="stat-card"><span>Typical drive</span><b>{location.drive}</b></div>
            </div>
            <div className="prose">
              <p>Rates are flat and quoted for the full trip before you book, with round-trip and wait-and-return options available. <a href="/long-distance-car-service/">See how long-distance bookings work</a>.</p>
            </div>
          </div>
        </section>

        <PageFaq faqs={faqs} title={`Questions about the ${location.name.toLowerCase()} route`} />
        <RelatedLinks title="Other routes" links={related} hub={["All service areas", "/service-areas/"]} />
        <Cta img={img} />
      </>
    );
  }

  const related = allLocations
    .filter(l => !l.isRoute && l.cluster === location.cluster && l.slug !== location.slug)
    .map(l => [l.name, l.href]);

  return (
    <>
      <PageHero
        eyebrow={location.cluster}
        title={location.name}
        lead={`Black car service in ${location.name}, with flat rates to O'Hare, Midway and Chicago Executive.`}
        img={img}
        crumbs={[{ name: "Service Areas", href: "/service-areas/" }, { name: location.name, href: location.href }]}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={img} alt={location.name} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">LOCAL SERVICE</p>
            <h2>Daily service in {location.name}</h2>
            <p className="lead" style={{ fontSize: "1rem" }}>
              Royal Black Cars Chicago runs daily airport, corporate and point-to-point service in {location.name}
              {location.landmarks?.length ? `, near ${location.landmarks.join(" and ")}` : ""}. Chauffeurs run this route
              regularly via {location.highway}, so pickup timing accounts for real traffic patterns, not just map-app estimates.
            </p>
            <a className="btn btn-gold" href="/#quote">Get your rate</a>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">DRIVE TIMES</p><h2>From {location.name} to the airports</h2></Reveal>
          <div className="stat-grid">
            <Reveal className="stat-card"><span>O&apos;Hare (ORD)</span><b>{location.drive.ORD}</b></Reveal>
            <Reveal delay={1} className="stat-card"><span>Midway (MDW)</span><b>{location.drive.MDW}</b></Reveal>
            <Reveal delay={2} className="stat-card"><span>Chicago Executive (PWK)</span><b>{location.drive.PWK}</b></Reveal>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHY {location.name.toUpperCase()} CLIENTS CHOOSE US</p><h2>The same standard, every ride</h2></Reveal>
          <div className="feature-grid" style={{ marginTop: 32 }}>
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

      <PageFaq faqs={faqs} title={`Questions about ${location.name}`} />
      <RelatedLinks title={`More in ${location.cluster}`} links={related} hub={["All service areas", "/service-areas/"]} />
      <Cta img={img} />
    </>
  );
}
