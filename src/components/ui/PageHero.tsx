import { Reveal } from "@/components/ui/Reveal";

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  eyebrowText?: string;
}

export function PageHero({
  title,
  subtitle,
  bgImage,
  eyebrowText,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[50vh] min-h-[380px] flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImage}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,30,.6)_0%,rgba(28,28,30,.35)_40%,rgba(28,28,30,.75)_100%)]" />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,64px)] pt-[clamp(80px,10vh,140px)] pb-0 text-white">
        <Reveal>
          {eyebrowText && (
            <div className="mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]">
              {eyebrowText}
            </div>
          )}
          <h1 className="mt-0 mb-4 font-[Manrope,sans-serif] text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            {title}
          </h1>
          <p className="m-0 max-w-[600px] text-[clamp(15px,1.6vw,18px)] leading-[1.5] text-[rgba(255,255,255,0.85)]">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
