import { notFound } from "next/navigation";
import VenuePageTemplate from "@/components/VenuePageTemplate.jsx";
import { venueDetails, findVenue } from "@/lib/locations.js";
import { pageMeta } from "@/lib/seo.js";

export function generateStaticParams() {
  return venueDetails.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }) {
  const venue = findVenue(params.slug);
  if (!venue) return {};
  return pageMeta({
    title: `${venue.name} Car Service | Royal Black Cars Chicago`,
    description: `Drop-off and pickup transportation for ${venue.name}, ${venue.area}.`,
    path: venue.href,
  });
}

export default function Page({ params }) {
  const venue = findVenue(params.slug);
  if (!venue) notFound();
  return <VenuePageTemplate venue={venue} />;
}
