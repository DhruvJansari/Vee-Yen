// src/app/layout.tsx

import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { getBaseUrl } from "@/lib/getBaseUrl";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default:
      "Vee Yen Traders | Scrap Metal Dealers in Ahmedabad | Metal Recycling Company",
    template: "%s | Vee Yen Traders",
  },

  description:
    "Vee Yen Traders is a leading scrap metal trading and industrial metal recycling company providing bulk scrap buying, metal processing, and sustainable waste management solutions across India.",

  keywords: [
    "scrap metal trading company",
    "industrial metal recycling company",
    "scrap metal buyers India",
    "industrial scrap collection services",
    "bulk scrap trading company",
    "metal waste management solutions",
  ],

  openGraph: {
    title:
      "Vee Yen Traders | Scrap Metal Dealers in Ahmedabad",
    description:
      "Trusted scrap metal trading and recycling company in Ahmedabad providing industrial scrap collection and sustainable recycling solutions.",
    url: "/",
    siteName: "Vee Yen Traders",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "Vee Yen Traders - Scrap Metal Recycling Company in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vee Yen Traders | Scrap Metal Dealers in Ahmedabad",
    description:
      "Leading scrap metal trading and recycling company in Ahmedabad offering industrial scrap collection and sustainable waste solutions.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">

        {/* Structured Data - Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Vee Yen Traders",
              image: `${baseUrl}/og-image.jpg`,
              "@id": baseUrl,
              url: baseUrl,
              telephone: "+91 9876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot No. 21, Industrial Area",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "380001",
                addressCountry: "IN",
              },
              areaServed: "India",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.linkedin.com/",
                "https://twitter.com/"
              ],
            }),
          }}
        />

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}