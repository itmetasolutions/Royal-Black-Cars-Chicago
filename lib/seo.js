const SITE = "https://www.royalblackcarchicago.com";

export function pageMeta({ title, description, path, image }) {
  const url = path === "/" ? "/" : path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

export const SITE_URL = SITE;
