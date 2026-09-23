import Breadcrumbs from "./Breadcrumbs.jsx";
import { PHONE, PHONE_HREF } from "../lib/data.js";

export default function PageHero({ eyebrow, title, lead, crumbs = [], cta = true }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {cta && (
          <div className="hero-actions">
            <a className="btn btn-gold" href="/#quote">Get your rate</a>
            <a className="btn btn-line" href={PHONE_HREF}>{PHONE}</a>
          </div>
        )}
      </div>
    </section>
  );
}
