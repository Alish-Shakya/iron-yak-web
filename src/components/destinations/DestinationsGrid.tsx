import Link from "next/link";
import { destinations } from "@/data/destinations";
import { Reveal } from "@/components/ui/Reveal";

export function DestinationsGrid() {
  return (
    <section className="px-[clamp(20px,5vw,64px)] pt-[60px] pb-[30px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[22px]">
          {destinations.map((d) => (
            <Reveal key={d.title}>
              <Link href={`/destinations/${d.slug}`} className="block no-underline">
                <div className="group relative block aspect-[4/5] cursor-pointer overflow-hidden rounded-[22px] shadow-[0_12px_30px_rgba(28,28,30,0.1)] [transition:transform_.5s_cubic-bezier(.16,.84,.44,1),box-shadow_.5s_ease] hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(28,28,30,0.2)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.img}
                    alt={d.title}
                    loading="lazy"
                    decoding="async"
                    className="block h-full w-full object-cover [transition:transform_.8s_cubic-bezier(.16,.84,.44,1)] group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_42%,rgba(0,0,0,.78)_100%)]" />
                  <div className="absolute bottom-[22px] left-[22px] right-[22px] text-white">
                    <div className="mb-3 inline-block rounded-[100px] bg-[rgba(238,106,34,.92)] px-[12px] py-[5px] text-[12px] font-semibold">
                      {d.badge}
                    </div>
                    <div className="font-[Manrope,sans-serif] text-[26px] font-extrabold tracking-[-.02em]">
                      {d.title}
                    </div>
                    <div className="mt-1 text-[14px] text-[rgba(255,255,255,.85)]">from {d.price}</div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
