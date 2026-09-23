import { slug as toSlug } from "./data.js";

// Priority location pages only — see /service-areas/ for the wider coverage list shown as text.
// Each entry gets a real, differentiated page: landmarks, nearest highway, and drive time to
// each priority airport. Do not add suburbs here without real local detail (PDF guidance).

export const downtown = [
  { name: "The Loop", landmarks: ["Willis Tower", "Millennium Park"], highway: "I-90/94 (Kennedy/Dan Ryan)", drive: { ORD: "30–40 min", MDW: "20–30 min", PWK: "35–50 min" } },
  { name: "River North", landmarks: ["The Merchandise Mart", "Chicago Riverwalk"], highway: "I-90/94", drive: { ORD: "25–35 min", MDW: "20–30 min", PWK: "30–45 min" } },
  { name: "Gold Coast", landmarks: ["Oak Street Beach", "Rush Street"], highway: "Lake Shore Drive / I-90/94", drive: { ORD: "30–40 min", MDW: "25–35 min", PWK: "35–50 min" } },
  { name: "Streeterville", landmarks: ["Navy Pier", "Northwestern Memorial Hospital"], highway: "Lake Shore Drive", drive: { ORD: "30–40 min", MDW: "25–35 min", PWK: "35–50 min" } },
  { name: "West Loop / Fulton Market", landmarks: ["Fulton Market restaurant row", "Google's Chicago office"], highway: "I-90/94", drive: { ORD: "25–35 min", MDW: "20–30 min", PWK: "30–45 min" } },
  { name: "Lincoln Park", landmarks: ["Lincoln Park Zoo", "DePaul University"], highway: "Lake Shore Drive / I-94", drive: { ORD: "30–40 min", MDW: "30–40 min", PWK: "35–50 min" } },
  { name: "Magnificent Mile", landmarks: ["Water Tower Place", "Tribune Tower"], highway: "Lake Shore Drive / I-90/94", drive: { ORD: "30–40 min", MDW: "25–35 min", PWK: "35–50 min" } },
].map(withCluster("Downtown"));

export const northwestPriority = [
  { name: "Rosemont", landmarks: ["Allstate Arena", "Donald E. Stephens Convention Center"], highway: "I-90", drive: { ORD: "10–15 min", MDW: "25–35 min", PWK: "20–30 min" } },
  { name: "Schaumburg", landmarks: ["Woodfield Mall", "Schaumburg Convention Center"], highway: "I-90", drive: { ORD: "15–20 min", MDW: "35–45 min", PWK: "20–30 min" } },
  { name: "Arlington Heights", landmarks: ["Downtown Arlington Heights Metra district"], highway: "I-90", drive: { ORD: "15–20 min", MDW: "40–50 min", PWK: "15–25 min" } },
  { name: "Palatine", landmarks: ["Downtown Palatine Metra district"], highway: "I-90 / Route 53", drive: { ORD: "20–25 min", MDW: "40–50 min", PWK: "15–25 min" } },
  { name: "Hoffman Estates", landmarks: ["Sears Centre Arena"], highway: "I-90", drive: { ORD: "20–25 min", MDW: "40–50 min", PWK: "20–30 min" } },
  { name: "Des Plaines", landmarks: ["Des Plaines River Trail"], highway: "I-90 / I-294", drive: { ORD: "10–15 min", MDW: "30–40 min", PWK: "15–20 min" } },
].map(withCluster("Northwest suburbs"));

export const westPriority = [
  { name: "Naperville", landmarks: ["Riverwalk", "Downtown Naperville"], highway: "I-88", drive: { ORD: "35–45 min", MDW: "30–40 min", PWK: "40–50 min" } },
  { name: "Oak Brook", landmarks: ["Oakbrook Center"], highway: "I-88 / I-294", drive: { ORD: "25–35 min", MDW: "25–35 min", PWK: "30–40 min" } },
  { name: "Hinsdale", landmarks: ["Downtown Hinsdale Metra district"], highway: "I-294 / I-88", drive: { ORD: "25–35 min", MDW: "25–35 min", PWK: "35–45 min" } },
  { name: "Downers Grove", landmarks: ["Downtown Downers Grove"], highway: "I-355 / I-88", drive: { ORD: "30–40 min", MDW: "25–35 min", PWK: "35–45 min" } },
  { name: "Wheaton", landmarks: ["Cantigny Park"], highway: "I-355 / Route 38", drive: { ORD: "30–40 min", MDW: "35–45 min", PWK: "30–40 min" } },
  { name: "Aurora", landmarks: ["Paramount Theatre"], highway: "I-88", drive: { ORD: "40–50 min", MDW: "40–50 min", PWK: "45–55 min" } },
  { name: "Lombard", landmarks: ["Lilacia Park", "Yorktown Center"], highway: "I-355 / I-88", drive: { ORD: "25–30 min", MDW: "30–40 min", PWK: "30–40 min" } },
].map(withCluster("West suburbs"));

