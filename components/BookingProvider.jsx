"use client";

import { createContext, useCallback, useContext, useState } from "react";

const BookingContext = createContext(null);

export function useBookingModal() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingProvider");
  return ctx;
}

export default function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <BookingContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      {open && (
        <div className="booking-modal-overlay" onClick={closeModal}>
          <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
            <button className="booking-modal-close" aria-label="Close" onClick={closeModal}>&times;</button>
            <iframe
              src="https://customer.moovs.app/royal-black-car-chicago/iframe"
              title="Book with Royal Black Car Chicago"
              className="booking-modal-iframe"
            />
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
