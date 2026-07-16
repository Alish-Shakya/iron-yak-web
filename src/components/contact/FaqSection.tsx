"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";
const HEADING =
  "mt-0 font-[Manrope,sans-serif] font-extrabold leading-[1.05] tracking-[-0.03em]";

const FAQS = [
  {
    q: "When is the best season to trek in Nepal?",
    a: "Autumn (September to November) and Spring (March to May) offer the clearest skies, most stable weather, and best trail conditions. Winter is clear but very cold at high altitudes, and Summer is monsoon season with rain and landslides.",
  },
  {
    q: "What travel insurance coverage do I need?",
    a: "You must purchase travel insurance that explicitly covers high-altitude trekking up to 6,000 meters and includes emergency helicopter evacuation. Standard policies often cap elevation coverage at 3,000 meters.",
  },
  {
    q: "How do you handle altitude sickness (AMS)?",
    a: "Our itineraries feature careful acclimatization days. Our guides carry pulse oximeters to measure oxygen saturation levels daily, carry wilderness first aid kits, and are trained to recognize symptoms early and coordinate descent immediately if required.",
  },
  {
    q: "Can I customize a trek itinerary?",
    a: "Absolutely! We offer custom-tailored private departures for solo travelers, families, and private groups. You can choose your dates, modify the pace, and add helicopter sightseeing upgrades.",
  },
];

export function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="px-[clamp(20px,5vw,64px)] pt-[60px] pb-[100px] bg-[#FAF9F6]">
      <div className="mx-auto max-w-[800px]">
        <Reveal className="text-center mb-11">
          <div className={EYEBROW}>FAQ</div>
          <h2 className={`${HEADING} text-[clamp(28px,3.8vw,42px)] mb-4`}>Frequently Asked Questions</h2>
          <p className="my-0 text-[16px] text-[#6E6E73]">
            Quick answers to planning details, altitude safety, and bookings.
          </p>
        </Reveal>

        <div className="flex flex-col gap-[14px]">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <Reveal key={idx}>
                <div className="overflow-hidden rounded-2xl border border-[#eee] bg-white [transition:all_0.3s_ease]">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between border-none bg-transparent px-6 py-[22px] text-left cursor-pointer"
                  >
                    <span className="font-[Manrope,sans-serif] font-bold text-[17px] text-[#1C1C1E] pr-5">
                      {faq.q}
                    </span>
                    <span className={`text-[18px] font-semibold ${isOpen ? "text-[#EE6A22]" : "text-[#6E6E73]"}`}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="pt-0 px-6 pb-[22px] text-[15px] leading-[1.6] text-[#6E6E73] border-t border-[#f9f9f9]">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
