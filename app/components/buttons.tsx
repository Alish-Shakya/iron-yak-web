"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

type PrimaryProps = {
  href: string;
  children: ReactNode;
  padding?: string;
  fontSize?: number;
  shadow?: string;
  hoverShadow?: string;
  /** Vertical lift on hover (default -3px). */
  lift?: string;
  style?: CSSProperties;
};

/** Orange pill CTA. Lifts and deepens its shadow on hover. */
export function PrimaryButton({
  href,
  children,
  padding = "16px 30px",
  fontSize = 16,
  shadow = "0 10px 30px rgba(238,106,34,.4)",
  hoverShadow = "0 16px 40px rgba(238,106,34,.5)",
  lift = "-3px",
  style,
}: PrimaryProps) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "#EE6A22",
        color: "#fff",
        fontWeight: 600,
        fontSize,
        padding,
        borderRadius: 100,
        boxShadow: hover ? hoverShadow : shadow,
        transform: hover ? `translateY(${lift})` : "none",
        transition: "transform .25s ease, box-shadow .25s ease",
        ...style,
      }}
    >
      {children}
    </a>
  );
}

/** Frosted-glass secondary CTA used over the hero photography. */
export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: hover ? "rgba(255,255,255,.24)" : "rgba(255,255,255,.12)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,.4)",
        color: "#fff",
        fontWeight: 600,
        fontSize: 16,
        padding: "16px 30px",
        borderRadius: 100,
        transform: hover ? "translateY(-3px)" : "none",
        transition: "background .25s ease, transform .25s ease",
      }}
    >
      {children}
    </a>
  );
}
