import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import PageHero from "@/components/PageHero.jsx";
import { Check, Shield, Clock, Tag } from "@/components/icons.jsx";
import { PHOTOS, trustPoints } from "@/lib/data.js";
import { allLocations, venueDetails } from "@/lib/locations.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import RichText from "@/components/RichText.jsx";
import { stripHtml } from "@/lib/richtext.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("about");
  return pageMeta({
    title: page?.seo.metaTitle || "About Royal Black Car Chicago | Premium Chauffeured Transportation",
    description: page?.seo.metaDescription || "Learn about Royal Black Car Chicago and our approach to premium, professional, and comfortable black car transportation across Chicago and the surrounding suburbs.",
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
  const f = fieldsFor("about", page);

  const stats = [
    { n: `${services.length}`, label: "services covered, from airport runs to conventions" },
    { n: `${fleet.length}`, label: "vehicle classes, sedan through 55-seat coach" },
    { n: `${airports.length}`, label: "Chicago-area airports served" },
    { n: `${areasCovered}+`, label: "neighborhoods, suburbs and venues with a dedicated page" },
  ];

  const closingCards = [
    {
      h: page?.closingCard1Heading || "Transportation for Business & Corporate Travel",
      p: page?.closingCard1Text || "Business travelers often work within narrow timelines that involve several appointments, flight connections, and meetings. Our corporate limo service is designed to run within these timelines, providing luxury black cars and professional chauffeurs for corporate travelers.",
      img: page?.closingCard1Img || PHOTOS.chauffeur[1],
      href: "/corporate-car-service/", linkLabel: "See corporate car service",
    },
    {
      h: page?.closingCard2Heading || "Transportation for Airports & Private Aviation",
      p: page?.closingCard2Text || "Airport and private aviation transportation is one of the most common ways people book us. We serve our clients to and from airport to airport, airport to downtown Chicago, the suburbs and other regional cities, in a professional manner.",
      img: page?.closingCard2Img || PHOTOS.skyline[1],
      href: "/airports/", linkLabel: "See airport transportation",
    },
    {
      h: page?.closingCard3Heading || "Transportation for Special Occasions",
      p: page?.closingCard3Text || "Some journeys are focused on being punctual; others — weddings, parties, concerts and celebrations — call for transportation that best fits the occasion. With our diverse fleet of vehicles, we can help everybody choose the most suitable one for the goal.",
      img: page?.closingCard3Img || PHOTOS.handshake[2],
      href: "/services/", linkLabel: "Browse all services",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title={page?.heroTitle || "A Dependable Chicago Black Car Service, Built Around Your Journey"}
        lead={page?.heroLead || "Royal Black Car Chicago is dedicated to meeting the needs of travelers who want a more sophisticated way to get around than typical options. Our mission is simple: superior vehicles, expert chauffeurs, and a relaxed, luxury experience for airport transfers, corporate travel, special events and everyday transportation."}
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
            <img className="photo" src={page?.whatWeDoImg || PHOTOS.corporateOffice[0]} alt="Royal Black Car Chicago chauffeured vehicle" loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">{f("whatWeDoEyebrow")}</p>
            <h2>{page?.whatWeDoHeading || "Premium Transportation Without the Ordinary Experience"}</h2>
            <div className="prose rich-text">
              <RichText value={page?.whatWeDoP1 || "Our limo service serves people who demand convenience, comfort, looks, and privacy. Whether you're on your way to an event, a meeting, the airport, or any daily life event, we want it to be an unparalleled travel experience for you."} />
              <RichText value={page?.whatWeDoP2 || "Our areas of operation are extensive, covering all of Downtown Chicago, O'Hare and Midway airports, the North Shore, the northwest and western suburbs, and large venues and destinations. Wherever you are, we're just one call away."} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap split">
          <Reveal className="quote-card">
            <q>{stripHtml(page?.quoteText) || "We believe a car service should not just provide transportation — it should give you a relaxed, luxury travel experience along with it."}</q>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">{f("standardEyebrow")}</p>
            <h2 style={{ fontSize: "1.7rem", marginBottom: 20 }}>{f("standardHeading")}</h2>
            <RichText className="lead rich-text" style={{ marginBottom: 20 }} value={f("standardLead")} />
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
          <Reveal className="section-head"><p className="eyebrow">{f("moreEyebrow")}</p><h2>{f("moreHeading")}</h2></Reveal>
          <div className="detail-grid cols-3" style={{ marginTop: 32 }}>
            {closingCards.map((c, i) => (
              <Reveal key={c.h} delay={i} className="detail-card">
                <img src={c.img} alt="" loading="lazy" />
                <div className="dc-body">
                  <h3>{c.h}</h3>
                  <RichText className="rich-text" value={c.p} />
                  {c.href && <a href={c.href} style={{ display: "inline-block", marginTop: 10, color: "var(--brass)", fontWeight: 600, fontSize: ".88rem" }}>{c.linkLabel} &rarr;</a>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta img={page?.ctaImg || PHOTOS.chauffeur[0]} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
