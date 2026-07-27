"use client";

import { useEffect, useRef, useState } from "react";
import { slides } from "@/data/home";
import { RouteMap } from "@/components/maps/RouteMap";
import { WalkYakIntro } from "@/components/home/WalkYakIntro";
import { PrimaryButton, GhostButton } from "@/components/ui/buttons";

const DUR = 7.2; // seconds each route is shown

/** Full-viewport hero: a cross-fading slideshow, each slide with its own trek route map. */
export function Hero() {
  const [cur, setCur] = useState(0);
  const [reduce] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  // Walking-Yak intro state machine. `startIntro` fires after the loader reveal;
  // `introDone` marks the handoff to the route marker. The slideshow is held on
  // slide 0 until then, so the intro Yak walks onto a stationary trail.
  const [startIntro, setStartIntro] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const routeSvgRef = useRef<SVGSVGElement>(null);

  // The background reveal (YakLoader) tells us when it has fully finished.
  useEffect(() => {
    const onReveal = () => {
      if (reduce) {
        setIntroDone(true); // skip the elaborate walk-in for reduced motion
        return;
      }
      // Short, intentional beat after the reveal before the Yak assembles.
      setTimeout(() => setStartIntro(true), 600);
    };
    window.addEventListener("iy:reveal-complete", onReveal);
    return () => window.removeEventListener("iy:reveal-complete", onReveal);
  }, [reduce]);

  // Auto-advance only once the Yak has reached the trail — keeps slide 0 (the
  // handoff target) stationary through the whole intro.
  useEffect(() => {
    if (!introDone) return;
    const wait = reduce ? 5200 : DUR * 1000 + 400;
    const t = setTimeout(() => setCur((c) => (c + 1) % slides.length), wait);
    return () => clearTimeout(t);
  }, [cur, reduce, introDone]);

  return (
    <header
      ref={headerRef}
      id="top"
      className="relative h-screen min-h-[660px] overflow-hidden"
    >
      {slides.map((s, idx) => {
        const on = idx === cur;
        return (
          <div
            key={idx}
            className={`absolute inset-0 flex flex-col justify-center py-0 px-[clamp(20px,5vw,64px)] [transition:opacity_1.4s_ease] [will-change:opacity] ${
              on
                ? "opacity-100 z-[2] pointer-events-auto"
                : "opacity-0 z-[1] pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-full w-full object-cover [will-change:transform]"
                src={s.img}
                alt={s.imgAlt}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{
                  animation:
                    on && !reduce
                      ? `iy-zoom ${DUR + 2}s ease-out forwards`
                      : "none",
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: s.overlay }}
              />
            </div>

            <div className="relative z-[2] flex-1 w-full max-w-[1200px] mx-auto my-0 flex flex-col justify-center pt-[clamp(72px,9vh,120px)] px-0 pb-0">
              <div className="max-w-[720px]">
                <div className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22] mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,.35)]">
                  Guided Himalayan Treks
                </div>
                <h1 className="text-balance font-[Manrope,sans-serif] font-extrabold text-white text-[clamp(38px,4vw,58px)] leading-[1.05] tracking-[-0.03em] mt-0 mb-[22px] [text-shadow:0_2px_30px_rgba(0,0,0,.25)]">
                  {s.title[0]}
                  <br />
                  {s.title[1]}
                </h1>
                <p className="text-pretty text-[rgba(255,255,255,.9)] text-[clamp(16px,1.1vw,16px)] leading-[1.55] max-w-[540px] mt-0 mb-[38px]">
                  {s.sub}
                </p>
                <div className="flex flex-wrap gap-[14px]">
                  <PrimaryButton href="/destinations">
                    Explore Tours →
                  </PrimaryButton>
                  <GhostButton href="/contact">Plan Your Journey</GhostButton>
                </div>
              </div>
            </div>

            <div className="relative w-full z-[2] pt-0 px-0 pb-[clamp(24px,4vh,44px)]">
              <div className="max-w-[1200px] mx-auto my-0 [filter:drop-shadow(0_2px_12px_rgba(0,0,0,.45))]">
                <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#EE6A22] shadow-[0_0_0_4px_rgba(238,106,34,.18)]" />
                    <span className="font-[Manrope,sans-serif] font-bold text-[14px] tracking-[0.02em] text-white">
                      {s.routeLabel}
                    </span>
                  </div>
                  <div className="font-[Manrope,sans-serif] text-[14px] font-bold tracking-[0.02em] text-[#EE6A22]">
                    {s.routeMeta}
                  </div>
                </div>
                <RouteMap
                  pathD={s.pathD}
                  stops={s.stops}
                  running={on && introDone}
                  reduce={reduce}
                  showMarker={introDone}
                  svgRef={on ? routeSvgRef : undefined}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* One-time walking-Yak flourish: assembles centre-screen, then walks down
          onto the trail and hands off to the route marker. */}
      {startIntro && (
        <WalkYakIntro
          headerRef={headerRef}
          routeSvgRef={routeSvgRef}
          onArrived={() => setIntroDone(true)}
        />
      )}

      {/* slide indicators */}
      <div className="absolute left-1/2 bottom-[14px] -translate-x-1/2 z-[6] flex gap-[9px]">
        {slides.map((_, i) => {
          const on = i === cur;
          return (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCur(i)}
              className={`h-[9px] p-0 border-none cursor-pointer shadow-[0_1px_4px_rgba(0,0,0,.4)] [transition:width_.3s_ease,background_.3s_ease] ${
                on
                  ? "w-[26px] rounded-[100px] bg-[#EE6A22]"
                  : "w-[9px] rounded-full bg-[rgba(255,255,255,.4)]"
              }`}
            />
          );
        })}
      </div>
    </header>
  );
}
