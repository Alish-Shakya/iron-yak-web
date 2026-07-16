"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Element to render as (defaults to div). Used e.g. as an anchor for cards. */
  as?: ElementType;
} & Record<string, unknown>;

/**
 * Fades/slides its content in the first time it scrolls into view.
 * Replaces the imperative IntersectionObserver `.iy-reveal` wiring from the
 * original design script. The `.iy-reveal` / `.iy-in` classes live in globals.css.
 */
export function Reveal({ children, className = "", style, as: Tag = "div", ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(() => {
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) return true;
    return false;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ["iy-reveal", inView ? "iy-in" : "", className].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  );
}
