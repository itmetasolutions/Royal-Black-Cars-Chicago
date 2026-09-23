import FleetPageTemplate from "@/components/FleetPageTemplate.jsx";
import { fleetPages } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

const vehicle = fleetPages.find((f) => f.slug === "mercedes-s-class");

export const metadata = pageMeta({
  title: `${vehicle.title} | Royal Black Cars Chicago Fleet`,
  description: vehicle.body,
  path: vehicle.href,
});

export default function Page() {
  return <FleetPageTemplate vehicle={vehicle} />;
}
