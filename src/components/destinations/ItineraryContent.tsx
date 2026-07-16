"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RouteMap } from "@/components/maps/RouteMap";
import type { Itinerary } from "@/data/itineraries";

export function ItineraryContent({ itinerary }: { itinerary: Itinerary }) {
  const [activeDay, setActiveDay] = useState<number | null>(0);

  return (
    <section className="pt-[30px] px-[clamp(20px,5vw,64px)] pb-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-[50px] items-start">

          <div>
            <Reveal className="mb-8">
              <div className="mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]">Trek Itinerary</div>
              <h2 className="mt-0 font-[Manrope,sans-serif] text-[clamp(28px,3.8vw,42px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4">Day-by-Day Journey</h2>
              <p className="text-[#6E6E73] text-[16px] leading-[1.6] m-0">
                A perfectly paced route for optimal acclimatization, led by certified guides.
              </p>
            </Reveal>

            <div className="flex flex-col gap-3.5">
              {itinerary.days.map((day, idx) => {
                const isOpen = activeDay === idx;
                return (
                  <Reveal key={idx}>
                    <div
                      className={`overflow-hidden rounded-2xl border border-[#eee] [transition:all_.3s_ease] ${isOpen ? "bg-[#FAF9F6] shadow-[0_8px_24px_rgba(28,28,30,0.05)]" : "bg-white shadow-none"}`}
                    >
                      <button
                        onClick={() => setActiveDay(isOpen ? null : idx)}
                        className="w-full px-6 py-5 flex items-center justify-between border-none bg-transparent cursor-pointer text-left"
                      >
                        <div className="flex items-baseline gap-3.5 flex-wrap">
                          <span className="text-[14px] font-bold text-[#EE6A22] uppercase tracking-[0.05em]">
                            {day.day}
                          </span>
                          <span className="font-[Manrope,sans-serif] font-bold text-[17px] text-[#1C1C1E]">
                            {day.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[12px] text-[#6E6E73] font-medium">{day.elevation}</span>
                          <span className={`text-[16px] ${isOpen ? "text-[#EE6A22]" : "text-[#6E6E73]"}`}>{isOpen ? "−" : "+"}</span>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pt-0 pb-5 text-[#6E6E73] text-[15px] leading-[1.6] border-t border-[#f6f6f6]">
                          {day.desc}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="sticky top-[120px]">
            <Reveal className="bg-[#1C1C1E] rounded-3xl py-10 px-[clamp(20px,4vw,48px)] text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#EE6A22]" />
                <span className="font-[Manrope,sans-serif] font-bold text-[16px] tracking-[0.02em] text-white">
                  {itinerary.routeLabel} Route
                </span>
              </div>
              <p className="text-[rgba(255,255,255,0.6)] text-[14px] leading-[1.5] mt-0 mx-0 mb-8">
                {itinerary.routeMeta}
              </p>

              <div className="[filter:drop-shadow(0_2px_10px_rgba(0,0,0,.45))]">
                <RouteMap pathD={itinerary.pathD} stops={itinerary.stops} running={true} reduce={false} />
              </div>

              <div className="mt-10 border-t border-[rgba(255,255,255,0.12)] pt-[30px]">
                <div className="text-[13px] uppercase text-[rgba(255,255,255,0.4)] font-semibold tracking-[0.05em] mb-3.5">
                  Trip Inclusions
                </div>
                <ul className="grid grid-cols-[1fr] gap-x-[18px] gap-y-[10px] p-0 m-0 list-none text-[14px] text-[rgba(255,255,255,0.8)]">
                  {itinerary.inclusions.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
