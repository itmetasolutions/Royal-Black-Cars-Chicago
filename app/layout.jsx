import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import BookingProvider from "@/components/BookingProvider.jsx";
import PromoBar from "@/components/PromoBar.jsx";
import { localBusiness } from "@/lib/schema.js";
import { getSiteSettings } from "@/lib/settings.js";

export async function generateMetadata() {
  const s = await getSiteSettings();
  return {
    metadataBase: new URL("https://www.royalblackcarchicago.com"),
    title: s.site_name,
    description: s.tagline,
    alternates: { canonical: "/" },
    icons: { icon: s.favicon_url, shortcut: s.favicon_url },
    applicationName: s.site_name,
    openGraph: {
      title: s.site_name,
      description: s.tagline,
      siteName: s.site_name,
      type: "website",
      url: "/",
    },
  };
}

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings();
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
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CMKHLMH78W" strategy="afterInteractive" />
        <Script id="ga-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CMKHLMH78W');`}
        </Script>
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
          <PromoBar />
          <Header logoUrl={settings.logo_url} logoWidth={settings.logo_width} logoWidthMobile={settings.logo_width_mobile} siteName={settings.site_name} />
          <main>{children}</main>
          <Footer logoUrl={settings.logo_url} logoWidth={settings.logo_width} logoWidthMobile={settings.logo_width_mobile} siteName={settings.site_name} />
        </BookingProvider>
      </body>
    </html>
  );
}
