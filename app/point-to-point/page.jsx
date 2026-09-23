import ServicePageTemplate from "@/components/ServicePageTemplate.jsx";
import { serviceDetails } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

const service = serviceDetails.find((s) => s.slug === "point-to-point");

export const metadata = pageMeta({
  title: `${service.title} | Royal Black Cars Chicago`,
  description: service.lead,
  path: service.href,
});

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
