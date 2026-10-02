import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import BookingProvider from "@/components/BookingProvider.jsx";
import { localBusiness } from "@/lib/schema.js";

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
        {/* Applies a saved theme choice before first paint, so there's no flash of the wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        <Script id="moovs-operator" strategy="afterInteractive">
          {`window["moovsAPI"] = window["moovsAPI"] || [];
            window["moovsAPI"].push(["operator", "bda0c52a-b900-11f1-b674-e34de33d718a"]);
            (function(m, oo, v, s) {
              s = m.createElement(oo);
              s.src = v;
              s.async = 1;
              m.head.appendChild(s);
            })(document, "script", "https://static.moovs.app");`}
        </Script>
        <BookingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
