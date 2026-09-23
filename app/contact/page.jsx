import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import ContactForm from "./ContactForm.jsx";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Contact Us | Royal Black Cars Chicago",
  description: "Reach Royal Black Cars Chicago dispatch by phone, text or email, 24 hours a day — or send a message and we'll reply within minutes.",
  path: "/contact/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Talk to dispatch"
        lead="Call, text or email any time — dispatch answers day and night and can quote a trip on the spot."
        crumbs={[{ name: "Contact", href: "/contact/" }]}
        cta={false}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Dispatch, 24 hours a day</h2>
            <div className="prose">
              <p>
                <strong>Phone / text:</strong> <a href={PHONE_HREF}>{PHONE}</a><br />
                <strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                <strong>Hours:</strong> Dispatch is staffed 24 hours a day, every day.
              </p>
              <p><strong>Office:</strong> Chicago, IL 60601 <em>(street address to be confirmed — call or text for meet-up details)</em></p>
            </div>
            <a className="btn btn-gold" href={PHONE_HREF}>{PHONE}</a>
          </Reveal>
          <Reveal delay={1} className="faq-aside">
            <h2 style={{ marginBottom: 16 }}>Send a message</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
