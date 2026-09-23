import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import Cta from "./Cta.jsx";
import { allLocations, cityToCity } from "../lib/locations.js";

export default function LocationPageTemplate({ location }) {
  if (location.isRoute) {
    const related = cityToCity.filter(r => r.slug !== location.slug).map(r => [r.name, r.href]);
    return (
      <>
        <PageHero
          eyebrow="CITY TO CITY"
          title={location.name}
          lead={`${location.miles} · ${location.drive}, door to door in one car.`}
          crumbs={[{ name: "Service Areas", href: "/service-areas/" }, { name: location.name, href: location.href }]}
        />
        <section className="sec">
          <div className="wrap">
            <div className="prose">
              <p>{location.name} is one of our regular long-distance routes: one chauffeur and one vehicle for the entire drive, door to door, with no flight, no connection and no rental counter at the other end.</p>
            </div>
            <table className="drive-table">
              <tbody>
                <tr><th>Distance</th><td>{location.miles}</td></tr>
                <tr><th>Typical drive time</th><td>{location.drive}</td></tr>
              </tbody>
            </table>
            <div className="prose">
              <p>Rates are flat and quoted for the full trip before you book, with round-trip and wait-and-return options available. <a href="/long-distance-car-service/">See how long-distance bookings work</a>.</p>
            </div>
            <a className="btn btn-gold" href="/#quote">Get your rate</a>
          </div>
        </section>
        <RelatedLinks title="Other routes" links={related} hub={["All service areas", "/service-areas/"]} />
        <Cta />
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
        crumbs={[{ name: "Service Areas", href: "/service-areas/" }, { name: location.name, href: location.href }]}
      />
      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <p>
              Royal Black Cars Chicago runs daily airport, corporate and point-to-point service in {location.name}
              {location.landmarks?.length ? `, near ${location.landmarks.join(" and ")}` : ""}. Chauffeurs run this route
              regularly via {location.highway}, so pickup timing accounts for real traffic patterns, not just map-app estimates.
            </p>
          </div>
          <table className="drive-table">
            <thead><tr><th>Airport</th><th>Typical drive time</th></tr></thead>
            <tbody>
              <tr><td>O&apos;Hare (ORD)</td><td>{location.drive.ORD}</td></tr>
              <tr><td>Midway (MDW)</td><td>{location.drive.MDW}</td></tr>
              <tr><td>Chicago Executive (PWK)</td><td>{location.drive.PWK}</td></tr>
            </tbody>
          </table>
          <a className="btn btn-gold" href="/#quote">Get your rate</a>
        </div>
      </section>
      <RelatedLinks title={`More in ${location.cluster}`} links={related} hub={["All service areas", "/service-areas/"]} />
      <Cta />
    </>
  );
}
