"use client";

import { IMG, PHONE_HREF } from "../lib/data.js";
import { homeField } from "../lib/homeDefaults.js";
import RichText from "./RichText.jsx";
import BookNowButton from "./BookNowButton.jsx";
import Marquee from "./Marquee.jsx";
import MoovsFrame from "./MoovsFrame.jsx";

// Looping background clip for the hero. A poster image is required so the
// browser has something to paint immediately — without one, the video isn't
// a valid Largest Contentful Paint candidate at all, and on a slow
// connection the page can end up with no LCP candidate until the video
// itself finishes loading (or never, if the measurement window ends first).
// The <img> fallback below only renders for anyone who asked for reduced
// motion, where the video itself is hidden.
const HERO_VIDEO = "/video/hero-motion.mp4";

export default function Hero({ heroData }) {
  const still = heroData?.heroImg || IMG.hero;
  const video = heroData?.heroVideo || HERO_VIDEO;

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        {video ? (
          <>
            <video
              className="hero-video"
              src={video}
              poster={still}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            {/* Only shown when prefers-reduced-motion hides the video above. */}
            <img className="photo hero-still" src={still} alt="" fetchPriority="high" style={{ zIndex: 1 }} />
          </>
        ) : (
          <img className="photo" src={still} alt="" fetchPriority="high" style={{ zIndex: 1 }} />
        )}
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="wrap hero-in">
        <div className="hero-grid">
          <div>
            <h1>
              <span><i>{homeField(heroData, "heroLine1")}</i></span>
              <span><i>{homeField(heroData, "heroLine2")}</i></span>
              <span><i>{homeField(heroData, "heroLine3")}</i></span>
            </h1>
            <RichText className="lead rich-text" value={homeField(heroData, "heroLead")} />
            <p className="sub-highlight hero-tagline">{homeField(heroData, "heroTagline")}</p>
            <div className="hero-actions">
              <BookNowButton className="btn btn-gold hero-phone-hide" />
              <a className="btn btn-line" href="/get-a-quote/">Get A Free Quote</a>
              <a className="btn btn-line hero-phone-hide" href={PHONE_HREF}>Call Now</a>
            </div>
          </div>

          <div className="quote quote-moovs" id="quote">
            <h2>Book in a minute</h2>
            <MoovsFrame />
          </div>
        </div>
      </div>

      <Marquee className="hero-marquee" page={heroData} />
    </section>
  );
}
