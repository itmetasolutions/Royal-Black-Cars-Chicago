import { notFound } from "next/navigation";
import VenuePageTemplate from "@/components/VenuePageTemplate.jsx";
import { getTemplatePage, getAllTemplatePages } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const venue = await getTemplatePage("venue", slug);
  if (!venue) return {};
  return pageMeta({
    title: venue.seo.metaTitle || `${venue.title} Car Service | Royal Black Car Chicago`,
    description: venue.seo.metaDescription || `Drop-off and pickup transportation for ${venue.title}, ${venue.area}.`,
    path: venue.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [venue, allVenues] = await Promise.all([
    getTemplatePage("venue", slug),
    getAllTemplatePages("venue"),
  ]);
  if (!venue) notFound();
  return <VenuePageTemplate venue={venue} allVenues={allVenues} />;
}
