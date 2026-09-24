import { slug as toSlug, IMG, PHOTOS } from "./data.js";

// Priority location pages only — see /service-areas/ for the wider coverage list shown as text.
// Each entry gets a real, differentiated page: landmarks, nearest highway, drive time to each
// priority airport, and its own photo. Do not add suburbs here without real local detail (PDF guidance).

export const downtown = [
  { name: "The Loop", landmarks: ["Willis Tower", "Millennium Park"], highway: "I-90/94 (Kennedy/Dan Ryan)", drive: { ORD: "30–40 min", MDW: "20–30 min", PWK: "35–50 min" }, img: PHOTOS.skyline[0] },
  { name: "River North", landmarks: ["The Merchandise Mart", "Chicago Riverwalk"], highway: "I-90/94", drive: { ORD: "25–35 min", MDW: "20–30 min", PWK: "30–45 min" }, img: PHOTOS.loop[0] },
  { name: "Gold Coast", landmarks: ["Oak Street Beach", "Rush Street"], highway: "Lake Shore Drive / I-90/94", drive: { ORD: "30–40 min", MDW: "25–35 min", PWK: "35–50 min" }, img: PHOTOS.lakeMichigan[0] },
  { name: "Streeterville", landmarks: ["Navy Pier", "Northwestern Memorial Hospital"], highway: "Lake Shore Drive", drive: { ORD: "30–40 min", MDW: "25–35 min", PWK: "35–50 min" }, img: PHOTOS.navyPier[0] },
  { name: "West Loop / Fulton Market", landmarks: ["Fulton Market restaurant row", "Google's Chicago office"], highway: "I-90/94", drive: { ORD: "25–35 min", MDW: "20–30 min", PWK: "30–45 min" }, img: PHOTOS.skyline[1] },
  { name: "Lincoln Park", landmarks: ["Lincoln Park Zoo", "DePaul University"], highway: "Lake Shore Drive / I-94", drive: { ORD: "30–40 min", MDW: "30–40 min", PWK: "35–50 min" }, img: PHOTOS.loop[1] },
  { name: "Magnificent Mile", landmarks: ["Water Tower Place", "Tribune Tower"], highway: "Lake Shore Drive / I-90/94", drive: { ORD: "30–40 min", MDW: "25–35 min", PWK: "35–50 min" }, img: PHOTOS.skyline[2] },
].map(withCluster("Downtown"));

export const northwestPriority = [
  { name: "Rosemont", landmarks: ["Allstate Arena", "Donald E. Stephens Convention Center"], highway: "I-90", drive: { ORD: "10–15 min", MDW: "25–35 min", PWK: "20–30 min" }, img: PHOTOS.convention[0] },
  { name: "Schaumburg", landmarks: ["Woodfield Mall", "Schaumburg Convention Center"], highway: "I-90", drive: { ORD: "15–20 min", MDW: "35–45 min", PWK: "20–30 min" }, img: PHOTOS.suburbGeneric[0] },
  { name: "Arlington Heights", landmarks: ["Downtown Arlington Heights Metra district"], highway: "I-90", drive: { ORD: "15–20 min", MDW: "40–50 min", PWK: "15–25 min" }, img: PHOTOS.suburbGeneric[1] },
  { name: "Palatine", landmarks: ["Downtown Palatine Metra district"], highway: "I-90 / Route 53", drive: { ORD: "20–25 min", MDW: "40–50 min", PWK: "15–25 min" }, img: PHOTOS.suburbGeneric[2] },
  { name: "Hoffman Estates", landmarks: ["Sears Centre Arena"], highway: "I-90", drive: { ORD: "20–25 min", MDW: "40–50 min", PWK: "20–30 min" }, img: PHOTOS.stadiumGeneric[0] },
  { name: "Des Plaines", landmarks: ["Des Plaines River Trail"], highway: "I-90 / I-294", drive: { ORD: "10–15 min", MDW: "30–40 min", PWK: "15–20 min" }, img: PHOTOS.highway[0] },
].map(withCluster("Northwest suburbs"));

