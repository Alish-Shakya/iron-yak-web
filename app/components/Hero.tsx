"use client";

import { useEffect, useState } from "react";
import { slides } from "../data/site";
import { MANROPE, MONO, eyebrow } from "./theme";
import { RouteMap } from "./RouteMap";
import { PrimaryButton, GhostButton } from "./buttons";

const DUR = 7.2; // seconds each route is shown

/** Full-viewport hero: a cross-fading slideshow, each slide with its own trek route map. */
export function Hero() {
  const [cur, setCur] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(!!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const wait = reduce ? 5200 : DUR * 1000 + 400;
    const t = setTimeout(() => setCur((c) => (c + 1) % slides.length), wait);
    return () => clearTimeout(t);
  }, [cur, reduce]);

  return (
    <header id="top" style={{ position: "relative", height: "100vh", minHeight: 660, overflow: "hidden" }}>
      {slides.map((s, idx) => {
        const on = idx === cur;
        return (
          <div
            key={idx}
            className="iy-slide"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              opacity: on ? 1 : 0,
              zIndex: on ? 2 : 1,
              pointerEvents: on ? "auto" : "none",
              transition: "opacity 1.4s ease",
              padding: "0 clamp(20px,5vw,64px)",
            }}
          >
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="iy-hero-img"
                src={s.img}
                alt={s.imgAlt}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  willChange: "transform",
                  animation: on && !reduce ? `iy-zoom ${DUR + 2}s ease-out forwards` : "none",
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: s.overlay }} />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                flex: 1,
                width: "100%",
                maxWidth: 1200,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "clamp(72px,9vh,120px) 0 0",
              }}
            >
              <div style={{ maxWidth: 720 }}>
                <div
                  style={{
                    ...eyebrow,
                    marginBottom: 16,
                    textShadow: "0 2px 20px rgba(0,0,0,.35)",
                  }}
                >
                  Guided Himalayan Treks
                </div>
                <h1
                  className="iy-balance"
                  style={{
                    fontFamily: MANROPE,
                    fontWeight: 800,
                    color: "#fff",
                    fontSize: "clamp(30px,4vw,58px)",
                    lineHeight: 1.05,
                    letterSpacing: "-.03em",
                    margin: "0 0 22px",
                    textShadow: "0 2px 30px rgba(0,0,0,.25)",
                  }}
                >
                  {s.title[0]}
                  <br />
                  {s.title[1]}
                </h1>
                <p
                  className="iy-pretty"
                  style={{
                    color: "rgba(255,255,255,.9)",
                    fontSize: "clamp(14px,1.1vw,16px)",
                    lineHeight: 1.55,
                    maxWidth: 540,
                    margin: "0 0 38px",
                  }}
                >
                  {s.sub}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <PrimaryButton href="/destinations">Explore Tours →</PrimaryButton>
                  <GhostButton href="/contact">Plan Your Journey</GhostButton>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                zIndex: 2,
                padding: "0 0 clamp(24px,4vh,44px)",
              }}
            >
              <div style={{ maxWidth: 1200, margin: "0 auto", filter: "drop-shadow(0 2px 12px rgba(0,0,0,.45))" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                    marginBottom: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#EE6A22",
                        boxShadow: "0 0 0 4px rgba(238,106,34,.18)",
                      }}
                    />
                    <span style={{ fontFamily: MANROPE, fontWeight: 700, fontSize: 14, letterSpacing: ".02em", color: "#fff" }}>
                      {s.routeLabel}
                    </span>
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: "11.5px", letterSpacing: ".08em", color: "rgba(255,255,255,.5)" }}>
                    {s.routeMeta}
                  </div>
                </div>
                <RouteMap pathD={s.pathD} stops={s.stops} running={on} reduce={reduce} />
              </div>
            </div>
          </div>
        );
      })}

      {/* slide indicators */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 14,
          transform: "translateX(-50%)",
          zIndex: 6,
          display: "flex",
          gap: 9,
        }}
      >
        {slides.map((_, i) => {
          const on = i === cur;
          return (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCur(i)}
              style={{
                width: on ? 26 : 9,
                height: 9,
                padding: 0,
                border: "none",
                borderRadius: on ? 100 : "50%",
                cursor: "pointer",
                background: on ? "#EE6A22" : "rgba(255,255,255,.4)",
                boxShadow: "0 1px 4px rgba(0,0,0,.4)",
                transition: "width .3s ease, background .3s ease",
              }}
            />
          );
        })}
      </div>
    </header>
  );
}
