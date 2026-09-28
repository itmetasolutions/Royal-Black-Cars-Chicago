import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import ContactForm from "./ContactForm.jsx";
import { Check } from "@/components/icons.jsx";
import { PHONE, PHONE_HREF, EMAIL, PHOTOS, trustPoints } from "@/lib/data.js";
import { getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("contact");
  return pageMeta({
    title: page?.seo.metaTitle || "Contact Us | Royal Black Cars Chicago",
    description: page?.seo.metaDescription || "Reach Royal Black Cars Chicago dispatch by phone, text or email, 24 hours a day — or send a message and we'll reply within minutes.",
    path: "/contact/",
  });
}

export default async function Page() {
  const page = await getCorePage("contact");

  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={page?.heroTitle || "Talk to dispatch"}
        lead={page?.heroLead}
        img={page?.heroImg || PHOTOS.chauffeur[1]}
        crumbs={[{ name: "Contact", href: "/contact/" }]}
        cta={false}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>{page?.introHeading}</h2>
            <div className="prose">
              <p>
                <strong>Phone / text:</strong> <a href={PHONE_HREF}>{PHONE}</a><br />
                <strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                <strong>Hours:</strong> Dispatch is staffed 24 hours a day, every day.
              </p>
              <p><strong>Office:</strong> {page?.officeNote}</p>
            </div>
            <a className="btn btn-gold" href={PHONE_HREF}>Call Now</a>
          </Reveal>
          <Reveal delay={1} className="faq-aside">
            <h2 style={{ marginBottom: 16 }}>Send a message</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHY CLIENTS CALL US</p><h2>Every trip, the same standard</h2></Reveal>
          <div className="feature-grid" style={{ marginTop: 32 }}>
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} delay={i % 3} className="feature-card">
                <Check />
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
