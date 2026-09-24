import Hero from "@/components/Hero.jsx";
import Marquee from "@/components/Marquee.jsx";
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

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <Marquee top />
      <Hero />
      <Services />
      <AirportSplit />
      <Fleet />
      <ChildSeats />
      <Corporate />
      <ServiceAreas />
      <VenuesHome />
      <Faq />
      <Cta />
    </>
  );
}
