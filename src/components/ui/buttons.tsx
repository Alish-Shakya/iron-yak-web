"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";

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

/** Orange pill CTA. Lifts and deepens its shadow on hover. Supports Next.js Link. */
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
  const isInternal = href.startsWith("/");
  const { color: customColor, background, ...styleWithoutColor } = style ?? {};
  const isFilledAction = !background || background === "#EE6A22";

  // Prop- and hover-state-driven values stay inline; static declarations moved to className.
  const buttonStyle: CSSProperties = {
    fontSize,
    padding,
    boxShadow: hover ? hoverShadow : shadow,
    transform: hover ? `translateY(${lift})` : "none",
    color: isFilledAction ? (hover ? "#fff" : "#000") : customColor,
    background,
    ...styleWithoutColor,
  };

  const className =
    "inline-flex items-center gap-2.5 bg-[#EE6A22] font-semibold rounded-[100px] no-underline cursor-pointer [transition:transform_.25s_ease,box-shadow_.25s_ease,color_.25s_ease]";

  return isInternal ? (
    <Link href={href} className={className} style={buttonStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className} style={buttonStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </a>
  );
}

/** Frosted-glass secondary CTA used over the hero photography. Supports Next.js Link. */
export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  const [hover, setHover] = useState(false);
  const isInternal = href.startsWith("/");

  // Hover-state-driven values stay inline; static declarations moved to className.
  const buttonStyle: CSSProperties = {
    background: hover ? "rgba(255,255,255,.24)" : "rgba(255,255,255,.12)",
    transform: hover ? "translateY(-3px)" : "none",
    color: "#EE6A22",
  };

  const className =
    "inline-flex items-center gap-2.5 backdrop-blur-[10px] border border-[rgba(255,255,255,0.4)] text-[#EE6A22] font-semibold text-[16px] py-4 px-[30px] rounded-[100px] no-underline cursor-pointer [transition:background_.25s_ease,transform_.25s_ease]";

  return isInternal ? (
    <Link href={href} className={className} style={buttonStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className} style={buttonStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </a>
  );
}
