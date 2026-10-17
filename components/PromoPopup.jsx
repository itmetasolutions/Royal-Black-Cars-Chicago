"use client";

import { useState } from "react";
import { useBookingModal } from "./BookingProvider.jsx";

const PROMO_CODE = "WELCOME10";

export default function PromoPopup({ onClose }) {
  const { openModal } = useBookingModal();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: POST email to your promo/newsletter API here
    setSent(true);
  };

  const bookNow = () => {
    onClose();
    openModal();
  };

  return (
    <div className="promo-overlay" onClick={onClose}>
      <div className="promo-modal" role="dialog" aria-modal="true" aria-label="10% off your first ride" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="promo-close" aria-label="Close" onClick={onClose}>&times;</button>
        <span className="promo-modal-badge">First ride offer</span>
        <h3>Get 10% Off Your First Ride</h3>

        {sent ? (
          <>
            <p>Your code is ready — use it when you book:</p>
            <div className="promo-code">{PROMO_CODE}</div>
            <button type="button" className="btn btn-gold" onClick={bookNow}>Book now &amp; save</button>
          </>
        ) : (
          <>
            <p>Enter your email and we&apos;ll send your code instantly.</p>
            <form onSubmit={submit} noValidate>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button className="btn btn-gold" type="submit">Get my code</button>
            </form>
          </>
        )}

        <p className="promo-fine">One-time offer for new customers. Cannot be combined with other discounts.</p>
      </div>
    </div>
  );
}
