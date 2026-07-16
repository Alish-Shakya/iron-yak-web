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

  return (
    <>
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
