import { destinations } from "../data/site";
import { eyebrow, h2Base, MANROPE, MUTED } from "./theme";
import { Reveal } from "./Reveal";

/** "Featured Destinations" — a responsive grid of trek cards. */
export function Destinations() {
  return (
    <section id="destinations" style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px) clamp(50px,7vw,90px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ ...eyebrow, marginBottom: 14 }}>Featured Destinations</div>
            <h2 className="iy-balance" style={{ ...h2Base, fontSize: "clamp(32px,4.4vw,54px)", maxWidth: 640 }}>
              Where the Himalaya opens its doors
            </h2>
          </div>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.6, maxWidth: 340, margin: 0 }}>
            Six regions, each with its own rhythm — from glacier-fed base camps to jungle lowlands and lakeside calm.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: 22 }}>
          {destinations.map((d) => (
            <Reveal key={d.title}>
              <a href="#" className="iy-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.title} loading="lazy" decoding="async" />
                <div className="iy-card-scrim" />
                <div style={{ position: "absolute", left: 22, right: 22, bottom: 22, color: "#fff" }}>
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(238,106,34,.92)",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "5px 12px",
                      borderRadius: 100,
                      marginBottom: 12,
                    }}
                  >
                    {d.badge}
                  </div>
                  <div style={{ fontFamily: MANROPE, fontWeight: 800, fontSize: 26, letterSpacing: "-.02em" }}>
                    {d.title}
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,.85)", marginTop: 4 }}>from {d.price}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
