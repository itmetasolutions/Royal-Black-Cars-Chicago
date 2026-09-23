import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/LocationPageTemplate.jsx";
import { allLocations, findLocation } from "@/lib/locations.js";
import { pageMeta } from "@/lib/seo.js";

export function generateStaticParams() {
  return allLocations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }) {
  const location = findLocation(params.slug);
  if (!location) return {};
  return pageMeta({
    title: location.isRoute
      ? `${location.name} Car Service | Royal Black Cars Chicago`
      : `${location.name} Black Car Service | Royal Black Cars Chicago`,
    description: location.isRoute
      ? `Door-to-door ${location.name.toLowerCase()} car service, ${location.miles}, ${location.drive}.`
      : `Black car and airport transportation in ${location.name}, IL — flat rates to O'Hare, Midway and Chicago Executive.`,
    path: location.href,
  });
}

export default function Page({ params }) {
  const location = findLocation(params.slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
