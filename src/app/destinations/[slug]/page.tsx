"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { OverviewStats } from "@/components/destinations/OverviewStats";
import { ItineraryContent } from "@/components/destinations/ItineraryContent";
import { itineraries } from "@/data/itineraries";

export default function DestinationDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const itinerary = itineraries.find((it) => it.slug === slug);

  if (!itinerary) {
    notFound();
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ironyaktours.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Destinations",
        item: "https://ironyaktours.com/destinations",
      },
      { "@type": "ListItem", position: 3, name: itinerary.title },
    ],
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: itinerary.title,
    description: `${itinerary.title}: ${itinerary.duration}, ${itinerary.difficulty}, max altitude ${itinerary.maxAltitude}.`,
    image: itinerary.bgImage,
    offers: {
      "@type": "Offer",
      price: itinerary.price.replace("NRP ", ""),
      priceCurrency: "NPR",
      availability: "https://schema.org/InStock",
    },
    brand: { "@type": "Brand", name: "Iron Yak Tours & Travels" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <PageHero
        title={itinerary.title}
        subtitle={`Journey through stunning landscapes and explore custom routes with certified local guides.`}
        bgImage={itinerary.bgImage}
        eyebrowText={itinerary.eyebrowText}
      />

      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)] pt-8 pb-0">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-[#6E6E73] font-[Manrope,sans-serif] font-semibold text-[15px] no-underline"
        >
          <span aria-hidden className="text-[18px] leading-none text-[#EE6A22]">←</span>
          Back to destinations
        </Link>
      </div>

      <OverviewStats itinerary={itinerary} />
      <ItineraryContent itinerary={itinerary} />
    </>
  );
}
