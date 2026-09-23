import { IMG } from "./data.js";

export const posts = [
  {
    slug: "how-much-does-a-black-car-to-ohare-cost",
    title: "How Much Does a Black Car to O'Hare Cost?",
    description: "A breakdown of flat-rate black car pricing to O'Hare from downtown Chicago and the suburbs, and what's actually included.",
    date: "2026-09-01",
    img: IMG.airport,
    body: [
      "The short answer: a luxury sedan runs a flat $95 from the Loop, River North and Streeterville, tolls, parking, meet-and-greet and gratuity included. SUVs and Sprinters cost more and are quoted at booking based on group size. From the suburbs, the rate scales with distance — see the rates page for a full breakdown by airport.",
      "What that flat rate protects you from is the part that actually costs money on a bad day: a rideshare surge multiplier during a weather delay, a driver who cancels near your flight time, or a meter that keeps running while you're stuck in Kennedy Expressway traffic. A black car quote is fixed the moment you confirm it.",
      "It's also worth knowing what's not included by default: extra stops, a wait beyond the free 60-minute window after landing, and any vehicle upgrade beyond what you booked. All of those are quoted upfront too, so there's no surprise on the final charge.",
      "For a flight that's delayed or lands early, flight tracking means your pickup time moves automatically — you don't need to call and rebook.",
    ],
  },
  {
    slug: "black-car-vs-uber-for-chicago-airport-trips",
    title: "Black Car vs Uber for Chicago Airport Trips",
    description: "What actually differs between a rideshare and a black car service for an O'Hare or Midway trip — price, reliability and what happens when a flight changes.",
    date: "2026-09-08",
    img: IMG.hero,
    body: [
      "For a short, predictable trip with flexible timing, a rideshare is often the cheaper choice. Airport trips are a different problem: timing isn't flexible, and the moment something goes wrong — a delayed flight, a surge event, a driver cancellation five minutes before pickup — the tradeoffs shift.",
      "A rideshare fare to O'Hare can double or triple during surge pricing, particularly around weather delays, when the most people need a ride at once. A black car's flat rate doesn't move, whatever the weather is doing at the airport that day.",
      "The other difference is who's tracking your flight. A rideshare driver is booked for a time, not a flight — if you land two hours early or ninety minutes late, you're rebooking. A black car service tracking your flight number adjusts the pickup automatically, so the car is there when you actually land, not when a schedule assumed you would.",
      "For a single short trip with no luggage and a flexible schedule, either works. For an actual flight — where being met on time matters and a surge fare is a real risk — a flat-rate black car removes both variables.",
    ],
  },
  {
    slug: "flying-private-into-pwk-ground-transfer-guide",
    title: "Flying Private Into PWK: Ground Transfer Guide",
    description: "What to expect for ground transportation at Chicago Executive Airport (PWK) — FBOs, ramp coordination and timing for private and charter arrivals.",
    date: "2026-09-15",
    img: IMG.hero,
    body: [
      "Chicago Executive Airport (PWK) in Wheeling is the region's busiest general aviation field for business travel into the Chicago area, roughly 30–50 minutes from downtown depending on traffic. Two FBOs handle most private and charter traffic: Signature Flight Support and Atlantic Aviation.",
      "Ground transportation for a private arrival works differently than a commercial flight. Instead of a scheduled pickup time, transfers are coordinated to your tail number — the car is cleared with the FBO in advance and waiting at the ramp when you land, not circling a terminal curb.",
      "If your schedule shifts — a weather hold, an earlier departure from your origin — the car adjusts with you, since it's tracking the flight rather than a fixed booking time.",
      "For principals who prefer not to be met with a visible name board, an unbranded vehicle and a chauffeur briefed on the specifics in advance can be arranged — just mention it when you book.",
    ],
  },
];

export const findPost = (slug) => posts.find((p) => p.slug === slug);
