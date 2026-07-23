import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/buttons";

export function CustomTrekCta() {
  return (
    <section className="px-[clamp(20px,5vw,64px)] pt-[30px] pb-20">
      <Reveal className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-10 rounded-3xl bg-[#F6F5F3] px-[clamp(20px,6vw,80px)] py-10 md:py-[52px]">
        <div className="flex-1 min-w-[280px]">
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
  );
}
