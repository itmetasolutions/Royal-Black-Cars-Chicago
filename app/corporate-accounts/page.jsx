import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import PageFaq from "@/components/PageFaq.jsx";
import Cta from "@/components/Cta.jsx";
import { Check, Shield, Clock, Tag } from "@/components/icons.jsx";
import { PHONE, PHONE_HREF, EMAIL, PHOTOS } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

const faqs = [
  { q: "Is there a minimum number of riders to open an account?", a: "No — accounts scale from a single frequent traveler to a full company directory." },
  { q: "Can we set spending limits per traveler?", a: "Yes — cost centres and trip codes can be structured however your finance team needs to track spend." },
  { q: "How is a corporate account different from just expensing rides?", a: "One monthly invoice instead of a stack of individual receipts, a named dispatcher who knows your travelers, and NDA-signed chauffeurs available on request." },
  { q: "Can personal and business trips be on the same account?", a: "We recommend keeping them separate — personal bookings are charged to the card on file, business trips go on the account invoice." },
  { q: "What happens if a traveler leaves the company?", a: "Tell your dispatcher and they're removed from the account immediately — no lingering access." },
];

export const metadata = pageMeta({
  title: "Corporate Accounts | Royal Black Cars Chicago",
  description: "Monthly invoicing, a named dispatcher and NDA-signed chauffeurs for executive travel and roadshows across Chicago.",
  path: "/corporate-accounts/",
});

const points = [
  "One login for the whole company, with cost centres and trip codes",
  "Monthly invoicing instead of a card charge per ride",
  "A named dispatcher who learns your frequent travelers",
  "NDA-signed chauffeurs available for client-facing or confidential trips",
  "Multi-car roadshows and conventions coordinated by one dispatcher",
];

const setupSteps = [
  ["Tell us your needs", "Company details, typical routes and expected volume — a two-minute call or email."],
  ["We confirm terms", "Billing cycle, cost-centre structure and any NDA requirements are set before your first ride."],
  ["Add your travelers", "Frequent flyers are added to the account so booking is a text, not a new sign-up."],
  ["Ride, then one invoice", "Every trip is logged automatically; one itemized invoice goes to finance each month."],
];

const details = [
  { h: "Who this is for", p: "Companies with recurring travel — airport pickups for visiting clients, executives with regular downtown or suburb trips, sales teams running roadshows, or any team that would rather see one monthly invoice than a stack of expensed receipts.", img: PHOTOS.corporateOffice[1] },
  { h: "How billing works", p: "Every ride under the account is logged by rider, date, route and cost centre. Invoices go out monthly, itemized so finance can allocate spend by department without chasing individual receipts.", img: PHOTOS.meeting[0] },
  { h: "Setting up an account", p: "Call, text or email dispatch with your company details and typical travel needs, and we'll confirm billing terms and add your frequent travelers.", img: PHOTOS.handshake[1] },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="FOR BUSINESS"
        title="An account your finance team will accept"
        lead="Set up once, then booking a ride is a text — not a new account, and not an expensed receipt to track down."
        img={PHOTOS.corporateOffice[0]}
        crumbs={[{ name: "Corporate Accounts", href: "/corporate-accounts/" }]}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 3, marginTop: -34 }}>
        <Reveal className="quickfacts">
          <div><Tag /><div><b>Monthly invoicing</b><small>Not a charge per ride</small></div></div>
          <div><Shield /><div><b>NDA chauffeurs</b><small>Available on request</small></div></div>
          <div><Clock /><div><b>A named dispatcher</b><small>Knows your travelers</small></div></div>
          <div><Check /><div><b>Scales with you</b><small>One traveler to a full team</small></div></div>
        </Reveal>
      </div>

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={PHOTOS.handshake[0]} alt="Corporate car service in Chicago" loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">WHAT&apos;S INCLUDED</p>
            <ul className="tick">{points.map((p) => <li key={p}><Check />{p}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">THE DETAILS</p><h2>How a corporate account works</h2></Reveal>
          <div className="detail-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 32 }}>
            {details.map((d, i) => (
              <Reveal key={d.h} delay={i} className="detail-card">
                <img src={d.img} alt="" loading="lazy" />
                <div className="dc-body">
                  <h3>{d.h}</h3>
                  <p>{d.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
            <a className="btn btn-gold" href={PHONE_HREF}>{PHONE}</a>
            <a className="btn btn-line" href={`mailto:${EMAIL}`} style={{ borderColor: "var(--line)", color: "var(--text)" }}>{EMAIL}</a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">GETTING STARTED</p><h2>Set up in four steps</h2></Reveal>
          <div className="steps">
            {setupSteps.map(([title, text], i) => (
              <Reveal key={title} delay={i % 3} className="step">
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHY IT'S WORTH SETTING UP</p><h2>Expensing rides vs. a corporate account</h2></Reveal>
          <div className="split" style={{ marginTop: 32 }}>
            <Reveal className="feature-card" style={{ padding: 30 }}>
              <h3 style={{ marginBottom: 14 }}>Without an account</h3>
              <ul className="tick">
                <li>Every rider expenses their own ride individually</li>
                <li>No single dispatcher who knows your team</li>
                <li>Receipts collected and submitted one by one</li>
                <li>New booking details entered every time</li>
              </ul>
            </Reveal>
            <Reveal delay={1} className="feature-card" style={{ padding: 30, borderColor: "var(--brass)" }}>
              <h3 style={{ marginBottom: 14 }}>With a corporate account</h3>
              <ul className="tick">
                <li><Check />One monthly invoice, itemized by rider and cost centre</li>
                <li><Check />A named dispatcher who knows your frequent travelers</li>
                <li><Check />Nothing to expense — finance reconciles once a month</li>
                <li><Check />Booking is a text, not a new form every time</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <PageFaq faqs={faqs} title="Corporate account questions" />
      <Cta img={PHOTOS.corporateOffice[2]} />
    </>
  );
}
