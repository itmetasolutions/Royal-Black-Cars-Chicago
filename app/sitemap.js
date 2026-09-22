const base = "https://www.royalblackcarschicago.com";
const paths = [
  "/", "/services/", "/airports/", "/fleet/", "/service-areas/", "/venues/",
  "/corporate-accounts/", "/rates/", "/about/", "/reviews/", "/faq/", "/contact/",
  "/airport-car-service/", "/black-car-service/", "/corporate-car-service/",
  "/hourly-chauffeur/", "/private-jet-transfers/", "/wedding-car-service/",
  "/birthday-party-transportation/", "/medical-appointment-transportation/",
  "/airports/ohare/", "/airports/midway/", "/airports/chicago-executive-pwk/",
];
export default function sitemap() {
  return paths.map(p => ({ url: base + p, lastModified: new Date() }));
}
