"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, slide = false, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return setInView(true);
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), io.disconnect()),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const cls = ["rv", slide ? "x" : "", delay ? `d${delay}` : "", inView ? "in" : "", className].filter(Boolean).join(" ");
  return <Tag ref={ref} className={cls} {...rest}>{children}</Tag>;
}
