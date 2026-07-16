import type { Metadata } from "next";
import { itineraries } from "../../data/itineraries";
import { buildTrekMetadata } from "../../lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = itineraries.find((it) => it.slug === slug);

  if (!itinerary) {
    return { title: "Destination Not Found" };
  }

  return buildTrekMetadata(itinerary);
}

export default function DestinationDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
