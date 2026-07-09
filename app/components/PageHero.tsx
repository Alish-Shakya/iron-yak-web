import { CSSProperties } from "react";
import { eyebrow, h2Base, MANROPE } from "./theme";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  eyebrowText?: string;
}

export function PageHero({ title, subtitle, bgImage, eyebrowText }: PageHeroProps) {
  const overlay =
    "linear-gradient(180deg, rgba(28,28,30,.6) 0%, rgba(28,28,30,.35) 40%, rgba(28,28,30,.75) 100%)";

  return (
    <section
      style={{
        position: "relative",
        height: "50vh",
        minHeight: "380px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImage}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: overlay,
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          padding: "clamp(100px, 12vh, 140px) clamp(20px, 5vw, 64px) 0",
          color: "#fff",
        }}
      >
        <Reveal>
          {eyebrowText && <div style={{ ...eyebrow, color: "#EE6A22", marginBottom: 12 }}>{eyebrowText}</div>}
          <h1
            style={{
              fontFamily: MANROPE,
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              margin: "0 0 16px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.5,
              maxWidth: 600,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
