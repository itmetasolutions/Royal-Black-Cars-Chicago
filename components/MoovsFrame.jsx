"use client";

import { useEffect, useRef, useState } from "react";

// The Moovs widget is drawn at a fixed width and scaled to whatever width
// its container leaves for it, so it never runs past the container edge.
export default function MoovsFrame({ className = "moovs-frame", iframeClassName = "hero-moovs-iframe", maxScale = 0.82 }) {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(maxScale);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const fit = () => setScale(Math.min(maxScale, el.clientWidth / 430));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [maxScale]);

  return (
    <div className={className} ref={frameRef} style={{ "--moovs-scale": scale }}>
      <iframe
        className={iframeClassName}
        src="https://customer.moovs.app/royal-black-car-chicago/iframe"
        title="Book with Royal Black Car Chicago"
        loading="lazy"
      />
    </div>
  );
}
