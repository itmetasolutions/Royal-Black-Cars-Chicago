import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import PageHero from "@/components/PageHero.jsx";
import { Check, Shield, Clock, Tag } from "@/components/icons.jsx";
import { PHOTOS, trustPoints } from "@/lib/data.js";
import { allLocations, venueDetails } from "@/lib/locations.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("about");
  return pageMeta({
    title: page?.seo.metaTitle || "About Us | Royal Black Cars Chicago",
    description: page?.seo.metaDescription || "A licensed, insured Chicago black car service built on flat pricing agreed before you ride, vetted chauffeurs and a dispatch desk that answers.",
    path: "/about/",
  });
}

const areasCovered = allLocations.filter((l) => !l.isRoute).length + venueDetails.length;

export default async function Page() {
  const [services, airports, fleet, page] = await Promise.all([
    getAllTemplatePages("service"),
    getAllTemplatePages("airport"),
    getAllTemplatePages("fleet"),
    getCorePage("about"),
  ]);

  const stats = [
    { n: `${services.length}`, label: "services covered, from airport runs to conventions" },
    { n: `${fleet.length}`, label: "vehicle classes, sedan through 55-seat coach" },
    { n: `${airports.length}`, label: "Chicago-area airports served" },
    { n: `${areasCovered}+`, label: "neighborhoods, suburbs and venues with a dedicated page" },
  ];

  const closingCards = [
    { h: page?.closingCard1Heading, p: page?.closingCard1Text, img: page?.closingCard1Img || PHOTOS.chauffeur[1] },
    { h: page?.closingCard2Heading, p: page?.closingCard2Text, img: page?.closingCard2Img || PHOTOS.skyline[1], href: "/service-areas/", linkLabel: "Full service area list" },
    { h: page?.closingCard3Heading, p: page?.closingCard3Text, img: page?.closingCard3Img || PHOTOS.handshake[2], href: "/corporate-accounts/", linkLabel: "Set up an account" },
  ];

  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title={page?.heroTitle || "A Chicago black car service built on kept promises"}
        lead={page?.heroLead}
        img={page?.heroImg || PHOTOS.chauffeur[2]}
        crumbs={[{ name: "About", href: "/about/" }]}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 3, marginTop: -34 }}>
        <Reveal className="quickfacts">
          <div><Shield /><div><b>Licensed &amp; insured</b><small>Commercial cover on every vehicle</small></div></div>
          <div><Tag /><div><b>Flat pricing</b><small>Agreed before you ride</small></div></div>
          <div><Check /><div><b>Vetted chauffeurs</b><small>Background-checked and trained</small></div></div>
          <div><Clock /><div><b>Dispatch that answers</b><small>Day or night, no queue</small></div></div>
        </Reveal>
      </div>

      <section className="stat-band sec" style={{ padding: "48px 0", marginTop: 64 }}>
        <div className="wrap">
          <div className="stat-row">
            {stats.map((s) => (
              <div key={s.label}><b>{s.n}</b><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={page?.whatWeDoImg || PHOTOS.corporateOffice[0]} alt="Royal Black Cars Chicago chauffeured vehicle" loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>{page?.whatWeDoHeading}</h2>
            <div className="prose">
              <p>{page?.whatWeDoP1}</p>
              <p>{page?.whatWeDoP2}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap split">
          <Reveal className="quote-card">
            <q>{page?.quoteText}</q>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">OUR STANDARD</p>
            <h2 style={{ fontSize: "1.7rem", marginBottom: 20 }}>What that promise looks like ride to ride</h2>
            <div className="mini-grid">
              {trustPoints.map((t) => (
                <div key={t.title} className="feature-card">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">MORE ABOUT US</p><h2>Approach, coverage and corporate accounts</h2></Reveal>
          <div className="detail-grid cols-3" style={{ marginTop: 32 }}>
            {closingCards.map((c, i) => (
              <Reveal key={c.h} delay={i} className="detail-card">
                <img src={c.img} alt="" loading="lazy" />
                <div className="dc-body">
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                  {c.href && <a href={c.href} style={{ display: "inline-block", marginTop: 10, color: "var(--brass)", fontWeight: 600, fontSize: ".88rem" }}>{c.linkLabel} &rarr;</a>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta img={page?.ctaImg || PHOTOS.chauffeur[0]} />
    </>
  );
}
