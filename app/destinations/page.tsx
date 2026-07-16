"use client";

import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { destinations } from "../data/site";
import { Reveal } from "../components/Reveal";
import { PrimaryButton } from "../components/buttons";

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Our Destinations"
        subtitle="Choose your next Himalayan challenge, from iconic base camps to hidden valleys and jungle safaris."
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="Where we go"
      />

      {/* Destinations Grid */}
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

      {/* Custom Trek Builder CTA */}
      <section className="px-[clamp(20px,5vw,64px)] pt-[30px] pb-20">
        <Reveal className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-10 rounded-3xl bg-[#F6F5F3] px-[clamp(30px,6vw,80px)] py-[52px]">
          <div className="flex-[1_1_500px]">
            <h3 className="mt-0 mb-3 font-[Manrope,sans-serif] text-[clamp(26px,3vw,36px)] font-extrabold text-[#1C1C1E]">
              Looking for a custom experience?
            </h3>
            <p className="my-0 max-w-[580px] text-[16px] leading-[1.6] text-[#6E6E73]">
              We can design a tailor-made trekking itinerary that fits your specific fitness level, timeframe, and goals. Speak with our travel experts to get started.
            </p>
          </div>
          <PrimaryButton
            href="/contact?type=custom"
            padding="16px 32px"
            shadow="0 8px 24px rgba(238,106,34,.25)"
            hoverShadow="0 14px 34px rgba(238,106,34,.35)"
          >
            Request Custom Itinerary
          </PrimaryButton>
        </Reveal>
      </section>
    </>
  );
}
