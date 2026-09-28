import { allLocations } from "../lib/locations.js";
import { getAllTemplatePages, getPublishedBlogPosts } from "../lib/cms.js";

const base = "https://www.royalblackcarschicago.com";

export const dynamic = "force-dynamic";

const staticPaths = [
  "/", "/services/", "/airports/", "/fleet/", "/service-areas/", "/venues/",
  "/corporate-accounts/", "/rates/", "/about/", "/faq/", "/contact/", "/blog/",
  "/terms/", "/privacy/", "/get-a-quote/",
];

export default async function sitemap() {
  const [services, airports, fleet, venues, posts] = await Promise.all([
    getAllTemplatePages("service"),
    getAllTemplatePages("airport"),
    getAllTemplatePages("fleet"),
    getAllTemplatePages("venue"),
    getPublishedBlogPosts(),
  ]);
  const paths = [
    ...staticPaths,
    ...services.map((s) => s.href),
    ...airports.map((a) => a.href),
    ...fleet.map((f) => f.href),
    ...allLocations.map((l) => l.href),
    ...venues.map((v) => v.href),
    ...posts.map((p) => `/blog/${p.slug}/`),
  ];
  return paths.map((p) => ({ url: base + p, lastModified: new Date() }));
}
