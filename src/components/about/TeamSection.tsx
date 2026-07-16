import { Reveal } from "@/components/ui/Reveal";

const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";
const HEADING =
  "mt-0 font-[Manrope,sans-serif] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em]";
const SECTION_INTRO = "mx-auto my-0 max-w-[520px] text-[16px] text-[#6E6E73]";

const TEAM = [
  {
    name: "Pasang Nuru Sherpa",
    role: "Lead Expedition Guide",
    bio: "Pasang has summited Mt. Everest 8 times and Ama Dablam 14 times. He has led Khumbu treks for over 15 years.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lhakpa Gyalzen Sherpa",
    role: "Senior Trek Director",
    bio: "Born in Rolwaling Valley, Lhakpa manages all mountain logistics, permits, and operations from our Kathmandu office.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Rita Sen",
    role: "Expedition Medical Advisor",
    bio: "Rita is a specialist in high-altitude medicine and wilderness rescue, overseeing guide training and health protocols.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

export function TeamSection() {
  return (
    <section className="px-[clamp(20px,5vw,64px)] pt-[50px] pb-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-[50px] text-center">
          <div className={EYEBROW}>Our Team</div>
          <h2 className={`${HEADING} mb-4`}>Led by Himalayan experts</h2>
          <p className={SECTION_INTRO}>
            Meet the certified guides and directors who make every
            high-altitude journey safe and unforgettable.
          </p>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {TEAM.map((t, idx) => (
            <Reveal
              key={idx}
              className="overflow-hidden rounded-[20px] border border-[#eee] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
            >
              <div className="relative h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-full w-full object-cover hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mt-0 mb-1 font-[Manrope,sans-serif] text-[19px] font-bold text-[#1C1C1E]">
                  {t.name}
                </h3>
                <div className="mb-3 text-[13px] font-semibold uppercase tracking-[0.05em] text-[#EE6A22]">
                  {t.role}
                </div>
                <p className="my-0 text-[14px] leading-[1.6] text-[#6E6E73]">
                  {t.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
