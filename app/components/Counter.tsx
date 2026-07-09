"use client";

import { useEffect, useRef, useState } from "react";
import { MANROPE, ORANGE } from "./theme";

/** Counts up from 0 to `target` (with an eased curve) once scrolled into view. */
export function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const run = () => {
      const dur = 1600;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <div
      ref={ref}
      style={{
        fontFamily: MANROPE,
        fontWeight: 800,
        fontSize: "clamp(40px,5vw,60px)",
        color: ORANGE,
        letterSpacing: "-.03em",
      }}
    >
      {val.toLocaleString() + suffix}
    </div>
  );
}
