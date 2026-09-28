import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate.jsx";
import { getTemplatePage, getAllTemplatePages } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getTemplatePage("service", slug);
  if (!service) return {};
  return pageMeta({
    title: service.seo.metaTitle || `${service.title} | Royal Black Cars Chicago`,
    description: service.seo.metaDescription || service.lead,
    path: service.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([
    getTemplatePage("service", slug),
    getAllTemplatePages("service"),
  ]);
  if (!service) notFound();
  return <ServicePageTemplate service={service} allServices={allServices} />;
}
