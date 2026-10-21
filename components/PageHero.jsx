import Breadcrumbs from "./Breadcrumbs.jsx";
import BookNowButton from "./BookNowButton.jsx";
import { PHONE_HREF } from "../lib/data.js";

export default function PageHero({ eyebrow, title, lead, crumbs = [], cta = true, img }) {
  return (
    <section className="page-hero">
      {img && (
        <div className="page-hero-bg" aria-hidden="true">
          <img src={img} alt="" loading="eager" fetchPriority="high" />
        </div>
      )}
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {/* lead may be plain text (most pages) or rich-text HTML (service
            pages); dangerouslySetInnerHTML renders plain text unchanged. */}
        {lead && <div className="lead rich-text" dangerouslySetInnerHTML={{ __html: lead }} />}
        {cta && (
          <div className="hero-actions">
            {/* On a phone, the sticky bottom bar already offers Book Now and
                Call Now, so the hero only needs the quote link there. */}
            <BookNowButton className="btn btn-gold hero-phone-hide" />
            <a className="btn btn-line" href="/get-a-quote/">Get A Free Quote</a>
            <a className="btn btn-line hero-phone-hide" href={PHONE_HREF}>Call Now</a>
          </div>
        )}
      </div>
    </section>
  );
}
