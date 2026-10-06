import Hero from "@/components/Hero.jsx";
import Intro from "@/components/Intro.jsx";
import Services from "@/components/Services.jsx";
import AirportSplit from "@/components/AirportSplit.jsx";
import Fleet from "@/components/Fleet.jsx";
import ChildSeats from "@/components/ChildSeats.jsx";
import Corporate from "@/components/Corporate.jsx";
import { WhyChoose, OHareDetail, GroupTransport, ExperienceDifferent } from "@/components/HomeExtras.jsx";
import ServiceAreas from "@/components/ServiceAreas.jsx";
import VenuesHome from "@/components/VenuesHome.jsx";
import Faq from "@/components/Faq.jsx";
import Cta from "@/components/Cta.jsx";
import { faqPage } from "@/lib/schema.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { homeField } from "@/lib/homeDefaults.js";
import { parseKeywordRules } from "@/components/KeywordText.jsx";
import { pickCards } from "@/lib/cards.js";
import { clustersFrom } from "@/lib/areas.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("home");
  if (!page?.seo.metaTitle) return {};
  return pageMeta({ title: page.seo.metaTitle, description: page.seo.metaDescription, path: "/" });
}

export default async function Home() {
  // Cards are built from the pages themselves, so editing a service, airport,
  // vehicle, venue or area in the admin updates every card of it site-wide.
  const [page, services, fleet, venues, areas] = await Promise.all([
    getCorePage("home"),
    getAllTemplatePages("service"),
    getAllTemplatePages("fleet"),
    getAllTemplatePages("venue"),
    getAllTemplatePages("area"),
  ]);

  const serviceCards = pickCards("service", services, homeField(page, "serviceCardSlugs"));
  const venueCards = pickCards("venue", venues, homeField(page, "venuesFeatured"));
  const areaClusters = clustersFrom(areas);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <Hero heroData={page} />
      <Intro page={page} />
      <Services page={page} cards={serviceCards} />
      <WhyChoose page={page} />
      <AirportSplit page={page} />
      <OHareDetail page={page} />
      <Fleet page={page} vehicles={fleet} />
      <ChildSeats page={page} />
      <GroupTransport page={page} />
      <Corporate page={page} />
      <ExperienceDifferent page={page} />
      <ServiceAreas page={page} clusters={areaClusters} />
      <VenuesHome page={page} cards={venueCards} />
      <Faq page={page} />
      <Cta
        img={homeField(page, "ctaImg")}
        heading={homeField(page, "ctaHeading")}
        text={homeField(page, "ctaText")}
        rules={parseKeywordRules(homeField(page, "keywordLinks"))}
      />
    </>
  );
}
