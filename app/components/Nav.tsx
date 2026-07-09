"use client";

import { useEffect, useState } from "react";
import { navLinks } from "../data/site";
import { PrimaryButton } from "./buttons";

/** Fixed top nav that turns from transparent (over the hero) to a solid blur once scrolled. */
export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = solid ? "#3A3A3C" : "#ffffff";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: solid ? "14px clamp(20px,5vw,64px)" : "22px clamp(20px,5vw,64px)",
        background: solid ? "rgba(255,255,255,.85)" : "transparent",
        backdropFilter: solid ? "blur(14px)" : "none",
        WebkitBackdropFilter: solid ? "blur(14px)" : "none",
        boxShadow: solid ? "0 4px 24px rgba(28,28,30,.08)" : "none",
        transition: "background .4s ease, padding .4s ease, box-shadow .4s ease, backdrop-filter .4s ease",
      }}
    >
      <a href="#top" style={{ display: "flex", alignItems: "center", lineHeight: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/iron-yak-logo.svg"
          alt="Iron Yak Tours & Travels"
          style={{
            height: 42,
            width: "auto",
            display: "block",
            filter: solid ? "none" : "drop-shadow(0 2px 8px rgba(0,0,0,.45))",
          }}
        />
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(18px,2.4vw,40px)" }}>
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ fontSize: 15, fontWeight: 500, color: linkColor, transition: "color .4s ease" }}
          >
            {l.label}
          </a>
        ))}
        <PrimaryButton
          href="#footer"
          padding="12px 24px"
          fontSize={15}
          shadow="0 8px 24px rgba(238,106,34,.32)"
          hoverShadow="0 12px 30px rgba(238,106,34,.42)"
          lift="-2px"
        >
          Book Now
        </PrimaryButton>
      </div>
    </nav>
  );
}
