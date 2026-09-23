import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Check } from "@/components/icons.jsx";
import { IMG, PHONE, PHONE_HREF, EMAIL } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

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

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="FOR BUSINESS"
        title="An account your finance team will accept"
        lead="Set up once, then booking a ride is a text — not a new account, and not an expensed receipt to track down."
        crumbs={[{ name: "Corporate Accounts", href: "/corporate-accounts/" }]}
      />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={IMG.corporate} alt="Executive corporate car service in Chicago" loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">WHAT&apos;S INCLUDED</p>
            <ul className="tick">{points.map((p) => <li key={p}><Check />{p}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <div className="prose">
            <h2>Who this is for</h2>
            <p>Companies with recurring travel — airport pickups for visiting clients, executives with regular downtown or suburb trips, sales teams running roadshows, or any team that would rather see one monthly invoice than a stack of expensed receipts.</p>
            <h2>How billing works</h2>
            <p>Every ride under the account is logged by rider, date, route and cost centre. Invoices go out monthly, itemized so finance can allocate spend by department without chasing individual receipts.</p>
            <h2>Setting up an account</h2>
            <p>Call, text or email dispatch with your company details and typical travel needs, and we'll confirm billing terms and add your frequent travelers.</p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
            <a className="btn btn-gold" href={PHONE_HREF}>{PHONE}</a>
            <a className="btn btn-line" href={`mailto:${EMAIL}`} style={{ borderColor: "var(--line)", color: "var(--text)" }}>{EMAIL}</a>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
