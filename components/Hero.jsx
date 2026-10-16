"use client";

import { useEffect, useRef, useState } from "react";
import { IMG, PHONE_HREF } from "../lib/data.js";
import { homeField } from "../lib/homeDefaults.js";
import KeywordText, { parseKeywordRules } from "./KeywordText.jsx";
import BookNowButton from "./BookNowButton.jsx";
import Marquee from "./Marquee.jsx";

// Looping background clip for the hero. The video's own poster is the still,
// so there is only ever one element painting it — no separate <img> racing
// the video to paint first. The <img> fallback below only renders for
// anyone who asked for reduced motion, where the video itself is hidden.
const HERO_VIDEO = "/video/hero-motion.mp4";

export default function Hero({ heroData }) {
  // The booking widget is drawn at a fixed width and scaled to whatever width
  // the phone leaves for it, so it never runs past the screen edge.
  const moovsFrame = useRef(null);
  const [moovsScale, setMoovsScale] = useState(0.8);
  useEffect(() => {
    const el = moovsFrame.current;
    if (!el) return;
    const fit = () => setMoovsScale(Math.min(0.82, el.clientWidth / 430));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
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
              preload="auto"
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
            <p className="lead"><KeywordText text={homeField(heroData, "heroLead")} rules={parseKeywordRules(homeField(heroData, "keywordLinks"))} /></p>
            <p className="sub-highlight hero-tagline">{homeField(heroData, "heroTagline")}</p>
            <div className="hero-actions">
              <BookNowButton className="btn btn-gold hero-phone-hide" />
              <a className="btn btn-line" href="/get-a-quote/">Get A Free Quote</a>
              <a className="btn btn-line hero-phone-hide" href={PHONE_HREF}>Call Now</a>
            </div>
          </div>

          <div className="quote quote-moovs" id="quote">
            <h2>Book in a minute</h2>
            <div className="moovs-frame" ref={moovsFrame} style={{ "--moovs-scale": moovsScale }}>
              <iframe
                className="hero-moovs-iframe"
                src="https://customer.moovs.app/royal-black-car-chicago/iframe"
                title="Book with Royal Black Cars Chicago"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <Marquee className="hero-marquee" page={heroData} />
    </section>
  );
}
