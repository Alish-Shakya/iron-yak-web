import type { Metadata } from "next";
import "./globals.css";

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const siteUrl = "https://ironyaktours.com";
const siteName = "Iron Yak Tours & Travels";
const defaultTitle = "Iron Yak Tours & Travels — Explore Nepal beyond the ordinary";
const defaultDescription =
  "Breathtaking mountains, unforgettable adventures, and the warm, authentic hospitality of the Himalaya — crafted into journeys you'll never forget.";
const defaultOgImage = "/assets/primary-orig.png";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/assets/IronYak.svg`,
  description: defaultDescription,
  foundingDate: "2011",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thamel, Ward 26",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+977-1-4700812",
      contactType: "customer service",
    },
  ],
  sameAs: ["https://instagram.com/ironyaktours", "https://facebook.com/ironyaktours"],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/destinations?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | Iron Yak Tours & Travels`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: "/assets/IronYak.svg",
    apple: "/assets/IronYak.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <div
          id="iy-root"
          className="flex min-h-screen flex-col overflow-x-hidden bg-[#ffffff] font-['Inter',sans-serif] text-[#3A3A3C]"
        >
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
