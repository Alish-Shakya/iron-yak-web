import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

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
      <body className="min-h-full" style={{ margin: 0 }}>
        <div
          id="iy-root"
          style={{
            fontFamily: "'Inter',sans-serif",
            color: "#3A3A3C",
            background: "#ffffff",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Nav />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