export const westPriority = [
  { name: "Naperville", landmarks: ["Riverwalk", "Downtown Naperville"], highway: "I-88", drive: { ORD: "35–45 min", MDW: "30–40 min", PWK: "40–50 min" }, img: PHOTOS.naperville[0] },
  { name: "Oak Brook", landmarks: ["Oakbrook Center"], highway: "I-88 / I-294", drive: { ORD: "25–35 min", MDW: "25–35 min", PWK: "30–40 min" }, img: PHOTOS.corporateOffice[0] },
  { name: "Hinsdale", landmarks: ["Downtown Hinsdale Metra district"], highway: "I-294 / I-88", drive: { ORD: "25–35 min", MDW: "25–35 min", PWK: "35–45 min" }, img: PHOTOS.naperville[1] },
  { name: "Downers Grove", landmarks: ["Downtown Downers Grove"], highway: "I-355 / I-88", drive: { ORD: "30–40 min", MDW: "25–35 min", PWK: "35–45 min" }, img: PHOTOS.corporateOffice[1] },
  { name: "Wheaton", landmarks: ["Cantigny Park"], highway: "I-355 / Route 38", drive: { ORD: "30–40 min", MDW: "35–45 min", PWK: "30–40 min" }, img: PHOTOS.naperville[2] },
  { name: "Aurora", landmarks: ["Paramount Theatre"], highway: "I-88", drive: { ORD: "40–50 min", MDW: "40–50 min", PWK: "45–55 min" }, img: PHOTOS.corporateOffice[2] },
  { name: "Lombard", landmarks: ["Lilacia Park", "Yorktown Center"], highway: "I-355 / I-88", drive: { ORD: "25–30 min", MDW: "30–40 min", PWK: "30–40 min" }, img: PHOTOS.highway[1] },
].map(withCluster("West suburbs"));

export const northShore = [
  { name: "Evanston", landmarks: ["Northwestern University"], highway: "Lake Shore Drive / I-94", drive: { ORD: "25–30 min", MDW: "35–45 min", PWK: "30–40 min" }, img: PHOTOS.evanston[0] },
  { name: "Lake Forest", landmarks: ["Downtown Lake Forest", "Lake Forest College"], highway: "I-94", drive: { ORD: "35–45 min", MDW: "50–60 min", PWK: "35–45 min" }, img: PHOTOS.lakeMichigan[1] },
  { name: "Highland Park", landmarks: ["Ravinia Festival"], highway: "I-94", drive: { ORD: "30–40 min", MDW: "45–55 min", PWK: "30–40 min" }, img: PHOTOS.evanston[1] },
  { name: "Wilmette", landmarks: ["Baha'i House of Worship"], highway: "I-94", drive: { ORD: "25–30 min", MDW: "40–50 min", PWK: "25–35 min" }, img: PHOTOS.lakeMichigan[2] },
  { name: "Winnetka", landmarks: ["Downtown Winnetka Metra district"], highway: "I-94", drive: { ORD: "30–35 min", MDW: "45–55 min", PWK: "30–40 min" }, img: PHOTOS.evanston[2] },
  { name: "Glenview", landmarks: ["The Glen Town Center"], highway: "I-94 / I-294", drive: { ORD: "15–20 min", MDW: "35–45 min", PWK: "20–30 min" }, img: PHOTOS.suburbGeneric[0] },
  { name: "Northbrook", landmarks: ["Downtown Northbrook Metra district"], highway: "I-294", drive: { ORD: "20–25 min", MDW: "40–50 min", PWK: "20–30 min" }, img: PHOTOS.suburbGeneric[1] },
].map(withCluster("North Shore"));

export const cityToCity = [
  { name: "Chicago to Milwaukee", miles: "~92 miles", drive: "~90 min via I-94", img: PHOTOS.highway[2] },
  { name: "Chicago to Madison", miles: "~148 miles", drive: "~2 hr 30 min via I-90", img: PHOTOS.highway[0] },
  { name: "Chicago to Indianapolis", miles: "~185 miles", drive: "~3 hr via I-65", img: PHOTOS.highway[1] },
  { name: "Chicago to South Bend", miles: "~93 miles", drive: "~1 hr 40 min via I-90/I-80", img: PHOTOS.skyline[3] },
  { name: "Chicago to Detroit", miles: "~283 miles", drive: "~4 hr 30 min via I-94", img: PHOTOS.skyline[0] },
].map(r => ({ ...r, slug: toSlug(r.name), href: `/service-areas/${toSlug(r.name)}/`, cluster: "City-to-city", isRoute: true }));

