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
  const [service, allServices, allFleet] = await Promise.all([
    getTemplatePage("service", slug),
    getAllTemplatePages("service"),
    getAllTemplatePages("fleet"),
  ]);
  if (!service) notFound();
  return <ServicePageTemplate service={service} allServices={allServices} allFleet={allFleet} />;
}
