import { Reveal } from "@/components/ui/Reveal";

const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";
const HEADING =
  "mt-0 font-[Manrope,sans-serif] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em]";
const SECTION_INTRO = "mx-auto my-0 max-w-[520px] text-[16px] text-[#6E6E73]";

const VALUES = [
  {
    icon: "⛨",
    title: "Safety as Priority",
    desc: "Oxygen cylinders, satellite communications, and certified medical protocols accompany every group on high-altitude routes.",
  },
  {
    icon: "◎",
    title: "Community Focus",
    desc: "We stay in family-run tea houses and work with local porters, keeping tourism revenue directly in the valleys we explore.",
  },
  {
    icon: "✦",
    title: "Environmental Care",
    desc: "From strict waste management to carbon offsets, we tread lightly to protect the fragile Himalayan ecosystems.",
  },
];

export function CoreValues() {
  return (
    <section className="px-[clamp(20px,5vw,64px)] pt-20 pb-[50px]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-[50px] text-center">
          <div className={EYEBROW}>Our Principles</div>
          <h2 className={`${HEADING} mb-4`}>
            The values that guide our steps
          </h2>
          <p className={SECTION_INTRO}>
            Every trek we organize is designed with responsibility, local
            empowerment, and absolute safety at its core.
          </p>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {VALUES.map((val, idx) => (
            <Reveal
              key={idx}
              className="rounded-[20px] border border-[#eee] bg-white p-9 shadow-[0_8px_24px_rgba(28,28,30,0.03)] [transition:transform_0.3s_ease]!"
            >
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[rgba(238,106,34,0.1)] text-[24px] text-[#EE6A22]">
                {val.icon}
              </div>
              <h3 className="mt-0 mb-2.5 font-[Manrope,sans-serif] text-[19px] font-bold text-[#1C1C1E]">
                {val.title}
              </h3>
              <p className="my-0 text-[15px] leading-[1.6] text-[#6E6E73]">
                {val.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
