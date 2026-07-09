"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/site";
import { PrimaryButton } from "./buttons";

/** Fixed top nav that turns from transparent (over the hero) to a solid blur once scrolled. */
export function Nav() {
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: solid
          ? "14px clamp(20px,5vw,64px)"
          : "22px clamp(20px,5vw,64px)",
        background: solid ? "rgba(255,255,255,.88)" : "transparent",
        backdropFilter: solid ? "blur(14px)" : "none",
        WebkitBackdropFilter: solid ? "blur(14px)" : "none",
        boxShadow: solid ? "0 4px 24px rgba(28,28,30,.08)" : "none",
        transition:
          "background .4s ease, padding .4s ease, box-shadow .4s ease, backdrop-filter .4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", lineHeight: 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/primary.png"
            alt="Iron Yak Tours & Travels"
            style={{
              height: "30px",
              width: "auto",
              display: "block",
              filter: solid ? "none" : "drop-shadow(0 2px 8px rgba(0,0,0,.45))",
            }}
          />
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(18px,2.4vw,40px)",
          }}
        >
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            const linkColor = isActive
              ? "#EE6A22"
              : solid
                ? "#3A3A3C"
                : "#ffffff";
            return (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 15,
                  fontWeight: isActive ? 700 : 500,
                  color: linkColor,
                  transition: "color .4s ease",
                  position: "relative",
                  padding: "4px 0",
                }}
              >
                {l.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "#EE6A22",
                      borderRadius: 2,
                    }}
                  />
                )}
              </Link>
            );
          })}
          <PrimaryButton
            href="/contact"
            padding="12px 24px"
            fontSize={15}
            shadow="0 8px 24px rgba(238,106,34,.32)"
            hoverShadow="0 12px 30px rgba(238,106,34,.42)"
            lift="-2px"
          >
            Book Now
          </PrimaryButton>
        </div>
      </div>
    </nav>
  );
}
