import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    default: "Jinling Steel | Stainless Steel Supplier Since 1997",
    template: "%s | Jinling Steel",
  },
  description:
    "Stainless steel coil, sheet, bar, tube, and signature finishes from Jinling Steel. Process-led finishing, film, packaging, and export support since 1997.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jinling Steel",
    url: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jinling Steel Co., Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/common/jinling-logo.png`,
  description:
    "Foshan-based stainless steel processor and exporter for coil, sheet, bar, tube, pipe, surface finishing, packing, and document-led release work since 1997.",
  foundingDate: "1997",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "No.301, 1st Block, Wenhuahui, No.223 Wenhua North Rd, Chancheng District",
    addressLocality: "Foshan",
    addressRegion: "Guangdong",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86-757-81637153",
    email: "info@jinlingsteel.com",
    contactType: "sales",
    availableLanguage: ["English", "Chinese"],
  },
  sameAs: [SITE_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
