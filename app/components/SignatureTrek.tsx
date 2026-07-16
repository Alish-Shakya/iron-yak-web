import { Reveal } from "./Reveal";
import { PrimaryButton } from "./buttons";

const stats = [
  { value: "5,364m", label: "Max altitude" },
  { value: "14 days", label: "Duration" },
  { value: "Max 8", label: "Group size" },
];

/** Dark split panel spotlighting the flagship Everest Base Camp trek. */
export function SignatureTrek() {
  return (
    <section id="experience" className="px-[clamp(20px,5vw,64px)] py-[clamp(50px,7vw,90px)]">
      <Reveal className="mx-auto my-0 grid max-w-[1200px] grid-cols-[1.05fr_1fr] overflow-hidden rounded-[28px] bg-[#1C1C1E]">
        <div className="relative min-h-[440px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1200&q=80"
            alt="Everest Base Camp trail"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-[clamp(34px,4vw,64px)] text-white">
          <div className="mb-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]">Signature Trek</div>
          <h2 className="mt-0 mb-5 font-[Manrope,sans-serif] text-[clamp(30px,3.6vw,46px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-balance">
            The Everest Base Camp Trek
          </h2>
          <p className="mt-0 mb-[30px] text-[17px] leading-[1.65] text-[rgba(255,255,255,.72)] text-pretty">
            Fourteen days along the Khumbu — through Sherpa villages, over swaying suspension bridges, past monasteries
            humming with prayer, to the foot of the world&apos;s highest peak. Small groups, licensed guides, unhurried
            acclimatisation.
          </p>
          <div className="mb-[34px] flex flex-wrap gap-[34px]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-[Manrope,sans-serif] text-[30px] font-extrabold">{s.value}</div>
                <div className="mt-0.5 text-[13px] text-[rgba(255,255,255,.55)]">{s.label}</div>
              </div>
            ))}
          </div>
          <PrimaryButton
            href="/destinations/everest-base-camp"
            padding="15px 30px"
            shadow="0 10px 26px rgba(238,106,34,.36)"
            hoverShadow="0 10px 26px rgba(238,106,34,.36)"
            style={{ alignSelf: "flex-start" }}
          >
            View the itinerary →
          </PrimaryButton>
        </div>
      </Reveal>
    </section>
  );
}
