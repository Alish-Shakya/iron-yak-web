import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { PrimaryButton } from "../components/buttons";
import { eyebrow, h2Base, INK, MANROPE, MUTED, ORANGE } from "../components/theme";

const SERVICES = [
  {
    icon: "✓",
    title: "Guided Expeditions",
    desc: "Government-certified, bilingual Sherpa-led teams who know every ridge and tea house along the trail by name.",
  },
  {
    icon: "☎",
    title: "Permits & Logistics",
    desc: "All National Park entries, TIMS permits, domestic flights, and private Kathmandu airport transfers handled seamlessly.",
  },
  {
    icon: "✦",
    title: "Custom Itineraries",
    desc: "Personalized routes shaped around your pace, physical fitness, photography goals, and travel season.",
  },
  {
    icon: "⛨",
    title: "Helicopter Rescue & Support",
    desc: "Direct coordination with emergency helicopter networks and oxygen delivery support on high-altitude routes.",
  },
  {
    icon: "◎",
    title: "Tea House Stays",
    desc: "Vetted family lodges with warm blankets, locally sourced organic food, and comfortable rest settings.",
  },
  {
    icon: "♦",
    title: "Premium Gear Rental",
    desc: "Rental of certified expedition-grade sleeping bags, down jackets, trekking poles, and GPS trackers.",
  },
];

const PACKAGES = [
  {
    name: "Classic Trek",
    price: "NRP 1,490",
    desc: "Perfect for independent travelers looking for safety and support on standard routes.",
    features: [
      "Certified local guide",
      "All required park permits",
      "Standard tea house stays",
      "Kathmandu airport transfers",
      "First aid and altitude protocol",
    ],
    ctaText: "Choose Classic",
    popular: false,
  },
  {
    name: "Premium Experience",
    price: "NRP 2,290",
    desc: "Our most popular tier. Elevates comfort and adds peace of mind with flight credits and porter support.",
    features: [
      "Lead guide + dedicated porters",
      "Premium tea house rooms (with private bath)",
      "Daily hot showers & charging credits",
      "Kathmandu boutique hotel (3 nights)",
      "Lukla helicopter upgrade option",
      "All meals on trail included",
    ],
    ctaText: "Choose Premium",
    popular: true,
  },
  {
    name: "Custom Tailored",
    price: "Custom",
    desc: "Designed from scratch. Best for private families, photography tours, or peak ascents.",
    features: [
      "Custom dates & group sizes",
      "Dedicated medical consultant",
      "Flexible, unhurried acclimatization",
      "Special permit coordination",
      "Private vehicle and guide escort",
      "Satellite tracker rental",
    ],
    ctaText: "Inquire Custom",
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Himalayan logistics, safety networks, and tailored trek designs for a seamless adventure."
        bgImage="https://images.unsplash.com/photo-1472791108553-c9405341e398?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="What we offer"
      />

      {/* Services Grid Section */}
      <section style={{ padding: "80px clamp(20px,5vw,64px) 50px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ ...eyebrow, marginBottom: 12 }}>Services Index</div>
            <h2 style={{ ...h2Base, fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 16 }}>
              End-to-end trekking support
            </h2>
            <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
              We handle the complex planning and mountain safety details, so you can focus entirely on the trail.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
              gap: 22,
            }}
          >
            {SERVICES.map((s, idx) => (
              <Reveal key={idx} className="iy-feat">
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
                  {s.icon}
                </div>
                <div style={{ fontFamily: MANROPE, fontWeight: 700, fontSize: 19, marginBottom: 8, color: "#1C1C1E" }}>
                  {s.title}
                </div>
                <div style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>{s.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section style={{ padding: "50px clamp(20px,5vw,64px) 100px", background: "#FAF9F6" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ ...eyebrow, marginBottom: 12 }}>Trek Packages</div>
            <h2 style={{ ...h2Base, fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 16 }}>Choose your level of comfort</h2>
            <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
              Whether you want a classic adventure or full-service convenience, we have a package tier built for you.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 26,
              alignItems: "stretch",
            }}
          >
            {PACKAGES.map((pkg, idx) => (
              <Reveal
                key={idx}
                style={{
                  background: pkg.popular ? INK : "#fff",
                  color: pkg.popular ? "#fff" : "#1C1C1E",
                  borderRadius: 24,
                  padding: "44px 34px",
                  border: "1px solid #eee",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: pkg.popular
                    ? "0 20px 40px rgba(28,28,30,.2)"
                    : "0 10px 30px rgba(0,0,0,0.03)",
                  position: "relative",
                  transform: pkg.popular ? "translateY(-8px)" : "none",
                }}
              >
                {pkg.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      background: ORANGE,
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 100,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Best Value
                  </div>
                )}
                <div>
                  <h3 style={{ fontFamily: MANROPE, fontSize: 22, fontWeight: 800, margin: "0 0 10px" }}>{pkg.name}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
                    <span style={{ fontSize: 36, fontWeight: 800, fontFamily: MANROPE, color: pkg.popular ? "#fff" : "#EE6A22" }}>
                      {pkg.price}
                    </span>
                    {pkg.price !== "Custom" && (
                      <span style={{ fontSize: 14, color: pkg.popular ? "rgba(255,255,255,.6)" : MUTED }}>/ person</span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.5,
                      margin: "0 0 28px",
                      color: pkg.popular ? "rgba(255,255,255,.7)" : MUTED,
                    }}
                  >
                    {pkg.desc}
                  </p>

                  <div
                    style={{
                      borderTop: pkg.popular ? "1px solid rgba(255,255,255,.12)" : "1px solid #f2f2f2",
                      paddingTop: 24,
                      marginBottom: 34,
                    }}
                  >
                    <ul style={{ display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: 0, listStyle: "none", fontSize: 14 }}>
                      {pkg.features.map((feat, fidx) => (
                        <li key={fidx} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ color: ORANGE, fontWeight: 700 }}>✓</span>
                          <span style={{ color: pkg.popular ? "rgba(255,255,255,.85)" : "#3A3A3C" }}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <PrimaryButton
                  href="/contact?package="
                  padding="14px 28px"
                  fontSize={14}
                  shadow={pkg.popular ? "0 8px 24px rgba(238,106,34,.3)" : "none"}
                  hoverShadow={pkg.popular ? "0 12px 30px rgba(238,106,34,.45)" : "none"}
                  style={{
                    alignSelf: "stretch",
                    textAlign: "center",
                    justifyContent: "center",
                    background: pkg.popular ? "#EE6A22" : "transparent",
                    color: pkg.popular ? "#fff" : "#EE6A22",
                    border: pkg.popular ? "none" : "1px solid #EE6A22",
                  }}
                >
                  {pkg.ctaText}
                </PrimaryButton>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
