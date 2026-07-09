import { features, stats } from "../data/site";
import { eyebrow, h2Base, MANROPE, MUTED, ORANGE } from "./theme";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

/** Value props grid + animated headline stats, on a warm off-white band. */
export function WhyIronYak() {
  return (
    <section id="why" style={{ padding: "clamp(50px,7vw,90px) clamp(20px,5vw,64px)", background: "#F6F5F3" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ ...eyebrow, marginBottom: 14 }}>Why Iron Yak</div>
          <h2 className="iy-balance" style={{ ...h2Base, fontSize: "clamp(32px,4.4vw,54px)", margin: "0 auto", maxWidth: 680 }}>
            Trusted footing on every trail
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
            gap: 18,
            marginBottom: 64,
          }}
        >
          {features.map((f) => (
            <Reveal key={f.title} className="iy-feat">
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(238,106,34,.1)",
                  color: ORANGE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 18,
                }}
              >
                {f.icon}
              </div>
              <div style={{ fontFamily: MANROPE, fontWeight: 700, fontSize: 19, marginBottom: 8 }}>{f.title}</div>
              <div style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>{f.desc}</div>
            </Reveal>
          ))}
        </div>

        <Reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 20,
            textAlign: "center",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <div style={{ color: MUTED, fontSize: 15, fontWeight: 500, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
