import { features, stats } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

/** Value props grid + animated headline stats, on a warm off-white band. */
export function WhyIronYak() {
  return (
    <section id="why" className="px-[clamp(20px,5vw,64px)] py-[clamp(50px,7vw,90px)] bg-[#F6F5F3]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-[52px] text-center">
          <div className="mb-[14px] text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]">Why Iron Yak</div>
          <h2 className="mx-auto my-0 max-w-[680px] text-balance font-[Manrope,sans-serif] text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            Trusted footing on every trail
          </h2>
        </Reveal>

        <div className="iy-why-grid">
          {features.map((f) => (
            <Reveal
              key={f.title}
              className="bg-white rounded-[20px] p-8 shadow-[0_8px_24px_rgba(28,28,30,0.05)] [transition:transform_.4s_ease,box-shadow_.4s_ease]! hover:-translate-y-1.5! hover:shadow-[0_20px_44px_rgba(28,28,30,0.1)]"
            >
              <div className="mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[rgba(238,106,34,0.1)] text-[24px] text-[#EE6A22]">
                {f.icon}
              </div>
              <div className="mb-2 font-[Manrope,sans-serif] text-[19px] font-bold">{f.title}</div>
              <div className="text-[15px] leading-[1.6] text-[#6E6E73]">{f.desc}</div>
            </Reveal>
          ))}

          <Reveal className="iy-stats grid min-w-0 grid-cols-2 content-center gap-x-5 gap-y-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center text-center">
                <Counter target={s.target} suffix={s.suffix} />
                <div className="mt-1 text-[15px] font-medium text-[#6E6E73]">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
