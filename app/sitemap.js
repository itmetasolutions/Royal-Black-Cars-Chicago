import { getAllTemplatePages, getPublishedBlogPosts } from "../lib/cms.js";
import { toLocations } from "../lib/areas.js";

const base = "https://www.royalblackcarschicago.com";

export const dynamic = "force-dynamic";

const staticPaths = [
  "/", "/services/", "/airports/", "/fleet/", "/service-areas/", "/venues/",
  "/corporate-accounts/", "/rates/", "/about/", "/faq/", "/contact/", "/blog/",
  "/terms/", "/privacy/", "/get-a-quote/",
];

export default async function sitemap() {
  const [services, airports, fleet, areas, venues, posts] = await Promise.all([
    getAllTemplatePages("service"),
    getAllTemplatePages("airport"),
    getAllTemplatePages("fleet"),
    getAllTemplatePages("area"),
    getAllTemplatePages("venue"),
    getPublishedBlogPosts(),
  ]);
  const paths = [
    ...staticPaths,
    ...services.map((s) => s.href),
    ...airports.map((a) => a.href),
    ...fleet.map((f) => f.href),
    ...toLocations(areas).map((l) => l.href),
    ...venues.map((v) => v.href),
    ...posts.map((p) => `/blog/${p.slug}/`),
  ];
  return paths.map((p) => ({ url: base + p, lastModified: new Date() }));
}
