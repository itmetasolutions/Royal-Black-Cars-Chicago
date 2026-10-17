"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PromoPopup from "./PromoPopup.jsx";
import { Tag } from "./icons.jsx";

const SEEN_KEY = "rbc_promo_seen";

export default function PromoBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let t;
    try {
      if (!sessionStorage.getItem(SEEN_KEY)) {
        t = setTimeout(() => {
          setOpen(true);
          try { sessionStorage.setItem(SEEN_KEY, "1"); } catch {}
        }, 1500);
      }
    } catch {}
    return () => clearTimeout(t);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <button type="button" className="promo-strip" onClick={() => setOpen(true)}>
        <span className="promo-strip-inner">
          <Tag className="promo-strip-icon" />
          <span className="promo-strip-text">
            <strong>10% OFF</strong> your first ride — code <span className="promo-code-pill">WELCOME10</span>
          </span>
          <span className="promo-strip-arrow" aria-hidden="true">&rarr;</span>
        </span>
      </button>
      {open && <PromoPopup onClose={() => setOpen(false)} />}
    </>
  );
}
