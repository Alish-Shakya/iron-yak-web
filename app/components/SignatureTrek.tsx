import { eyebrow, h2Base, INK, MANROPE } from "./theme";
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
    <section id="experience" style={{ padding: "clamp(50px,7vw,90px) clamp(20px,5vw,64px)" }}>
      <Reveal
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          background: INK,
          borderRadius: 28,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
        }}
      >
        <div style={{ position: "relative", minHeight: 440 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1200&q=80"
            alt="Everest Base Camp trail"
            loading="lazy"
            decoding="async"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            padding: "clamp(34px,4vw,64px)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ ...eyebrow, marginBottom: 16 }}>Signature Trek</div>
          <h2 className="iy-balance" style={{ ...h2Base, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1.06, margin: "0 0 20px" }}>
            The Everest Base Camp Trek
          </h2>
          <p className="iy-pretty" style={{ color: "rgba(255,255,255,.72)", fontSize: 17, lineHeight: 1.65, margin: "0 0 30px" }}>
            Fourteen days along the Khumbu — through Sherpa villages, over swaying suspension bridges, past monasteries
            humming with prayer, to the foot of the world&apos;s highest peak. Small groups, licensed guides, unhurried
            acclimatisation.
          </p>
          <div style={{ display: "flex", gap: 34, marginBottom: 34, flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: MANROPE, fontWeight: 800, fontSize: 30 }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,.55)", fontSize: 13, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <PrimaryButton
            href="#footer"
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
