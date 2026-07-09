"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { PageHero } from "../../components/PageHero";
import { RouteMap } from "../../components/RouteMap";
import { Reveal } from "../../components/Reveal";
import { eyebrow, h2Base, INK, MANROPE, MUTED, ORANGE } from "../../components/theme";
import { itineraries } from "../../data/itineraries";

export default function DestinationDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const itinerary = itineraries.find((it) => it.slug === slug);
  const [activeDay, setActiveDay] = useState<number | null>(0);

  if (!itinerary) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={itinerary.title}
        subtitle={`Journey through stunning landscapes and explore custom routes with certified local guides.`}
        bgImage={itinerary.bgImage}
        eyebrowText={itinerary.eyebrowText}
      />

      {/* Back to all destinations */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px clamp(20px,5vw,64px) 0" }}>
        <Link
          href="/destinations"
          className="iy-back"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: MUTED,
            fontFamily: MANROPE,
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
          }}
        >
          <span aria-hidden style={{ fontSize: 18, lineHeight: 1, color: ORANGE }}>←</span>
          Back to destinations
        </Link>
      </div>

      {/* Overview Stats */}
      <section style={{ padding: "28px clamp(20px,5vw,64px) 30px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              background: "#F6F5F3",
              borderRadius: 20,
              padding: "40px",
              textAlign: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, fontWeight: 600 }}>Duration</div>
              <div style={{ fontFamily: MANROPE, fontSize: 32, fontWeight: 800, color: "#1C1C1E", marginTop: 8 }}>{itinerary.duration}</div>
            </div>
            <div>
              <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, fontWeight: 600 }}>Max Altitude</div>
              <div style={{ fontFamily: MANROPE, fontSize: 32, fontWeight: 800, color: "#1C1C1E", marginTop: 8 }}>{itinerary.maxAltitude}</div>
            </div>
            <div>
              <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, fontWeight: 600 }}>Difficulty</div>
              <div style={{ fontFamily: MANROPE, fontSize: 32, fontWeight: 800, color: "#EE6A22", marginTop: 8 }}>{itinerary.difficulty}</div>
            </div>
            <div>
              <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, fontWeight: 600 }}>Group Size</div>
              <div style={{ fontFamily: MANROPE, fontSize: 32, fontWeight: 800, color: "#1C1C1E", marginTop: 8 }}>{itinerary.groupSize}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Itinerary & Route Map Split */}
      <section style={{ padding: "30px clamp(20px,5vw,64px) 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 50, alignItems: "start" }}>
            
            {/* Itinerary Column */}
            <div>
              <Reveal style={{ marginBottom: 32 }}>
                <div style={{ ...eyebrow, marginBottom: 12 }}>Trek Itinerary</div>
                <h2 style={{ ...h2Base, fontSize: "clamp(28px, 3.8vw, 42px)", marginBottom: 16 }}>Day-by-Day Journey</h2>
                <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                  A perfectly paced route for optimal acclimatization, led by certified guides.
                </p>
              </Reveal>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {itinerary.days.map((day, idx) => {
                  const isOpen = activeDay === idx;
                  return (
                    <Reveal key={idx}>
                      <div
                        style={{
                          border: "1px solid #eee",
                          borderRadius: 16,
                          background: isOpen ? "#FAF9F6" : "#fff",
                          boxShadow: isOpen ? "0 8px 24px rgba(28,28,30,.05)" : "none",
                          overflow: "hidden",
                          transition: "all .3s ease",
                        }}
                      >
                        <button
                          onClick={() => setActiveDay(isOpen ? null : idx)}
                          style={{
                            width: "100%",
                            padding: "20px 24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 14, fontWeight: 700, color: "#EE6A22", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                              {day.day}
                            </span>
                            <span style={{ fontFamily: MANROPE, fontWeight: 700, fontSize: 17, color: "#1C1C1E" }}>
                              {day.title}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <span style={{ fontSize: 12, color: MUTED, fontWeight: 500 }}>{day.elevation}</span>
                            <span style={{ fontSize: 16, color: isOpen ? "#EE6A22" : MUTED }}>{isOpen ? "−" : "+"}</span>
                          </div>
                        </button>
                        {isOpen && (
                          <div style={{ padding: "0 24px 20px 24px", color: MUTED, fontSize: 15, lineHeight: 1.6, borderTop: "1px solid #f6f6f6" }}>
                            {day.desc}
                          </div>
                        )}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Interactive Route Map Column */}
            <div style={{ position: "sticky", top: 120 }}>
              <Reveal
                style={{
                  background: INK,
                  borderRadius: 24,
                  padding: "40px clamp(20px, 4vw, 48px)",
                  color: "#fff",
                  boxShadow: "0 20px 50px rgba(0,0,0,.15)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#EE6A22" }} />
                  <span style={{ fontFamily: MANROPE, fontWeight: 700, fontSize: 16, letterSpacing: ".02em", color: "#fff" }}>
                    {itinerary.routeLabel} Route
                  </span>
                </div>
                <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, lineHeight: 1.5, margin: "0 0 32px" }}>
                  {itinerary.routeMeta}
                </p>
                
                <div style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,.45))" }}>
                  <RouteMap pathD={itinerary.pathD} stops={itinerary.stops} running={true} reduce={false} />
                </div>
                
                <div style={{ marginTop: 40, borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 30 }}>
                  <div style={{ fontSize: 13, textTransform: "uppercase", color: "rgba(255,255,255,.4)", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 14 }}>
                    Trip Inclusions
                  </div>
                  <ul style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px 18px", padding: 0, margin: 0, listStyle: "none", fontSize: 14, color: "rgba(255,255,255,.8)" }}>
                    {itinerary.inclusions.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

    </>
  );
}
