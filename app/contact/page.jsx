import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import ContactForm from "./ContactForm.jsx";
import { Check } from "@/components/icons.jsx";
import { PHONE, PHONE_HREF, EMAIL, PHOTOS, trustPoints } from "@/lib/data.js";
import { getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import RichText from "@/components/RichText.jsx";

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
  const f = fieldsFor("contact", page);

  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={f("heroTitle")}
        lead={f("heroLead")}
        img={page?.heroImg || PHOTOS.chauffeur[1]}
        crumbs={[{ name: "Contact", href: "/contact/" }]}
        cta={false}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">{f("introEyebrow")}</p>
            <h2>{f("introHeading")}</h2>
            <div className="prose">
              <p>
                <strong>Phone / text:</strong> <a href={PHONE_HREF}>{PHONE}</a><br />
                <strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                <strong>Hours:</strong> Dispatch is staffed 24 hours a day, every day.
              </p>
              <p><strong>Office:</strong></p>
              <RichText className="rich-text" value={page?.officeNote} />
            </div>
            <a className="btn btn-gold" href={PHONE_HREF}>Call Now</a>
          </Reveal>
          <Reveal delay={1} className="faq-aside">
            <h2 style={{ marginBottom: 16 }}>{f("formHeading")}</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("whyEyebrow")}</p><h2>{f("whyHeading")}</h2></Reveal>
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
