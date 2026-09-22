import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.royalblackcarschicago.com"),
  title: "Chicago Black Car Service | O'Hare & Midway Chauffeur | Royal Black Cars",
  description:
    "Flat-rate Chicago black car service. Sedans, SUVs and Sprinters for O'Hare, Midway, corporate travel and events. Flights tracked, chauffeurs vetted, price fixed before you ride.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Chicago Black Car Service | Royal Black Cars",
    description: "Flat-rate black car service across Chicago and the suburbs.",
    type: "website",
    url: "/",
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
