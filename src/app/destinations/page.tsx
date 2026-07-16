import { PageHero } from "@/components/ui/PageHero";
import { DestinationsGrid } from "@/components/destinations/DestinationsGrid";
import { CustomTrekCta } from "@/components/destinations/CustomTrekCta";

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Our Destinations"
        subtitle="Choose your next Himalayan challenge, from iconic base camps to hidden valleys and jungle safaris."
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="Where we go"
      />

      <DestinationsGrid />
      <CustomTrekCta />
    </>
  );
}
