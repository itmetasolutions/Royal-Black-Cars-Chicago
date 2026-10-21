"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Shared scroll-rail mechanics behind the home fleet slider: snap-scroll
// tracking, prev/next buttons, pagination dots, keyboard nav and a
// pause-on-hover auto-advance. `slideSelector` is the CSS class of one card,
// used to measure the step width.
export default function useSliderRail({ slideSelector, auto = true, intervalMs = 3800 } = {}) {
  const railRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = () => {
    const card = railRef.current?.querySelector(slideSelector);
    return card ? card.getBoundingClientRect().width + 20 : 340;
  };

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setPage(Math.round(el.scrollLeft / step()));
    setPages(Math.max(1, Math.ceil((el.scrollWidth - el.clientWidth) / step()) + 1));
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollBy = (dir) => railRef.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
  const goTo = (i) => railRef.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  const onKey = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); scrollBy(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollBy(-1); }
  };

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let paused = false;
    const el = railRef.current;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el?.addEventListener("pointerenter", pause);
    el?.addEventListener("pointerleave", resume);
    el?.addEventListener("focusin", pause);
    el?.addEventListener("focusout", resume);
    const id = setInterval(() => {
      if (paused || !el || document.hidden) return;
      const atEndNow = el.scrollLeft >= el.scrollWidth - el.clientWidth - 8;
      el.scrollTo({ left: atEndNow ? 0 : el.scrollLeft + step(), behavior: "smooth" });
    }, intervalMs);
    return () => {
      clearInterval(id);
      el?.removeEventListener("pointerenter", pause);
      el?.removeEventListener("pointerleave", resume);
      el?.removeEventListener("focusin", pause);
      el?.removeEventListener("focusout", resume);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, intervalMs]);

  return { railRef, page, pages, atStart, atEnd, scrollBy, goTo, onKey, sync };
}
