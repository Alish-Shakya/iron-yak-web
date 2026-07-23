"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";

/** Horizontally scroll-snapping traveler reviews with prev/next controls. */
export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const amount = () => (track.current ? track.current.clientWidth : 400);
  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * amount(), behavior: "smooth" });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 5);
      // when content isn't scrollable, treat as both ends reached
      setAtEnd(maxScroll <= 5 || el.scrollLeft >= maxScroll - 5);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // re-measure once images/layout settle (initial measurement can be stale)
    const t = setTimeout(update, 300);
    return () => {
      clearTimeout(t);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="stories" className="py-[clamp(60px,8vw,110px)]">
      <Reveal className="mx-auto mt-0 mb-[42px] flex max-w-[1200px] flex-wrap items-end justify-between gap-6 px-[clamp(20px,5vw,64px)] py-0">
        <div>
          <div className="mb-[14px] text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]">Traveler Stories</div>
          <h2 className="mt-0 max-w-[560px] font-[Manrope,sans-serif] text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance">
            Loved by adventurers worldwide
          </h2>
        </div>
        <div className="flex gap-2.5">
          <button
            aria-label="Previous"
            onClick={() => scroll(-1)}
            disabled={atStart}
            onMouseEnter={() => setPrevHover(true)}
            onMouseLeave={() => setPrevHover(false)}
            className={`h-[52px] w-[52px] rounded-full border-none text-[20px] [transition:transform_.2s_ease,background_.2s_ease,color_.2s_ease] ${
              atStart
                ? "cursor-not-allowed bg-[#E5E3DF] text-[#B4B2AD] shadow-none [transform:none]"
                : `cursor-pointer bg-[#EE6A22] ${prevHover ? "text-white" : "text-black"} shadow-[0_8px_20px_rgba(238,106,34,.3)] ${
                    prevHover ? "[transform:scale(1.06)]" : "[transform:none]"
                  }`
            }`}
          >
            ←
          </button>
          <button
            aria-label="Next"
            onClick={() => scroll(1)}
            disabled={atEnd}
            onMouseEnter={() => setNextHover(true)}
            onMouseLeave={() => setNextHover(false)}
            className={`h-[52px] w-[52px] rounded-full border-none text-[20px] [transition:transform_.2s_ease,background_.2s_ease,color_.2s_ease] ${
              atEnd
                ? "cursor-not-allowed bg-[#E5E3DF] text-[#B4B2AD] shadow-none [transform:none]"
                : `cursor-pointer bg-[#EE6A22] ${nextHover ? "text-white" : "text-black"} shadow-[0_8px_20px_rgba(238,106,34,.3)] ${
                    nextHover ? "[transform:scale(1.06)]" : "[transform:none]"
                  }`
            }`}
          >
            →
          </button>
        </div>
      </Reveal>

      <div className="mx-auto w-full max-w-[650px] px-4">
        <div
          ref={track}
          className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth pt-[6px] pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-full flex-shrink-0 snap-center px-2"
            >
              <div className="rounded-[22px] border border-[#eee] bg-white p-[34px] shadow-[0_14px_36px_rgba(28,28,30,.07)]">
                <div className="mb-4 text-[17px] tracking-[2px] text-[#EE6A22]">★★★★★</div>
                <p className="mx-0 mt-0 mb-[26px] text-[18px] font-medium leading-[1.6] text-[#2c2c2e]">
                  {t.quote}
                </p>
                <div className="flex items-center gap-[14px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                  <div>
                    <div className="font-[Manrope,sans-serif] font-bold">{t.name}</div>
                    <div className="text-[14px] text-[#9a9a9e]">{t.trip}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
