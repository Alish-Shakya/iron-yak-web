"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { PrimaryButton } from "@/components/ui/buttons";

/** Fixed top nav that turns from transparent (over the hero) to a solid blur once scrolled. */
export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The menu panel gets a solid background, so treat links as if on a light surface.
  const isHome = pathname === "/";
  const onLight = solid || !isHome || open;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] px-[clamp(20px,5vw,64px)] [transition:background_.4s_ease,padding_.4s_ease,box-shadow_.4s_ease,backdrop-filter_.4s_ease] ${
        onLight
          ? "bg-[rgba(255,255,255,.88)] py-[14px] shadow-[0_4px_24px_rgba(28,28,30,.08)] backdrop-blur-[14px]"
          : "bg-transparent py-[22px] shadow-none backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <Link href="/" className="flex items-center leading-[0]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={onLight ? "/assets/primary.png" : "/assets/logo-horizontal.svg"}
            alt="Iron Yak Tours & Travels"
            className={`block h-[30px] w-auto ${
              onLight ? "" : "[filter:drop-shadow(0_2px_8px_rgba(0,0,0,.45))]"
            }`}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-[clamp(18px,2.4vw,40px)] md:flex">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className="relative py-1 text-[15px] font-extrabold [transition:color_.4s_ease]"
                style={{ color: "#EE6A22" }}
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

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] bg-transparent border-none p-0 outline-none cursor-pointer md:hidden"
        >
          <span
            className={`block h-[2px] w-6 rounded-full [transition:transform_.3s_ease,opacity_.3s_ease] ${
              onLight ? "bg-[#1C1C1E]" : "bg-white"
            } ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full [transition:opacity_.2s_ease] ${
              onLight ? "bg-[#1C1C1E]" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full [transition:transform_.3s_ease,opacity_.3s_ease] ${
              onLight ? "bg-[#1C1C1E]" : "bg-white"
            } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden [transition:max-height_.4s_ease,opacity_.3s_ease] md:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 pb-4 pt-4">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className="rounded-[10px] px-3 py-3 text-[16px] font-extrabold text-[#EE6A22] [transition:background_.2s_ease] hover:bg-[rgba(238,106,34,.08)]"
              >
                {l.label}
              </Link>
            );
          })}
          <div className="mt-2 px-1">
            <PrimaryButton
              href="/contact"
              padding="14px 24px"
              fontSize={15}
              shadow="0 8px 24px rgba(238,106,34,.32)"
              hoverShadow="0 12px 30px rgba(238,106,34,.42)"
              lift="-2px"
            >
              Book Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
