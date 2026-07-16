import type { Metadata } from "next";
import { itineraries } from "@/data/itineraries";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = itineraries.find((it) => it.slug === slug);

  if (!itinerary) {
    return { title: "Destination Not Found" };
  }

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

export default function DestinationDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
