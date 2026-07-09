import { h2Base } from "./theme";
import { Reveal } from "./Reveal";
import { PrimaryButton } from "./buttons";

/** Full-bleed closing call-to-action over a sunset photo. */
export function FinalCta() {
  return (
    <section style={{ padding: "0 clamp(20px,5vw,64px) clamp(60px,8vw,110px)" }}>
      <Reveal
        style={{
          position: "relative",
          maxWidth: 1300,
          margin: "0 auto",
          borderRadius: 28,
          overflow: "hidden",
          minHeight: 460,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80"
          alt="Sunset over the Himalaya"
          loading="lazy"
          decoding="async"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(28,28,30,.78) 0%, rgba(28,28,30,.4) 60%, rgba(28,28,30,.2) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "clamp(40px,6vw,80px)", color: "#fff", maxWidth: 640 }}>
          <h2 className="iy-balance" style={{ ...h2Base, fontSize: "clamp(34px,5vw,62px)", lineHeight: 1.04, margin: "0 0 20px" }}>
            Your Himalayan adventure starts here
          </h2>
          <p style={{ color: "rgba(255,255,255,.86)", fontSize: 18, lineHeight: 1.6, margin: "0 0 34px", maxWidth: 480 }}>
            Tell us where you dream of going. We&apos;ll craft the route, handle the details, and walk it with you.
          </p>
          <PrimaryButton
            href="#footer"
            padding="17px 36px"
            fontSize={17}
            shadow="0 12px 34px rgba(238,106,34,.44)"
            hoverShadow="0 18px 44px rgba(238,106,34,.55)"
          >
            Book Your Journey →
          </PrimaryButton>
        </div>
      </Reveal>
    </section>
  );
}
