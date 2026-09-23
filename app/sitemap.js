import { serviceDetails, airportDetails, fleetPages } from "../lib/data.js";
import { allLocations, venueDetails } from "../lib/locations.js";
import { posts } from "../lib/blog.js";

const base = "https://www.royalblackcarschicago.com";

const staticPaths = [
  "/", "/services/", "/airports/", "/fleet/", "/service-areas/", "/venues/",
  "/corporate-accounts/", "/rates/", "/about/", "/faq/", "/contact/", "/blog/",
  "/terms/", "/privacy/",
];

export default function sitemap() {
  const paths = [
    ...staticPaths,
    ...serviceDetails.map((s) => s.href),
    ...airportDetails.map((a) => a.href),
    ...fleetPages.map((f) => f.href),
    ...allLocations.map((l) => l.href),
    ...venueDetails.map((v) => v.href),
    ...posts.map((p) => `/blog/${p.slug}/`),
  ];
  return paths.map((p) => ({ url: base + p, lastModified: new Date() }));
}
