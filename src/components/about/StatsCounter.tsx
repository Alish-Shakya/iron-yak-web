import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/home";

export function StatsCounter() {
  return (
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
  );
}
