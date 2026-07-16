import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Nepal's best treks: Everest Base Camp, Annapurna Circuit, Langtang Valley, Upper Mustang, Pokhara, and Chitwan Jungle Safari.",
  openGraph: {
    title: "Destinations | Iron Yak Tours & Travels",
    description:
      "Discover our hand-crafted Himalayan treks — from Everest Base Camp to hidden valleys and jungle safaris.",
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
