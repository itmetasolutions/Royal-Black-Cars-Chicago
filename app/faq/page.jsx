import PageHero from "@/components/PageHero.jsx";
import PageFaq from "@/components/PageFaq.jsx";
import Cta from "@/components/Cta.jsx";
import { faqsFull, PHONE, IMG } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Frequently Asked Questions | Royal Black Cars Chicago",
  description: "Answers on pricing, booking, flight delays, child seats, corporate billing and service areas for Royal Black Cars Chicago.",
  path: "/faq/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="GOOD TO KNOW"
        title="Questions riders ask"
        lead={`Dispatch answers in under a minute, day or night, and can quote a trip on the phone — ${PHONE}.`}
        img={IMG.areaMap}
        crumbs={[{ name: "FAQ", href: "/faq/" }]}
        cta={false}
      />
      <PageFaq faqs={faqsFull} eyebrow="ALL QUESTIONS" title="Everything, in one place" />
      <Cta />
    </>
  );
}
