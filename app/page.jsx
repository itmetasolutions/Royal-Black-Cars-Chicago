import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import Marquee from "@/components/Marquee.jsx";
import Services from "@/components/Services.jsx";
import AirportSplit from "@/components/AirportSplit.jsx";
import Fleet from "@/components/Fleet.jsx";
import ChildSeats from "@/components/ChildSeats.jsx";
import Corporate from "@/components/Corporate.jsx";
import Reviews from "@/components/Reviews.jsx";
import ServiceAreas from "@/components/ServiceAreas.jsx";
import Faq from "@/components/Faq.jsx";
import Cta from "@/components/Cta.jsx";
import Footer from "@/components/Footer.jsx";
import { localBusiness, faqPage } from "@/lib/schema.js";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <AirportSplit />
        <Fleet />
        <ChildSeats />
        <Corporate />
        <Reviews />
        <ServiceAreas />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
