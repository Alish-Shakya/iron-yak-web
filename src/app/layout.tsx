import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

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
      <body className="min-h-full">
        <div
          id="iy-root"
          className="flex min-h-screen flex-col overflow-x-hidden bg-[#ffffff] font-['Inter',sans-serif] text-[#3A3A3C]"
        >
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
