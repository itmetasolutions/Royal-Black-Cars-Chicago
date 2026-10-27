import { PHONE, EMAIL } from "./data.js";
import { stripHtml } from "./richtext.js";

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/TaxiService",
  name: "Royal Black Car Chicago",
  url: "https://www.royalblackcarchicago.com/",
  telephone: PHONE,
  email: EMAIL,
  priceRange: "$$$",
  // No public street address to publish yet — city/region only until one
  // exists, rather than a placeholder that would misrepresent the business.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00", closes: "23:59",
  }],
  areaServed: ["Chicago","Schaumburg","Naperville","Oak Brook","Arlington Heights"]
    .map(name => ({ "@type": "City", name })),
  // aggregateRating: add once real Google reviews exist — do not publish invented ratings
};

export function serviceSchema({ name, description, url, areaServed }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: { "@type": "LocalBusiness", name: localBusiness.name, telephone: localBusiness.telephone, url: localBusiness.url },
    areaServed: (areaServed || ["Chicago"]).map(name => ({ "@type": "City", name })),
  };
}

export function articleSchema({ title, description, image, datePublished, dateModified, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image ? [image] : undefined,
    datePublished: new Date(datePublished).toISOString(),
    dateModified: new Date(dateModified || datePublished).toISOString(),
    url,
    author: { "@type": "Organization", name: localBusiness.name },
    publisher: { "@type": "Organization", name: localBusiness.name, url: localBusiness.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `https://www.royalblackcarchicago.com${it.href}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      // f.a may be rich-text HTML; search engines want plain text here.
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) || f.a },
    })),
  };
}
