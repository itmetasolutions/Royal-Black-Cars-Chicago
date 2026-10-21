import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import QuoteForm from "@/components/QuoteForm.jsx";
import { Check } from "@/components/icons.jsx";
import { PHONE, PHONE_HREF, EMAIL, PHOTOS, trustPoints } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";
import { getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import RichText from "@/components/RichText.jsx";

export const metadata = pageMeta({
  title: "Get a Free Quote | Royal Black Car Chicago",
  description: "Request a free, no-obligation flat-rate quote for airport transfers, corporate travel, hourly chauffeur service and more across Chicago.",
  path: "/get-a-quote/",
});

export default async function Page() {
  const corePage = await getCorePage("get-a-quote");
  const f = fieldsFor("get-a-quote", corePage);
  return (
    <>
      <PageHero
        eyebrow={f("heroEyebrow")}
        title={f("heroTitle")}
        lead={f("heroLead")}
        img={PHOTOS.chauffeur[2]}
        crumbs={[{ name: "Get a Quote", href: "/get-a-quote/" }]}
        cta={false}
      />

      <section className="sec">
        <div className="wrap split form-first">
          <Reveal>
            <p className="eyebrow">WHY REQUEST HERE</p>
            <h2>{f("formHeading")}</h2>
            <div className="prose rich-text">
              <RichText value={f("formText")} />
            </div>
            <ul className="tick" style={{ marginTop: 20 }}>
              {trustPoints.map((t) => <li key={t.title}><Check /><span><b>{t.title}</b> — {t.text}</span></li>)}
            </ul>
            <div className="prose" style={{ marginTop: 24 }}>
              <p>Prefer to talk it through? <strong>Call or text:</strong> <a href={PHONE_HREF}>{PHONE}</a><br /><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
