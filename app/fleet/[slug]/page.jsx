import { notFound } from "next/navigation";
import FleetPageTemplate from "@/components/FleetPageTemplate.jsx";
import { getTemplatePage, getAllTemplatePages } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";
import { stripHtml } from "@/lib/richtext.js";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const vehicle = await getTemplatePage("fleet", slug);
  if (!vehicle) return {};
  return pageMeta({
    title: vehicle.seo.metaTitle || `${vehicle.title} | Royal Black Cars Chicago Fleet`,
    description: vehicle.seo.metaDescription || stripHtml(vehicle.body),
    path: vehicle.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [vehicle, allVehicles] = await Promise.all([
    getTemplatePage("fleet", slug),
    getAllTemplatePages("fleet"),
  ]);
  if (!vehicle) notFound();
  return <FleetPageTemplate vehicle={vehicle} allVehicles={allVehicles} />;
}