export const venueDetails = [
  { name: "United Center", area: "Near West Side", note: "Bulls and Blackhawks games — drop-off at Gate 3/4, pickup staged after the final horn.", img: PHOTOS.unitedCenter[0] },
  { name: "Soldier Field", area: "Near South Side, lakefront", note: "Bears games and lakefront concerts — closest open gate varies by event, chauffeur confirms day-of.", img: PHOTOS.soldierField[0] },
  { name: "Wrigley Field", area: "Wrigleyville, North Side", note: "Cubs games — Clark & Addison drop-off, narrow streets mean pickup is staged a block out.", img: PHOTOS.wrigley[0] },
  { name: "Guaranteed Rate Field", area: "Bridgeport, South Side", note: "White Sox games — Gate 5 drop-off closest to the Dan Ryan.", img: PHOTOS.stadiumGeneric[1] },
  { name: "McCormick Place", area: "Near South Side / South Loop", note: "Conventions and trade shows — entrance matched to your hall and badge type.", img: PHOTOS.convention[1] },
  { name: "Navy Pier", area: "Streeterville, lakefront", note: "Events and fireworks nights — Streeterville side streets recommended over the main pier road.", img: PHOTOS.navyPier[1] },
  { name: "Wintrust Arena", area: "South Loop, near McCormick Place", note: "DePaul basketball and concerts — shared drop-off zone with McCormick Place traffic.", img: PHOTOS.convention[2] },
  { name: "Credit Union 1 Arena", area: "Near West Side (UIC)", note: "UIC basketball and concerts — Racine Ave drop-off.", img: PHOTOS.stadiumGeneric[2] },
  { name: "Rosemont Theatre", area: "Rosemont, near O'Hare", note: "Closest venue to O'Hare — often paired with an airport pickup the same night.", img: PHOTOS.unitedCenter[1] },
  { name: "Allstate Arena", area: "Rosemont", note: "Concerts and college basketball — River Rd drop-off, easy pairing with an O'Hare pickup.", img: PHOTOS.soldierField[1] },
].map(v => ({ ...v, slug: toSlug(v.name), href: `/venues/${toSlug(v.name)}/` }));

function withCluster(cluster) {
  return (loc) => ({ ...loc, slug: toSlug(loc.name), href: `/service-areas/${toSlug(loc.name)}/`, cluster });
}

export const clusters = [
  {
    name: "Downtown", locations: downtown, img: PHOTOS.skyline[0],
    blurb: "The Loop, River North, Gold Coast, Streeterville, West Loop / Fulton Market, Lincoln Park and the Magnificent Mile — our highest-volume pickup zone, run daily for hotel guests, downtown offices and lakefront residents.",
    detail: "Downtown trips are almost always time-sensitive — a hotel guest with a flight to catch, an executive between meetings a few blocks apart, a lakefront resident heading to O'Hare before rush hour builds on Lake Shore Drive. Chauffeurs working this zone know which streets close for events, where hotel loading zones actually are, and how the one-way grid around the Loop changes the fastest route hour to hour.",
  },
  {
    name: "Northwest suburbs", locations: northwestPriority, img: PHOTOS.suburbGeneric[0],
    blurb: "Rosemont, Schaumburg, Arlington Heights, Palatine, Hoffman Estates and Des Plaines — the closest suburban corridor to O'Hare, run daily for airport and convention traffic.",
    detail: "This corridor sits right along O'Hare's front door, which makes it our fastest airport-adjacent coverage — a Rosemont pickup can reach O'Hare in ten to fifteen minutes. It's also convention and event country: the Donald E. Stephens Convention Center, Allstate Arena and Woodfield Mall all draw steady group and corporate bookings alongside the daily airport runs.",
  },
  {
    name: "West suburbs", locations: westPriority, img: PHOTOS.naperville[0],
    blurb: "Naperville, Oak Brook, Hinsdale, Downers Grove, Wheaton, Aurora and Lombard — the I-88 corporate corridor and its surrounding residential communities.",
    detail: "The I-88 corridor through Oak Brook and into Naperville carries a lot of our corporate account traffic — office parks, client visits and executives commuting between suburban headquarters and downtown. Further out in Naperville, Wheaton and Aurora, bookings lean more toward family travel, DuPage Airport transfers and weekend event trips.",
  },
  {
    name: "North Shore", locations: northShore, img: PHOTOS.evanston[0],
    blurb: "Evanston, Lake Forest, Highland Park, Wilmette, Winnetka, Glenview and Northbrook — the lakefront communities north of the city, added as a dedicated coverage zone.",
    detail: "The North Shore runs along Lake Shore Drive and I-94 through some of the region's most established residential communities, from Northwestern's Evanston campus up through Lake Forest's estates. Bookings here skew toward airport transfers, private school and university runs, and evening trips into the city for dinner or a show.",
  },
];

