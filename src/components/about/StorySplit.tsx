import { Reveal } from "@/components/ui/Reveal";

const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";
const HEADING =
  "mt-0 font-[Manrope,sans-serif] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em]";

export function StorySplit() {
  return (
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
  );
}
