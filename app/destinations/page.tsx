"use client";

import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { destinations } from "../data/site";
import { Reveal } from "../components/Reveal";
import { MANROPE, MUTED } from "../components/theme";
import { PrimaryButton } from "../components/buttons";

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Our Destinations"
        subtitle="Choose your next Himalayan challenge, from iconic base camps to hidden valleys and jungle safaris."
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="Where we go"
      />

      {/* Destinations Grid */}
      <section style={{ padding: "60px clamp(20px,5vw,64px) 30px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
              gap: 22,
            }}
          >
            {destinations.map((d) => (
              <Reveal key={d.title}>
                <Link href={`/destinations/${d.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div className="iy-card" style={{ cursor: "pointer" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.img} alt={d.title} loading="lazy" decoding="async" />
                    <div className="iy-card-scrim" />
                    <div style={{ position: "absolute", left: 22, right: 22, bottom: 22, color: "#fff" }}>
                      <div
                        style={{
                          display: "inline-block",
                          background: "rgba(238,106,34,.92)",
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "5px 12px",
                          borderRadius: 100,
                          marginBottom: 12,
                        }}
                      >
                        {d.badge}
                      </div>
                      <div style={{ fontFamily: MANROPE, fontWeight: 800, fontSize: 26, letterSpacing: "-.02em" }}>
                        {d.title}
                      </div>
                      <div style={{ fontSize: 14, color: "rgba(255,255,255,.85)", marginTop: 4 }}>from {d.price}</div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trek Builder CTA */}
      <section style={{ padding: "30px clamp(20px,5vw,64px) 80px" }}>
        <Reveal
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            background: "#F6F5F3",
            borderRadius: 24,
            padding: "52px clamp(30px,6vw,80px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 500px" }}>
            <h3
              style={{
                fontFamily: MANROPE,
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 800,
                margin: "0 0 12px",
                color: "#1C1C1E",
              }}
            >
              Looking for a custom experience?
            </h3>
            <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.6, margin: 0, maxWidth: 580 }}>
              We can design a tailor-made trekking itinerary that fits your specific fitness level, timeframe, and goals. Speak with our travel experts to get started.
            </p>
          </div>
          <PrimaryButton
            href="/contact?type=custom"
            padding="16px 32px"
            shadow="0 8px 24px rgba(238,106,34,.25)"
            hoverShadow="0 14px 34px rgba(238,106,34,.35)"
          >
            Request Custom Itinerary
          </PrimaryButton>
        </Reveal>
      </section>
    </>
  );
}
