import type { Metadata } from "next";
import type { Itinerary } from "../data/itineraries";

export const siteUrl = "https://ironyaktours.com";
export const siteName = "Iron Yak Tours & Travels";
export const defaultTitle = "Iron Yak Tours & Travels — Explore Nepal beyond the ordinary";
export const defaultDescription =
  "Breathtaking mountains, unforgettable adventures, and the warm, authentic hospitality of the Himalaya — crafted into journeys you'll never forget.";
export const defaultOgImage = "/assets/primary-orig.png";

export const organizationLd = {
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

export const websiteLd = {
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

export function buildTrekMetadata(itinerary: Itinerary): Metadata {
  const title = `${itinerary.title} — ${itinerary.duration} in Nepal`;
  const description = `${itinerary.title}: ${itinerary.duration}, ${itinerary.difficulty}, max altitude ${itinerary.maxAltitude}. Led by certified Sherpa guides. ${itinerary.eyebrowText}.`;

  return {
    title: itinerary.title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: itinerary.bgImage, width: 2100, height: 1400 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [itinerary.bgImage],
    },
  };
}
