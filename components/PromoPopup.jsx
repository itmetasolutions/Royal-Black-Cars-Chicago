"use client";

import { useBookingModal } from "./BookingProvider.jsx";
import MoovsFrame from "./MoovsFrame.jsx";

const PROMO_CODE = "WELCOME10";

export default function PromoPopup({ onClose }) {
  const { openModal } = useBookingModal();

  const bookNow = () => {
    onClose();
    openModal();
  };

  return (
    <div className="promo-overlay" onClick={onClose}>
      <div className="promo-modal promo-modal-split" role="dialog" aria-modal="true" aria-label="10% off your first ride" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="promo-close" aria-label="Close" onClick={onClose}>&times;</button>

        <div className="promo-modal-left">
          <span className="promo-modal-badge">First ride offer</span>
          <h3>Get 10% Off Your First Ride</h3>
          <p>Book now and we&apos;ll apply your discount automatically — no code to enter at checkout.</p>
          <div className="promo-code">{PROMO_CODE}</div>
          <button type="button" className="btn btn-gold" onClick={bookNow}>Book now &amp; save</button>
          <p className="promo-fine">One-time offer for new customers. Cannot be combined with other discounts.</p>
        </div>

        <div className="promo-modal-right">
          <MoovsFrame className="promo-moovs-frame" iframeClassName="promo-moovs-iframe" maxScale={0.72} />
        </div>
      </div>
    </div>
  );
}
