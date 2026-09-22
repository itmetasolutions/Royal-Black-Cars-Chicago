import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Services from "./components/Services.jsx";
import AirportSplit from "./components/AirportSplit.jsx";
import Fleet from "./components/Fleet.jsx";
import ChildSeats from "./components/ChildSeats.jsx";
import Corporate from "./components/Corporate.jsx";
import Reviews from "./components/Reviews.jsx";
import ServiceAreas from "./components/ServiceAreas.jsx";
import Faq from "./components/Faq.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import { localBusiness, faqPage } from "./lib/schema.js";

export default function App() {
  // Vite is client-rendered, so structured data is injected on mount.
  // Crawlers read it fine, but the Next.js build renders it server-side.
  useEffect(() => {
    const nodes = [localBusiness, faqPage].map(data => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
      return el;
    });
    return () => nodes.forEach(n => n.remove());
  }, []);

  return (
    <>
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
