"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { PrimaryButton } from "@/components/ui/buttons";

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
      className={`fixed left-0 right-0 top-0 z-[100] px-[clamp(20px,5vw,64px)] [transition:background_.4s_ease,padding_.4s_ease,box-shadow_.4s_ease,backdrop-filter_.4s_ease] ${
        solid
          ? "bg-[rgba(255,255,255,.88)] py-[14px] shadow-[0_4px_24px_rgba(28,28,30,.08)] backdrop-blur-[14px]"
          : "bg-transparent py-[22px] shadow-none backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <Link href="/" className="flex items-center leading-[0]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/primary.png"
            alt="Iron Yak Tours & Travels"
            className={`block h-[30px] w-auto ${
              solid ? "" : "[filter:drop-shadow(0_2px_8px_rgba(0,0,0,.45))]"
            }`}
          />
        </Link>
        <div className="flex items-center gap-[clamp(18px,2.4vw,40px)]">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`relative py-1 text-[15px] [transition:color_.4s_ease] ${
                  isActive
                    ? "font-bold text-[#EE6A22]"
                    : `font-extrabold ${solid ? "text-[#1C1C1E]" : "text-white"}`
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-[2px] rounded-[2px] bg-[#EE6A22]" />
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
