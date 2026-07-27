"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { yakParts, yakGroupClass, WALK_YAK } from "@/data/walkYak";

/** RouteMap marker scale — must match the `scale(...)` used in RouteMap.tsx so the
 *  intro Yak lands at exactly the marker's on-screen size for a seamless handoff. */
const MARKER_SCALE = 0.17;

type Phase = "assemble" | "hold" | "walk" | "toTrail" | "done";

const assemblyVariants = {
  hidden: (c: { sx: number; sy: number; srot: number }) => ({
    x: c.sx,
    y: c.sy,
    rotate: c.srot,
    opacity: 0,
    scale: 0.5,
  }),
  visible: (c: { delay: number }) => ({
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: c.delay, type: "spring" as const, stiffness: 55, damping: 12, mass: 1 },
  }),
};

/**
 * The one-time hero flourish: after the loader reveal, the Yak assembles piece by
 * piece in the centre, holds, breaks into a walk cycle, then walks down to the
 * route's base station and hands off to the RouteMap's traveling marker.
 *
 * `headerRef` / `routeSvgRef` are measured (once, when the walk-to-trail begins,
 * with slide 0 held stationary) to land the Yak exactly on the marker's spot.
 */
export function WalkYakIntro({
  headerRef,
  routeSvgRef,
  onArrived,
}: {
  headerRef: RefObject<HTMLElement | null>;
  routeSvgRef: RefObject<SVGSVGElement | null>;
  onArrived: () => void;
}) {
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [phase, setPhase] = useState<Phase>("assemble");
  // Transform applied to the Yak once it walks toward the trail (px offset + scale).
  const [travel, setTravel] = useState({ x: 0, y: 0, scale: 1 });
  const [gone, setGone] = useState(false);
  const arrivedRef = useRef(onArrived);
  arrivedRef.current = onArrived;

  // Measure the hero so we can centre the Yak, and keep it centred on resize.
  useEffect(() => {
    const measure = () => {
      const el = headerRef.current;
      if (el) setSize({ w: el.clientWidth, h: el.clientHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [headerRef]);

  // Cinematic timeline: assemble → hold → walk in place → walk to the trail.
  useEffect(() => {
    if (!size) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase("hold"), 2100));
    timers.push(setTimeout(() => setPhase("walk"), 3000)); // ~0.9s hold, then it comes alive
    timers.push(
      setTimeout(() => {
        // Compute where the base-station marker sits on screen and aim the Yak there.
        const header = headerRef.current;
        const svg = routeSvgRef.current;
        const introW = Math.max(150, Math.min(size.w * 0.52, 300));
        if (header && svg) {
          const hr = header.getBoundingClientRect();
          const sr = svg.getBoundingClientRect();
          const vb = svg.viewBox.baseVal; // 1000 × viewH
          // Base station = first drawn stop; RouteMap starts the marker at path 0%,
          // which is that stop. Its coords live at the path's start — read them off
          // the path so we track whatever slide 0 actually is.
          const path = svg.querySelector("path");
          let px = 90;
          let py = vb.height / 2;
          if (path && "getPointAtLength" in path) {
            const pt = (path as SVGPathElement).getPointAtLength(0);
            px = pt.x;
            py = pt.y;
          }
          const scale = sr.width / (vb.width || 1000); // route-units → px
          const feetX = sr.left + px * scale;
          const feetY = sr.top + py * scale;

          const markerW = WALK_YAK.w * MARKER_SCALE * scale; // marker's on-screen width
          const targetScale = markerW / introW;
          const dispH = introW * targetScale * (WALK_YAK.h / WALK_YAK.w);
          const feetBelowCentre = dispH * (150 / WALK_YAK.h - 0.5);

          const cx0 = hr.left + size.w / 2;
          const cy0 = hr.top + size.h * 0.42;
          setTravel({
            x: feetX - cx0,
            y: feetY - feetBelowCentre - cy0,
            scale: targetScale,
          });
        }
        setPhase("toTrail");
      }, 4300)
    );
    timers.push(
      setTimeout(() => {
        setPhase("done");
        arrivedRef.current(); // RouteMap marker takes over from here
      }, 6700)
    );
    // Let the marker appear, then fade the intro Yak out under the crossfade.
    timers.push(setTimeout(() => setGone(true), 7000));
    return () => timers.forEach(clearTimeout);
  }, [size, headerRef, routeSvgRef]);

  if (!size) return null;

  const introW = Math.max(150, Math.min(size.w * 0.52, 300));
  const cx0 = size.w / 2;
  const cy0 = size.h * 0.42;
  const walking = phase === "walk" || phase === "toTrail" || phase === "done";

  return (
    <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden>
      {/* Centred anchor at the hero mid-point; the inner element walks away from it. */}
      <div style={{ position: "absolute", left: cx0, top: cy0, width: introW, transform: "translate(-50%,-50%)" }}>
        <motion.div
          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{
            x: travel.x,
            y: travel.y,
            scale: travel.scale,
            opacity: gone ? 0 : 1,
          }}
          transition={{
            x: { duration: 2.4, ease: [0.4, 0, 0.2, 1] },
            y: { duration: 2.4, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 2.4, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.4, ease: "easeOut" },
          }}
          style={{ width: "100%", transformOrigin: "50% 50%" }}
        >
          <svg
            viewBox={`0 0 ${WALK_YAK.w} ${WALK_YAK.h}`}
            className={walking ? "yak-walk" : undefined}
            style={{
              width: "100%",
              height: "auto",
              overflow: "visible",
              filter: "drop-shadow(0 6px 14px rgba(0,0,0,.45))",
            }}
          >
            <g className="yak-bounce">
              {yakParts.map((p) =>
                walking ? (
                  <path key={p.id} className={yakGroupClass(p.group)} d={p.d} fill={p.fill} />
                ) : (
                  <motion.path
                    key={p.id}
                    className={yakGroupClass(p.group)}
                    d={p.d}
                    fill={p.fill}
                    custom={{ sx: p.sx, sy: p.sy, srot: p.srot, delay: p.delay }}
                    variants={assemblyVariants}
                    initial="hidden"
                    animate="visible"
                  />
                )
              )}
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
