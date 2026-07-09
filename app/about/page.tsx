import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { stats } from "../data/site";
import { eyebrow, h2Base, MANROPE, MUTED, ORANGE } from "../components/theme";

const VALUES = [
  {
    icon: "⛨",
    title: "Safety as Priority",
    desc: "Oxygen cylinders, satellite communications, and certified medical protocols accompany every group on high-altitude routes.",
  },
  {
    icon: "◎",
    title: "Community Focus",
    desc: "We stay in family-run tea houses and work with local porters, keeping tourism revenue directly in the valleys we explore.",
  },
  {
    icon: "✦",
    title: "Environmental Care",
    desc: "From strict waste management to carbon offsets, we tread lightly to protect the fragile Himalayan ecosystems.",
  },
];

const TEAM = [
  {
    name: "Pasang Nuru Sherpa",
    role: "Lead Expedition Guide",
    bio: "Pasang has summited Mt. Everest 8 times and Ama Dablam 14 times. He has led Khumbu treks for over 15 years.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lhakpa Gyalzen Sherpa",
    role: "Senior Trek Director",
    bio: "Born in Rolwaling Valley, Lhakpa manages all mountain logistics, permits, and operations from our Kathmandu office.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Rita Sen",
    role: "Expedition Medical Advisor",
    bio: "Rita is a specialist in high-altitude medicine and wilderness rescue, overseeing guide training and health protocols.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story & Values"
        subtitle="Crafting authentic Himalayan journeys since 2011 with certified Sherpas and local experts."
        bgImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="About Iron Yak"
      />

      {/* Story Split Section */}
      <section style={{ padding: "80px clamp(20px,5vw,64px) 50px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }}>
            <Reveal>
              <div style={{ ...eyebrow, marginBottom: 12 }}>Our Heritage</div>
              <h2 style={{ ...h2Base, fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 20 }}>
                Born in Kathmandu, raised in the high peaks
              </h2>
              <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.65, marginBottom: 16 }}>
                Iron Yak was founded in 2011 by a group of passionate Sherpa guides and travel planners who wanted to establish a new standard for Himalayan adventure.
              </p>
              <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.65, marginBottom: 0 }}>
                We believe that trekking should be a journey of connection — to the dramatic topography, to the ancient villages, and to the warm, authentic hospitality of the mountain people. We don&apos;t just lead tours; we curate highly personalized, safe, and deeply respectful explorations.
              </p>
            </Reveal>
            <Reveal style={{ position: "relative", borderRadius: 24, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                alt="Trekking team with mountain view"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Counter Band */}
      <section style={{ padding: "40px clamp(20px,5vw,64px)", background: "#FAF9F6" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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

      {/* Core Values Section */}
      <section style={{ padding: "80px clamp(20px,5vw,64px) 50px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ ...eyebrow, marginBottom: 12 }}>Our Principles</div>
            <h2 style={{ ...h2Base, fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 16 }}>The values that guide our steps</h2>
            <p style={{ color: MUTED, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
              Every trek we organize is designed with responsibility, local empowerment, and absolute safety at its core.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {VALUES.map((val, idx) => (
              <Reveal
                key={idx}
                style={{
                  background: "#fff",
                  border: "1px solid #eee",
                  borderRadius: 20,
                  padding: 36,
                  boxShadow: "0 8px 24px rgba(28,28,30,.03)",
                  transition: "transform .3s ease",
                }}
              >
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
                    marginBottom: 20,
                  }}
                >
                  {val.icon}
                </div>
                <h3 style={{ fontFamily: MANROPE, fontSize: 19, fontWeight: 700, margin: "0 0 10px", color: "#1C1C1E" }}>{val.title}</h3>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6, margin: 0 }}>{val.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "50px clamp(20px,5vw,64px) 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ ...eyebrow, marginBottom: 12 }}>Our Team</div>
            <h2 style={{ ...h2Base, fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 16 }}>Led by Himalayan experts</h2>
            <p style={{ color: MUTED, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
              Meet the certified guides and directors who make every high-altitude journey safe and unforgettable.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {TEAM.map((t, idx) => (
              <Reveal
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid #eee",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ height: 280, position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: MANROPE, fontSize: 19, fontWeight: 700, margin: "0 0 4px", color: "#1C1C1E" }}>{t.name}</h3>
                  <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", color: ORANGE, fontWeight: 600, marginBottom: 12 }}>
                    {t.role}
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{t.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
