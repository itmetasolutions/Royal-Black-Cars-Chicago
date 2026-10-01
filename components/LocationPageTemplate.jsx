import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { Check, Pin, Route, Clock } from "./icons.jsx";
import { trustPoints } from "../lib/data.js";
import { allLocations, cityToCity, locationImage, locationFaqs, driveBars } from "../lib/locations.js";

// `siblings` carries the other areas from the CMS when the page is served
// from it; it falls back to the shipped list so the template still works alone.
export default function LocationPageTemplate({ location, siblings }) {
  const img = locationImage(location);
  const faqs = locationFaqs(location);

  if (location.isRoute) {
    const related = cityToCity.filter(r => r.slug !== location.slug).map(r => [r.name, r.href, r.img]);
    return (
      <>
        <PageHero
          eyebrow="CITY TO CITY"
          title={location.name}
          lead={`${location.miles} · ${location.drive}, door to door in one car.`}
          img={img}
          crumbs={[{ name: "Service Areas", href: "/service-areas/" }, { name: location.name, href: location.href }]}
        />

        <div className="wrap" style={{ position: "relative", zIndex: 3, marginTop: -34 }}>
          <Reveal className="local-bar">
            <div><Route /><span><strong>{location.miles}</strong> door to door</span></div>
            <div><Clock /><span><strong>{location.drive}</strong></span></div>
          </Reveal>
        </div>

        <section className="sec">
          <div className="wrap split">
            <Reveal className="media" slide>
              <img className="photo" src={img} alt={location.name} loading="lazy" style={{ zIndex: 2 }} />
            </Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">LONG DISTANCE</p>
              <h2>One car, the whole way</h2>
              <p className="lead" style={{ fontSize: "1rem" }}>{location.name} is one of our regular long-distance routes: one chauffeur and one vehicle for the entire drive, door to door, with no flight, no connection and no rental counter at the other end.</p>
              <a className="btn btn-gold" href="/get-a-quote/">Get A Free Quote</a>
            </Reveal>
          </div>
        </section>

        <section className="sec" style={{ background: "var(--wash)" }}>
          <div className="wrap">
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

  const related = (siblings?.length ? siblings : allLocations)
    .filter(l => !l.isRoute && l.cluster === location.cluster && l.slug !== location.slug)
    .map(l => [l.name, l.href, l.img]);
  const bars = driveBars(location);

  return (
    <>
      <PageHero
        eyebrow={location.cluster}
        title={location.name}
        lead={`Black car service in ${location.name}, with flat rates to O'Hare, Midway and Chicago Executive.`}
        img={img}
        crumbs={[{ name: "Service Areas", href: "/service-areas/" }, { name: location.name, href: location.href }]}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 3, marginTop: -34 }}>
        <Reveal className="local-bar">
          {location.landmarks?.map((l) => (
            <div key={l}><Pin /><span>{l}</span></div>
          ))}
          <div><Route /><span>Via {location.highway}</span></div>
        </Reveal>
      </div>

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
            <a className="btn btn-gold" href="/get-a-quote/">Get A Free Quote</a>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">DRIVE TIMES</p><h2>From {location.name} to the airports</h2></Reveal>
          <div className="drive-bars">
            {bars.map((b, i) => (
              <Reveal key={b.label} delay={i} className="drive-bar-row">
                <span className="al">{b.label}</span>
                <span className="drive-bar-track"><span className="drive-bar-fill" style={{ width: `${b.pct}%` }} /></span>
                <span className="av">{b.value}</span>
              </Reveal>
            ))}
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
