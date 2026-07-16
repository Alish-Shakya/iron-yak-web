import Link from "next/link";
import { destinations } from "../data/site";
import { Reveal } from "./Reveal";

/** "Featured Destinations" — a responsive grid of trek cards. */
export function Destinations() {
  return (
    <section id="destinations" className="px-[clamp(20px,5vw,64px)] pt-[clamp(80px,10vw,140px)] pb-[clamp(50px,7vw,90px)]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-[14px] text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]">Featured Destinations</div>
            <h2 className="m-0 max-w-[640px] font-[Manrope,sans-serif] text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance">
              Where the Himalaya opens its doors
            </h2>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 whitespace-nowrap font-[Manrope,sans-serif] text-[16px] font-bold text-[#EE6A22] no-underline"
          >
            View all destinations
            <span aria-hidden className="text-[18px] leading-none">→</span>
          </Link>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[22px]">
          {destinations.slice(1, 4).map((d) => (
            <Reveal key={d.title}>
              <Link
                href={`/destinations/${d.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[22px] no-underline shadow-[0_12px_30px_rgba(28,28,30,0.1)] [transition:transform_.5s_cubic-bezier(.16,.84,.44,1),box-shadow_.5s_ease] hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(28,28,30,0.2)]"
              >
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
                  <div className="mb-3 inline-block rounded-[100px] bg-[rgba(238,106,34,.92)] px-3 py-[5px] text-[12px] font-semibold">
                    {d.badge}
                  </div>
                  <div className="font-[Manrope,sans-serif] text-[26px] font-extrabold tracking-[-0.02em]">
                    {d.title}
                  </div>
                  <div className="mt-1 text-[14px] text-[rgba(255,255,255,.85)]">from {d.price}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
