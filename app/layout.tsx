import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Yak Tours & Travels — Explore Nepal beyond the ordinary",
  description:
    "Breathtaking mountains, unforgettable adventures, and the warm, authentic hospitality of the Himalaya — crafted into journeys you'll never forget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
