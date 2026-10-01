import Hero from "@/components/Hero.jsx";
import Services from "@/components/Services.jsx";
import AirportSplit from "@/components/AirportSplit.jsx";
import Fleet from "@/components/Fleet.jsx";
import ChildSeats from "@/components/ChildSeats.jsx";
import Corporate from "@/components/Corporate.jsx";
import ServiceAreas from "@/components/ServiceAreas.jsx";
import VenuesHome from "@/components/VenuesHome.jsx";
import Faq from "@/components/Faq.jsx";
import Cta from "@/components/Cta.jsx";
import { faqPage } from "@/lib/schema.js";
import { getCorePage } from "@/lib/cms.js";
import { homeField } from "@/lib/homeDefaults.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("home");
  if (!page?.seo.metaTitle) return {};
  return pageMeta({ title: page.seo.metaTitle, description: page.seo.metaDescription, path: "/" });
}

export default async function Home() {
  const page = await getCorePage("home");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <Hero heroData={page} />
      <Services page={page} />
      <AirportSplit page={page} />
      <Fleet page={page} />
      <ChildSeats page={page} />
      <Corporate page={page} />
      <ServiceAreas page={page} />
      <VenuesHome page={page} />
      <Faq page={page} />
      <Cta
        img={homeField(page, "ctaImg")}
        heading={homeField(page, "ctaHeading")}
        text={homeField(page, "ctaText")}
      />
    </>
  );
}
