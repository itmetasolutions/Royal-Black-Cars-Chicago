import { notFound } from "next/navigation";
import AirportPageTemplate from "@/components/AirportPageTemplate.jsx";
import { getTemplatePage, getAllTemplatePages } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const airport = await getTemplatePage("airport", slug);
  if (!airport) return {};
  return pageMeta({
    title: airport.seo.metaTitle || `${airport.title} Car Service | Royal Black Car Chicago`,
    description: airport.seo.metaDescription || `Flat-rate pickups and drop-offs, ${airport.driveTime}.`,
    path: airport.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [row, allRows] = await Promise.all([
    getTemplatePage("airport", slug),
    getAllTemplatePages("airport"),
  ]);
  if (!row) notFound();
  const airport = { ...row, name: row.title };
  const allAirports = allRows.map((r) => ({ ...r, name: r.title }));
  return <AirportPageTemplate airport={airport} allAirports={allAirports} />;
}
