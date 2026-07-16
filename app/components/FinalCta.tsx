import { Reveal } from "./Reveal";
import { PrimaryButton } from "./buttons";

/** Full-bleed closing call-to-action over a sunset photo. */
export function FinalCta() {
  return (
    <section className="pt-0 px-[clamp(20px,5vw,64px)] pb-[clamp(60px,8vw,110px)]">
      <Reveal className="relative mx-auto my-0 flex min-h-[460px] max-w-[1300px] items-center overflow-hidden rounded-[28px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80"
          alt="Sunset over the Himalaya"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,28,30,.78)_0%,rgba(28,28,30,.4)_60%,rgba(28,28,30,.2)_100%)]" />
        <div className="relative z-[2] max-w-[640px] p-[clamp(40px,6vw,80px)] text-white">
          <h2 className="text-balance mt-0 mb-[20px] font-[Manrope,sans-serif] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
            Your Himalayan adventure starts here
          </h2>
          <p className="mt-0 mb-[34px] max-w-[480px] text-[18px] leading-[1.6] text-[rgba(255,255,255,0.86)]">
            Tell us where you dream of going. We&apos;ll craft the route, handle the details, and walk it with you.
          </p>
          <PrimaryButton
            href="#footer"
            padding="17px 36px"
            fontSize={17}
            shadow="0 12px 34px rgba(238,106,34,.44)"
            hoverShadow="0 18px 44px rgba(238,106,34,.55)"
          >
            Book Your Journey →
          </PrimaryButton>
        </div>
      </Reveal>
    </section>
  );
}
