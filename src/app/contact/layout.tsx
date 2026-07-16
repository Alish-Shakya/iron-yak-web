import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Iron Yak Tours & Travels in Kathmandu, Nepal. Plan your custom Himalayan trek with our expert team.",
  openGraph: {
    title: "Contact Iron Yak Tours & Travels",
    description:
      "Ready to plan your Nepal trek? Contact our Kathmandu office for custom itineraries and expert advice.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
