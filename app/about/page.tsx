import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { stats } from "../data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Iron Yak Tours & Travels — founded in 2011 by Sherpa guides in Kathmandu. Certified local experts crafting authentic Himalayan treks with safety and community at heart.",
  openGraph: {
    title: "About Iron Yak Tours & Travels",
    description:
      "Founded in 2011 by Sherpa guides. Certified local experts crafting authentic Himalayan treks with safety and community at heart.",
  },
};

/** Small uppercase section eyebrow (matches `eyebrow` in theme.ts + a 12px gap). */
const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";

/** Big Manrope section heading (matches `h2Base` in theme.ts + shared font size). */
const HEADING =
  "mt-0 font-[Manrope,sans-serif] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em]";

/** Centered muted intro paragraph under a section heading. */
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story & Values"
        subtitle="Crafting authentic Himalayan journeys since 2011 with certified Sherpas and local experts."
        bgImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="About Iron Yak"
      />

      {/* Story Split Section */}
      <section className="px-[clamp(20px,5vw,64px)] pt-20 pb-[50px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-[1fr_1fr] items-center gap-[50px]">
            <Reveal>
              <div className={EYEBROW}>Our Heritage</div>
              <h2 className={`${HEADING} mb-5`}>
                Born in Kathmandu, raised in the high peaks
              </h2>
              <p className="mb-4 text-[16px] leading-[1.65] text-[#6E6E73]">
                Iron Yak was founded in 2011 by a group of passionate Sherpa
                guides and travel planners who wanted to establish a new
                standard for Himalayan adventure.
              </p>
              <p className="mb-0 text-[16px] leading-[1.65] text-[#6E6E73]">
                We believe that trekking should be a journey of connection — to
                the dramatic topography, to the ancient villages, and to the
                warm, authentic hospitality of the mountain people. We
                don&apos;t just lead tours; we curate highly personalized, safe,
                and deeply respectful explorations.
              </p>
            </Reveal>
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                alt="Trekking team with mountain view"
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Counter Band */}
      <section className="bg-[#FAF9F6] px-[clamp(20px,5vw,64px)] py-10">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter target={s.target} suffix={s.suffix} />
                <div className="mt-1 text-[15px] font-medium text-[#6E6E73]">
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Core Values Section */}
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

      {/* Team Section */}
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
    </>
  );
}
