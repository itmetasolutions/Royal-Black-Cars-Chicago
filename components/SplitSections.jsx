import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import BookNowButton from "./BookNowButton.jsx";

// A repeatable list of side-by-side sections for a service page: image on
// one side, heading/description/points on the other, alternating sides.
// Each piece — heading, description, points, CTA — only renders when it has
// content, and a CTA with no link opens the booking popup instead of a page.
export default function SplitSections({ sections, fallbackImg }) {
  const list = (sections || []).filter((s) => s.img || s.heading || s.text || s.points?.length);
  if (!list.length) return null;

  return (
    <>
      {list.map((s, i) => (
        <section className="sec split-sec" key={i}>
          <div className={`wrap split${i % 2 ? " rev" : ""}`}>
            <Reveal className="media" slide>
              <img className="photo" src={s.img || fallbackImg} alt={s.heading || ""} loading="lazy" style={{ zIndex: 2 }} />
            </Reveal>
            <Reveal delay={1}>
              {s.heading && <h2>{s.heading}</h2>}
              {s.text && <p className="lead" style={{ marginTop: 16 }}>{s.text}</p>}
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
