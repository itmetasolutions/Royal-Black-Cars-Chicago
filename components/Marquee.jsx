import { Check } from "./icons.jsx";

const items = [
  [<Check key="c0" />, "Flat rate agreed before you ride"],
  [<Check key="c" />, "Licensed & insured in Illinois"],
  [<Check key="c2" />, "Every flight tracked"],
  [<Check key="c3" />, "Dispatch answers 24/7"],
  [<Check key="c4" />, "NLA member operator"],
  [<Check key="c5" />, "No surge pricing, ever"],
];

export default function Marquee({ top = false }) {
  return (
    <div className={`marquee${top ? " marquee-top" : ""}`} aria-label="Service highlights">
      <div className="mq-track">
        {[0, 1].map(dup => items.map(([icon, label], i) => (
          <span key={`${dup}-${i}`}>{icon}{label}</span>
        )))}
      </div>
    </div>
  );
}