export const northShore = [
  { name: "Evanston", landmarks: ["Northwestern University"], highway: "Lake Shore Drive / I-94", drive: { ORD: "25–30 min", MDW: "35–45 min", PWK: "30–40 min" } },
  { name: "Lake Forest", landmarks: ["Downtown Lake Forest", "Lake Forest College"], highway: "I-94", drive: { ORD: "35–45 min", MDW: "50–60 min", PWK: "35–45 min" } },
  { name: "Highland Park", landmarks: ["Ravinia Festival"], highway: "I-94", drive: { ORD: "30–40 min", MDW: "45–55 min", PWK: "30–40 min" } },
  { name: "Wilmette", landmarks: ["Baha'i House of Worship"], highway: "I-94", drive: { ORD: "25–30 min", MDW: "40–50 min", PWK: "25–35 min" } },
  { name: "Winnetka", landmarks: ["Downtown Winnetka Metra district"], highway: "I-94", drive: { ORD: "30–35 min", MDW: "45–55 min", PWK: "30–40 min" } },
  { name: "Glenview", landmarks: ["The Glen Town Center"], highway: "I-94 / I-294", drive: { ORD: "15–20 min", MDW: "35–45 min", PWK: "20–30 min" } },
  { name: "Northbrook", landmarks: ["Downtown Northbrook Metra district"], highway: "I-294", drive: { ORD: "20–25 min", MDW: "40–50 min", PWK: "20–30 min" } },
].map(withCluster("North Shore"));

export const cityToCity = [
  { name: "Chicago to Milwaukee", miles: "~92 miles", drive: "~90 min via I-94" },
  { name: "Chicago to Madison", miles: "~148 miles", drive: "~2 hr 30 min via I-90" },
  { name: "Chicago to Indianapolis", miles: "~185 miles", drive: "~3 hr via I-65" },
  { name: "Chicago to South Bend", miles: "~93 miles", drive: "~1 hr 40 min via I-90/I-80" },
  { name: "Chicago to Detroit", miles: "~283 miles", drive: "~4 hr 30 min via I-94" },
].map(r => ({ ...r, slug: toSlug(r.name), href: `/service-areas/${toSlug(r.name)}/`, cluster: "City-to-city", isRoute: true }));

export const venueDetails = [
  { name: "United Center", area: "Near West Side", note: "Bulls and Blackhawks games — drop-off at Gate 3/4, pickup staged after the final horn." },
  { name: "Soldier Field", area: "Near South Side, lakefront", note: "Bears games and lakefront concerts — closest open gate varies by event, chauffeur confirms day-of." },
  { name: "Wrigley Field", area: "Wrigleyville, North Side", note: "Cubs games — Clark & Addison drop-off, narrow streets mean pickup is staged a block out." },
  { name: "Guaranteed Rate Field", area: "Bridgeport, South Side", note: "White Sox games — Gate 5 drop-off closest to the Dan Ryan." },
  { name: "McCormick Place", area: "Near South Side / South Loop", note: "Conventions and trade shows — entrance matched to your hall and badge type." },
  { name: "Navy Pier", area: "Streeterville, lakefront", note: "Events and fireworks nights — Streeterville side streets recommended over the main pier road." },
  { name: "Wintrust Arena", area: "South Loop, near McCormick Place", note: "DePaul basketball and concerts — shared drop-off zone with McCormick Place traffic." },
  { name: "Credit Union 1 Arena", area: "Near West Side (UIC)", note: "UIC basketball and concerts — Racine Ave drop-off." },
  { name: "Rosemont Theatre", area: "Rosemont, near O'Hare", note: "Closest venue to O'Hare — often paired with an airport pickup the same night." },
  { name: "Allstate Arena", area: "Rosemont", note: "Concerts and college basketball — River Rd drop-off, easy pairing with an O'Hare pickup." },
].map(v => ({ ...v, slug: toSlug(v.name), href: `/venues/${toSlug(v.name)}/` }));

function withCluster(cluster) {
  return (loc) => ({ ...loc, slug: toSlug(loc.name), href: `/service-areas/${toSlug(loc.name)}/`, cluster });
}

export const clusters = [
  { name: "Downtown", locations: downtown },
  { name: "Northwest suburbs", locations: northwestPriority },
  { name: "West suburbs", locations: westPriority },
  { name: "North Shore", locations: northShore },
];

export const allLocations = [...downtown, ...northwestPriority, ...westPriority, ...northShore, ...cityToCity];

export const findLocation = (slug) => allLocations.find(l => l.slug === slug);
export const findVenue = (slug) => venueDetails.find(v => v.slug === slug);
