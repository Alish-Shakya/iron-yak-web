"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/site";
import { eyebrow, h2Base, MANROPE } from "./theme";
import { Reveal } from "./Reveal";

/** Horizontally scroll-snapping traveler reviews with prev/next controls. */
export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const amount = () => (track.current ? Math.min(track.current.clientWidth * 0.85, 442) : 400);
  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * amount(), behavior: "smooth" });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 5);
      // when content isn't scrollable, treat as both ends reached
      setAtEnd(maxScroll <= 5 || el.scrollLeft >= maxScroll - 5);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // re-measure once images/layout settle (initial measurement can be stale)
    const t = setTimeout(update, 300);
    return () => {
      clearTimeout(t);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="stories" style={{ padding: "clamp(60px,8vw,110px) 0" }}>
      <Reveal
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,64px)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 42,
        }}
      >
        <div>
          <div style={{ ...eyebrow, marginBottom: 14 }}>Traveler Stories</div>
          <h2 className="iy-balance" style={{ ...h2Base, fontSize: "clamp(32px,4.4vw,54px)", maxWidth: 560 }}>
            Loved by adventurers worldwide
          </h2>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            aria-label="Previous"
            onClick={() => scroll(-1)}
            disabled={atStart}
            onMouseEnter={() => setPrevHover(true)}
            onMouseLeave={() => setPrevHover(false)}
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "none",
              background: atStart ? "#E5E3DF" : "#EE6A22",
              color: atStart ? "#B4B2AD" : "#fff",
              fontSize: 20,
              cursor: atStart ? "not-allowed" : "pointer",
              boxShadow: atStart ? "none" : "0 8px 20px rgba(238,106,34,.3)",
              transform: !atStart && prevHover ? "scale(1.06)" : "none",
              transition: "transform .2s ease, background .2s ease, color .2s ease",
            }}
          >
            ←
          </button>
          <button
            aria-label="Next"
            onClick={() => scroll(1)}
            disabled={atEnd}
            onMouseEnter={() => setNextHover(true)}
            onMouseLeave={() => setNextHover(false)}
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "none",
              background: atEnd ? "#E5E3DF" : "#EE6A22",
              color: atEnd ? "#B4B2AD" : "#fff",
              fontSize: 20,
              cursor: atEnd ? "not-allowed" : "pointer",
              boxShadow: atEnd ? "none" : "0 8px 20px rgba(238,106,34,.3)",
              transform: !atEnd && nextHover ? "scale(1.06)" : "none",
              transition: "transform .2s ease, background .2s ease, color .2s ease",
            }}
          >
            →
          </button>
        </div>
      </Reveal>

      <div
        ref={track}
        className="iy-nolist"
        style={{
          display: "flex",
          gap: 22,
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "6px clamp(20px,5vw,64px) 20px",
          scrollSnapType: "x mandatory",
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              scrollSnapAlign: "start",
              flex: "0 0 clamp(300px,38vw,420px)",
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: 22,
              padding: 34,
              boxShadow: "0 14px 36px rgba(28,28,30,.07)",
            }}
          >
            <div style={{ color: "#EE6A22", fontSize: 17, letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#2c2c2e", margin: "0 0 26px", fontWeight: 500 }}>
              {t.quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.avatar}
                alt=""
                loading="lazy"
                decoding="async"
                style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <div style={{ fontWeight: 700, fontFamily: MANROPE }}>{t.name}</div>
                <div style={{ color: "#9a9a9e", fontSize: 14 }}>{t.trip}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
