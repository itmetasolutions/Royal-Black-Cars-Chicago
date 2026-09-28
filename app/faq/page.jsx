import PageHero from "@/components/PageHero.jsx";
import PageFaq from "@/components/PageFaq.jsx";
import Cta from "@/components/Cta.jsx";
import { faqsFull, PHOTOS } from "@/lib/data.js";
import { getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("faq");
  return pageMeta({
    title: page?.seo.metaTitle || "Frequently Asked Questions | Royal Black Cars Chicago",
    description: page?.seo.metaDescription || "Answers on pricing, booking, flight delays, child seats, corporate billing and service areas for Royal Black Cars Chicago.",
    path: "/faq/",
  });
}

export default async function Page() {
  const page = await getCorePage("faq");
  const faqs = page?.faqs?.length ? page.faqs : faqsFull;

  return (
    <>
      <PageHero
        eyebrow="GOOD TO KNOW"
        title="Questions riders ask"
        lead={page?.heroLead}
        img={PHOTOS.sedan[0]}
        crumbs={[{ name: "FAQ", href: "/faq/" }]}
        cta={false}
      />
      <PageFaq faqs={faqs} eyebrow="ALL QUESTIONS" title="Everything, in one place" />
      <Cta img={PHOTOS.sedan[2]} />
    </>
  );
}
