import { footerColumns, socials } from "../data/site";
import { INK, MANROPE, ORANGE } from "./theme";

/** Site footer: brand blurb, link columns, newsletter, legal bar. */
export function Footer() {
  return (
    <footer id="footer" style={{ background: INK, color: "#fff", padding: "clamp(56px,7vw,88px) clamp(20px,5vw,64px) 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1.4fr",
            gap: 40,
            paddingBottom: 52,
            borderBottom: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 2,
                fontFamily: MANROPE,
                fontWeight: 800,
                fontSize: 28,
                letterSpacing: "-.02em",
                marginBottom: 16,
              }}
            >
              <span>IRON</span>
              <span style={{ color: ORANGE }}>YAK</span>
            </div>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.65, maxWidth: 300, margin: "0 0 20px" }}>
              Tours &amp; Travels Pvt. Ltd. Crafting authentic Himalayan journeys from Kathmandu since 2011.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="iy-social">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: MANROPE, fontWeight: 700, fontSize: 15, marginBottom: 18 }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "rgba(255,255,255,.6)", fontSize: 15 }}>
                {col.links.map((l) => (
                  <a key={l.label} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div style={{ fontFamily: MANROPE, fontWeight: 700, fontSize: 15, marginBottom: 18 }}>Trail notes</div>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.55, margin: "0 0 14px" }}>
              Seasonal routes and travel tips, a few times a year.
            </p>
            <div
              style={{
                display: "flex",
                gap: 8,
                background: "rgba(255,255,255,.08)",
                borderRadius: 100,
                padding: "5px 5px 5px 18px",
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "'Inter',sans-serif",
                }}
              />
              <button
                style={{
                  border: "none",
                  background: "#EE6A22",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "10px 18px",
                  borderRadius: 100,
                  cursor: "pointer",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 26,
            color: "rgba(255,255,255,.4)",
            fontSize: 13,
          }}
        >
          <div>© 2026 Iron Yak Tours &amp; Travels Pvt. Ltd. · Thamel, Kathmandu, Nepal</div>
          <div style={{ display: "flex", gap: 22 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">+977 1 4XXXXXX</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
