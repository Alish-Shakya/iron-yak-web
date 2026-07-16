import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { PackagesSection } from "@/components/services/PackagesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end Himalayan trekking services — certified Sherpa guides, permits & logistics, custom itineraries, tea house stays, gear rental, and helicopter rescue support.",
  openGraph: {
    title: "Services | Iron Yak Tours & Travels",
    description:
      "Comprehensive Himalayan logistics, safety networks, and tailored trek designs for a seamless adventure in Nepal.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Himalayan logistics, safety networks, and tailored trek designs for a seamless adventure."
        bgImage="https://images.unsplash.com/photo-1472791108553-c9405341e398?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="What we offer"
      />

      <ServicesGrid />
      <PackagesSection />
    </>
  );
}
