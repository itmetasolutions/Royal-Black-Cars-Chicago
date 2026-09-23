import AirportPageTemplate from "@/components/AirportPageTemplate.jsx";
import { airportDetails } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

const airport = airportDetails.find((a) => a.slug === "midway");

export const metadata = pageMeta({
  title: `${airport.name} Car Service | Royal Black Cars Chicago`,
  description: `Flat-rate car service to and from ${airport.name}, ${airport.driveTime}.`,
  path: airport.href,
});

export default function Page() {
  return <AirportPageTemplate airport={airport} />;
}
