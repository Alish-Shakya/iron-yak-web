import { Reveal } from "@/components/ui/Reveal";
import type { Itinerary } from "@/data/itineraries";

export function OverviewStats({ itinerary }: { itinerary: Itinerary }) {
  return (
    <section className="pt-7 px-[clamp(20px,5vw,64px)] pb-[30px]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-5 bg-[#F6F5F3] rounded-[20px] p-6 md:p-10 text-center">
          <div>
            <div className="text-[13px] uppercase tracking-[0.1em] text-[#6E6E73] font-semibold">Duration</div>
            <div className="font-[Manrope,sans-serif] text-[clamp(22px,4.5vw,32px)] font-extrabold text-[#1C1C1E] mt-2">{itinerary.duration}</div>
          </div>
          <div>
            <div className="text-[13px] uppercase tracking-[0.1em] text-[#6E6E73] font-semibold">Max Altitude</div>
            <div className="font-[Manrope,sans-serif] text-[clamp(22px,4.5vw,32px)] font-extrabold text-[#1C1C1E] mt-2">{itinerary.maxAltitude}</div>
          </div>
          <div>
            <div className="text-[13px] uppercase tracking-[0.1em] text-[#6E6E73] font-semibold">Difficulty</div>
            <div className="font-[Manrope,sans-serif] text-[clamp(22px,4.5vw,32px)] font-extrabold text-[#EE6A22] mt-2">{itinerary.difficulty}</div>
          </div>
          <div>
            <div className="text-[13px] uppercase tracking-[0.1em] text-[#6E6E73] font-semibold">Group Size</div>
            <div className="font-[Manrope,sans-serif] text-[clamp(22px,4.5vw,32px)] font-extrabold text-[#1C1C1E] mt-2">{itinerary.groupSize}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
