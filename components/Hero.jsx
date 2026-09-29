"use client";

import { useEffect, useState } from "react";
import { IMG, PHONE_HREF } from "../lib/data.js";
import BookNowButton from "./BookNowButton.jsx";
import Marquee from "./Marquee.jsx";

export default function Hero({ heroData }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const heroImg = heroData?.heroImg || IMG.hero;

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        {reducedMotion ? (
          <img className="photo" src={heroImg} alt="" fetchPriority="high" style={{ zIndex: 1 }} />
        ) : (
          <video
            className="photo"
            src="/video/hero-motion.mp4"
            poster={heroImg}
            autoPlay
            muted
            loop
            playsInline
            style={{ zIndex: 1 }}
          />
        )}
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="wrap hero-in">
        <div className="hero-grid">
          <div>
            <h1>
              <span><i>{heroData?.heroLine1 || "Chicago's black car"}</i></span>
              <span><i>{heroData?.heroLine2 || "service, priced"}</i></span>
              <span><i>{heroData?.heroLine3 || "before you ride."}</i></span>
            </h1>
            <p className="lead">{heroData?.heroLead || "Vetted chauffeurs, late-model sedans and SUVs, flights tracked in real time. One flat rate agreed up front — no surge, no surprises."}</p>
            <div className="hero-actions">
              <BookNowButton className="btn btn-gold" />
              <a className="btn btn-line" href="/get-a-quote/">Get A Free Quote</a>
              <a className="btn btn-line" href={PHONE_HREF}>Call Now</a>
            </div>
          </div>

          <div className="quote quote-moovs" id="quote">
            <h2>Book in a minute</h2>
            <iframe
              className="hero-moovs-iframe"
              src="https://customer.moovs.app/royal-black-car-chicago/iframe"
              title="Book with Royal Black Cars Chicago"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Marquee className="hero-marquee" />
    </section>
  );
}
