import { Reveal } from "@/components/ui/Reveal";

const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";
const HEADING =
  "mt-0 font-[Manrope,sans-serif] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em]";
const SECTION_INTRO = "mx-auto my-0 max-w-[540px] text-[16px] text-[#6E6E73]";

const SERVICES = [
  {
    icon: "✓",
    title: "Guided Expeditions",
    desc: "Government-certified, bilingual Sherpa-led teams who know every ridge and tea house along the trail by name.",
  },
  {
    icon: "☎",
    title: "Permits & Logistics",
    desc: "All National Park entries, TIMS permits, domestic flights, and private Kathmandu airport transfers handled seamlessly.",
  },
  {
    icon: "✦",
    title: "Custom Itineraries",
    desc: "Personalized routes shaped around your pace, physical fitness, photography goals, and travel season.",
  },
  {
    icon: "⛨",
    title: "Helicopter Rescue & Support",
    desc: "Direct coordination with emergency helicopter networks and oxygen delivery support on high-altitude routes.",
  },
  {
    icon: "◎",
    title: "Tea House Stays",
    desc: "Vetted family lodges with warm blankets, locally sourced organic food, and comfortable rest settings.",
  },
  {
    icon: "♦",
    title: "Premium Gear Rental",
    desc: "Rental of certified expedition-grade sleeping bags, down jackets, trekking poles, and GPS trackers.",
  },
];

export function ServicesGrid() {
  return (
    <section className="px-[clamp(20px,5vw,64px)] pt-20 pb-[50px]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-[52px] text-center">
          <div className={EYEBROW}>Services Index</div>
          <h2 className={`${HEADING} mb-4`}>End-to-end trekking support</h2>
          <p className={SECTION_INTRO}>
            We handle the complex planning and mountain safety details, so you
            can focus entirely on the trail.
          </p>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[22px]">
          {SERVICES.map((s, idx) => (
            <Reveal
              key={idx}
              className="bg-white rounded-[20px] p-8 shadow-[0_8px_24px_rgba(28,28,30,0.05)] [transition:transform_.4s_ease,box-shadow_.4s_ease]! hover:-translate-y-1.5! hover:shadow-[0_20px_44px_rgba(28,28,30,0.1)]"
            >
              <div className="mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[rgba(238,106,34,0.1)] text-[24px] text-[#EE6A22]">
                {s.icon}
              </div>
              <div className="mb-2 font-[Manrope,sans-serif] text-[19px] font-bold text-[#1C1C1E]">
                {s.title}
              </div>
              <div className="text-[15px] leading-[1.6] text-[#6E6E73]">
                {s.desc}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
