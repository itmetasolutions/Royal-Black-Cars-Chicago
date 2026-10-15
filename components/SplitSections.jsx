import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import BookNowButton from "./BookNowButton.jsx";
import { stripHtml } from "../lib/richtext.js";

// A repeatable list of side-by-side sections for a service page: image on
// one side, heading/description/points on the other, alternating sides.
// Each piece — heading, description, points, CTA — only renders when it has
// content, and a CTA with no link opens the booking popup instead of a page.
// topGap adds extra space above the first section only, e.g. the gap below
// the hero.
export default function SplitSections({ sections, fallbackImg, topGap = 0 }) {
  const list = (sections || []).filter((s) => s.img || s.heading || stripHtml(s.text) || s.points?.length);
  if (!list.length) return null;

  return (
    <>
      {list.map((s, i) => (
        <section className="sec split-sec" key={i} style={i === 0 && topGap ? { marginTop: topGap } : undefined}>
          <div className={`wrap split${i % 2 ? " rev" : ""}`}>
            <Reveal className="media" slide>
              <img className="photo" src={s.img || fallbackImg} alt={s.heading || ""} loading="lazy" style={{ zIndex: 2 }} />
            </Reveal>
            <Reveal delay={1}>
              {s.heading && <h2>{s.heading}</h2>}
              {!!stripHtml(s.text) && <div className="lead rich-text" style={{ marginTop: 16 }} dangerouslySetInnerHTML={{ __html: s.text }} />}
              {!!s.points?.length && (
                <ul className="tick">{s.points.map((p) => <li key={p}><Check />{p}</li>)}</ul>
              )}
              {s.ctaLabel && (
                s.ctaHref
                  ? <a className="btn btn-gold" href={s.ctaHref}>{s.ctaLabel}</a>
                  : <BookNowButton className="btn btn-gold">{s.ctaLabel}</BookNowButton>
              )}
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