export const allLocations = [...downtown, ...northwestPriority, ...westPriority, ...northShore, ...cityToCity];

export const findLocation = (slug) => allLocations.find(l => l.slug === slug);
export const findVenue = (slug) => venueDetails.find(v => v.slug === slug);

export function venueImage(venue) {
  return venue.img || IMG.hero;
}

export function venueFaqs(venue) {
  return [
    { q: `Do you drop off directly at ${venue.name}?`, a: `Yes — chauffeurs know the closest legal drop-off point for ${venue.name} and confirm the exact spot day-of based on event traffic.` },
    { q: "How does pickup work after the event ends?", a: "We stage your car near the venue as the event ends rather than pre-booking a fixed time, so you're not waiting outside in the crowd." },
    { q: "Can you fit a full group or suite?", a: "Yes — a full-size SUV or Sprinter keeps a larger party together on the way in and out." },
    { q: "Do you charge more on event nights?", a: "No — the same flat-rate promise applies whether it's a Tuesday afternoon or a sold-out Saturday night." },
    { q: `How far ahead should I book for ${venue.name}?`, a: "Same-day booking usually works, but popular event nights are safer booked a day or two ahead." },
  ];
}

function avgMinutes(str) {
  const nums = (str.match(/\d+/g) || []).map(Number);
  if (!nums.length) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

// Relative bar widths (%) for the three priority airports, scaled to the
// longest of the three so the bars are meaningful per-location, not on a
// fixed absolute scale.
export function driveBars(location) {
  const entries = [
    ["O'Hare (ORD)", location.drive.ORD],
    ["Midway (MDW)", location.drive.MDW],
    ["Chicago Executive (PWK)", location.drive.PWK],
  ];
  const mins = entries.map(([, v]) => avgMinutes(v));
  const max = Math.max(...mins, 1);
  return entries.map(([label, value], i) => ({ label, value, pct: Math.max(18, Math.round((mins[i] / max) * 100)) }));
}

export function locationImage(location) {
  return location.img || IMG.areaMap;
}

export function locationFaqs(location) {
  if (location.isRoute) {
    return [
      { q: `How much does a ${location.name.toLowerCase()} trip cost?`, a: `Rates are quoted flat for the full ${location.miles} trip before you book, with round-trip and wait-and-return options — ask dispatch for a current quote.` },
      { q: "Is this a shared shuttle?", a: "No — one chauffeur and one vehicle for your group only, door to door." },
      { q: "Can the chauffeur wait and drive us back the same day?", a: "Yes — wait-and-return is available, or you can book a separate return trip." },
      { q: "Is Wi-Fi available on the drive?", a: "Yes, on this route, along with bottled water — ask dispatch to confirm for your vehicle." },
      { q: "What vehicle is best for this route?", a: "A sedan or SUV for smaller groups; a Sprinter for larger groups traveling together at one shared rate." },
    ];
  }
  return [
    { q: `Do you serve ${location.name} regularly?`, a: `Yes — ${location.name} is one of our priority ${location.cluster.toLowerCase()} pickup points, run daily via ${location.highway}.` },
    { q: `How much is a black car from ${location.name} to O'Hare?`, a: `A luxury sedan is quoted as a flat rate before you book, typically ${location.drive.ORD} away — SUVs and Sprinters are quoted at booking based on group size.` },
    { q: "Can you provide a car with a child seat here?", a: "Yes — infant, toddler and booster seats are available on request, fitted before pick-up, with the first seat free." },
    { q: "Do you offer corporate accounts for businesses here?", a: "Yes — monthly invoicing and a named dispatcher are available; see the corporate accounts page for setup." },
    { q: "How far ahead should I book from " + location.name + "?", a: "Same-day booking is usually fine; book a day ahead if you need a specific vehicle class guaranteed." },
  ];
}
