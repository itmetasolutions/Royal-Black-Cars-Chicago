import { Check } from "./icons.jsx";
import { homeField } from "../lib/homeDefaults.js";

export default function Marquee({ className = "", page }) {
  const items = homeField(page, "marqueeItems");

  return (
    <div className={`marquee${className ? ` ${className}` : ""}`} aria-label="Service highlights">
      <div className="mq-track">
        {[0, 1].map((dup) => items.map((label, i) => (
          <span key={`${dup}-${i}`}><Check />{label}</span>
        )))}
      </div>
    </div>
  );
}
