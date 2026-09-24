import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import QuoteForm from "@/components/QuoteForm.jsx";
import { Check } from "@/components/icons.jsx";
import { PHONE, PHONE_HREF, EMAIL, PHOTOS, trustPoints } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Get a Free Quote | Royal Black Cars Chicago",
  description: "Request a free, no-obligation flat-rate quote for airport transfers, corporate travel, hourly chauffeur service and more across Chicago.",
  path: "/get-a-quote/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="GET A QUOTE"
        title="Get your free, flat-rate quote"
        lead="Tell us about your trip and a dispatcher confirms your rate — no obligation, no surprise charges later."
        img={PHOTOS.chauffeur[2]}
        crumbs={[{ name: "Get a Quote", href: "/get-a-quote/" }]}
        cta={false}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">WHY REQUEST HERE</p>
            <h2>One form, a rate within minutes</h2>
            <div className="prose">
              <p>Give dispatch the details of your trip — pickup, drop-off, date and vehicle — and you'll hear back with a confirmed flat rate, usually within a few minutes during business hours. There's no charge and no obligation to book.</p>
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
