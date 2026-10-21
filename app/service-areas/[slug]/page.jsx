import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/LocationPageTemplate.jsx";
import ClusterPageTemplate from "@/components/ClusterPageTemplate.jsx";
import { allLocations, findLocation, locationImage } from "@/lib/locations.js";
import { getAllTemplatePages, getTemplatePage } from "@/lib/cms.js";
import { toLocation, toLocations } from "@/lib/areas.js";
import { pageMeta } from "@/lib/seo.js";
import { stripHtml } from "@/lib/richtext.js";

// Rendered per request like the other CMS-backed detail routes, so an edit in
// the admin shows without a redeploy and areas added there resolve too.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getTemplatePage("area", slug);
  const location = page ? toLocation(page) : findLocation(slug);
  if (!location) return {};
  if (page?.seo?.metaTitle) {
    return pageMeta({ title: page.seo.metaTitle, description: page.seo.metaDescription, path: location.href });
  }
  if (location.isCluster) {
    return pageMeta({
      title: `${location.name} Black Car Service | Royal Black Car Chicago`,
      description: stripHtml(location.intro) || `Chauffeured black car and airport transportation throughout ${location.name}, Chicago — flat rates, licensed chauffeurs.`,
      path: location.href,
    });
  }
  return pageMeta({
    title: location.isRoute
      ? `${location.name} Car Service | Royal Black Car Chicago`
      : `${location.name} Black Car Service | Royal Black Car Chicago`,
    description: location.isRoute
      ? `Door-to-door ${location.name.toLowerCase()} car service, ${location.miles}, ${location.drive}.`
      : `Black car and airport transportation in ${location.name}, IL — flat rates to O'Hare, Midway and Chicago Executive.`,
    path: location.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [page, all] = await Promise.all([
    getTemplatePage("area", slug),
    getAllTemplatePages("area"),
  ]);
  const location = page ? toLocation(page) : findLocation(slug);
  if (!location) notFound();

  if (location.isCluster) {
    const areas = toLocations(all)
      .filter((l) => !l.isRoute && !l.isCluster && l.cluster === location.name && l.slug !== location.slug)
      .map((l) => ({ ...l, img: locationImage(l), cardText: stripHtml(l.cardText) || stripHtml(l.intro) }));
    return <ClusterPageTemplate cluster={location} areas={areas} />;
  }

  return <LocationPageTemplate location={location} siblings={toLocations(all)} />;
}
