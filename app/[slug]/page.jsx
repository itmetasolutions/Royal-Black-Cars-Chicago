import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate.jsx";
import { getTemplatePage, getAllTemplatePages } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";
import { stripHtml } from "@/lib/richtext.js";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getTemplatePage("service", slug);
  if (!service) return {};
  return pageMeta({
    title: service.seo.metaTitle || `${service.title} | Royal Black Cars Chicago`,
    // service.lead is rich text now; a meta description can't carry markup.
    description: service.seo.metaDescription || stripHtml(service.lead),
    path: service.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  // The black-car-service page is the site's main "pillar" keyword page that
  // most other pages link back to, so it alone also shows full services and
  // airports sliders beneath its content.
  const isPillarPage = slug === "black-car-service";
  const [service, allServices, allFleet, allAirports] = await Promise.all([
    getTemplatePage("service", slug),
    getAllTemplatePages("service"),
    getAllTemplatePages("fleet"),
    isPillarPage ? getAllTemplatePages("airport") : Promise.resolve(undefined),
  ]);
  if (!service) notFound();
  return <ServicePageTemplate service={service} allServices={allServices} allFleet={allFleet} allAirports={allAirports} />;
}
