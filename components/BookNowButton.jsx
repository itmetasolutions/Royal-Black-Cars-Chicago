"use client";

import { useBookingModal } from "./BookingProvider.jsx";

export default function BookNowButton({ className = "btn btn-gold", style, children = "Book Now" }) {
  const { openModal } = useBookingModal();
  return (
    <button type="button" className={className} style={style} onClick={openModal}>
      {children}
    </button>
  );
}
