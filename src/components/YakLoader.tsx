"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface YakLoaderProps {
  onComplete?: () => void;
  reduced?: boolean;
}

type PathDef = {
  d: string;
  fill: string;
  id: string;
  x: number;
  y: number;
  rotate: number;
  delay: number;
};

// The 16 fragments that form the yak mark — they assemble, then destruct (reverse) at the end.
const yakPaths: PathDef[] = [
  // LEFT SIDE PIECES
  { d: "M446.689 167.878L404.195 148.904L416.269 268.305L438.031 223.325L446.689 167.878Z", fill: "#E6E7E8", id: "left-flat", x: -300, y: 50, rotate: -60, delay: 1.4 },
  { d: "M422.542 260.243L418.331 268.952L492.663 276.954L422.542 260.243Z", fill: "#A7A9AC", id: "left-horn", x: -200, y: -250, rotate: -120, delay: 0.6 },
  { d: "M400.758 148.723L409.222 229.104L356.352 242.057L287.434 239.127L305.974 158.462L400.758 148.723Z", fill: "#58595B", id: "left-head", x: -250, y: -100, rotate: -45, delay: 0.8 },
  { d: "M393.26 235.106L391.885 251.493L407.224 231.691L393.26 235.106Z", fill: "#D1D3D4", id: "left-below-line", x: -150, y: 200, rotate: -30, delay: 1.0 },

  // RIGHT SIDE PIECES
  { d: "M276.048 270.285L276.37 270.952L276.542 270.124L276.048 270.285Z", fill: "#414042", id: "right-below-line", x: 150, y: 200, rotate: 45, delay: 1.1 },
  { d: "M228.505 165.332L244.66 184.347L244.467 184.67L272.374 175.779L259.484 133.568L247.067 170.283L240.837 168.747L241.159 168.666L228.505 165.332Z", fill: "#F26522", id: "right-head", x: 250, y: -100, rotate: 60, delay: 0.9 },
  { d: "M279.313 145.671L265.864 150.763L273.706 176.426L256.734 181.821L277.337 266.709L302.408 158.3L279.313 145.671Z", fill: "#414042", id: "inside-head", x: 0, y: -300, rotate: 180, delay: 0.7 },

  // SMALL DETAILS
  { d: "M413.068 258L354.333 243.997L310.593 242.138L284.426 245.633L277.401 275.963L357.448 281.662L408.836 267.921L414.142 268.487L413.068 258Z", fill: "#A7A9AC", id: "up-head", x: 0, y: -250, rotate: 90, delay: 0.5 },
  { d: "M244.145 168.404L240.6 162.463L232.802 165.413L244.145 168.404Z", fill: "#6D6E71", id: "middle-flat", x: 0, y: 300, rotate: 45, delay: 2.1 },

  // BODY PIECES
  { d: "M228.376 168.444L227.302 171.677L229.343 171.233L234.971 186.307L241.653 185.195L242.061 184.529L228.376 168.444Z", fill: "#F26522", id: "left-body", x: -250, y: 200, rotate: -45, delay: 1.5 },
  { d: "M227.968 166.323L208.096 226.053L216.367 228.134L243.371 184.448L227.968 166.323Z", fill: "#939598", id: "right-horn", x: 200, y: -250, rotate: 120, delay: 0.6 },
  { d: "M241.073 190.186L268.808 249.735L252.652 183.134L243.651 186.004L241.073 190.186Z", fill: "#6D6E71", id: "small", x: 150, y: -150, rotate: -30, delay: 0.3 },
  { d: "M239.096 196.006L238.344 194.591L237.678 195.662L259.462 252.645L263.072 247.472L239.096 196.006Z", fill: "#BCBEC0", id: "small-leg", x: 0, y: 400, rotate: 0, delay: 2.2 },
  { d: "M227.152 165.373L196.538 172.89L197.118 222.881L207.065 225.79L227.152 165.373Z", fill: "#808285", id: "big-body", x: 250, y: 150, rotate: 45, delay: 1.6 },
  { d: "M195.442 172.122L225.863 164.645L196.538 156.906L207.065 125L179.974 155.876L195.442 172.243V172.122Z", fill: "#F26522", id: "right-flat", x: 200, y: 350, rotate: 90, delay: 1.8 },
  { d: "M270.483 247.492L270.913 249.291L266.853 250.544L265.714 248.139L265.112 248.22L258.904 257.151L255.961 249.432L134 265.739L277.379 275.963L270.483 247.492Z", fill: "#A7A9AC", id: "right-body", x: 350, y: 50, rotate: -45, delay: 1.7 },
];

// The 7 "IronYak" wordmark letters — "Iron" recolored light for contrast, "Yak" stays orange.
// They assemble (rising from below), stay through the destruct, then fade at the reveal so the
// panel's letter-holes show the page through them. Their `d` strings are also reused to build the
// reveal mask below, keeping the holes perfectly aligned with these letters.
const wordmarkPaths: PathDef[] = [
  { d: "M120.26 297.01H98V374.54H120.26V297.01Z", fill: "#E6E7E8", id: "text-i", x: -120, y: 220, rotate: -8, delay: 2.4 },
  { d: "M181.47 350.15C190.95 345.26 195.7 337.09 195.7 325.62C195.7 316.79 192.8 309.81 187.01 304.69C181.21 299.57 173.4 297.01 163.56 297.01H130.37V374.54H144.46C146.22 374.54 147.73 373.88 149 372.57C150.27 371.26 150.91 369.66 150.91 367.78V353.97H162.11L175.15 374.55H197.15L181.48 350.16L181.47 350.15ZM171.79 334.01C169.64 335.94 166.46 336.9 162.24 336.9H150.91V320.41L138.27 314.21H162.24C166.46 314.21 169.64 315.2 171.79 317.17C173.94 319.14 175.02 321.96 175.02 325.63C175.02 329.3 173.94 332.09 171.79 334.02V334.01Z", fill: "#E6E7E8", id: "text-r", x: -80, y: 240, rotate: 6, delay: 2.5 },
  { d: "M272.49 307.99C265.11 300.67 255.81 297.01 244.61 297.01C233.41 297.01 224.11 300.67 216.73 307.99C209.35 315.31 205.65 324.57 205.65 335.77C205.65 343.09 207.32 349.71 210.68 355.63C214.03 361.55 218.68 366.18 224.62 369.52C230.56 372.86 237.22 374.53 244.61 374.53C255.81 374.53 265.11 370.87 272.49 363.55C279.87 356.23 283.57 346.97 283.57 335.76C283.57 324.55 279.88 315.29 272.49 307.98V307.99ZM258.1 351.16C254.54 355.09 250.04 357.06 244.61 357.06C239.18 357.06 234.66 355.09 231.05 351.16C227.44 347.23 225.64 342.1 225.64 335.77C225.64 331.52 226.49 327.77 228.19 324.52C229.89 321.27 232.16 318.78 235 317.07C237.84 315.35 241.02 314.49 244.55 314.49C248.08 314.49 251.28 315.35 254.16 317.07C257.04 318.79 259.32 321.27 260.97 324.52C262.62 327.77 263.45 331.52 263.45 335.77C263.45 342.1 261.67 347.22 258.1 351.16Z", fill: "#E6E7E8", id: "text-o", x: -30, y: 260, rotate: -6, delay: 2.6 },
  { d: "M349.31 297.01H364.26V374.54H346.72L313.82 333.24V367.64C313.82 368.86 313.5 370.01 312.87 371.09C312.24 372.17 311.42 373.02 310.42 373.63C309.42 374.24 308.33 374.55 307.16 374.55H293.02V303.5C293.02 301.71 293.63 300.19 294.86 298.92C296.08 297.65 297.6 297.02 299.41 297.02H310.42L358.27 356.22L343.45 330.57V303.08C343.45 301.39 344.02 299.96 345.15 298.78C346.28 297.6 347.67 297.02 349.3 297.02L349.31 297.01Z", fill: "#E6E7E8", id: "text-n", x: 30, y: 240, rotate: 8, delay: 2.7 },
  { d: "M453.31 297.01L424.91 346.77V374.54H411.66C409.49 374.54 407.64 373.74 406.11 372.14C404.58 370.54 403.81 368.62 403.81 366.36V346.34L375.41 297H393.13C396.11 297 398.4 298.32 400.03 300.95L411.8 321.53L409.36 339.43L430.46 301.37C432.08 298.46 434.52 297 437.77 297H453.33L453.31 297.01Z", fill: "#F26522", id: "text-y", x: 60, y: 260, rotate: -8, delay: 2.8 },
  { d: "M484.59 297.01H463.31L429.5 374.54H451.62L457.6 359.46H490.02L496 374.54H518.54L484.59 297.01ZM464 343.24L473.74 318.43L481.39 337.88L499.48 343.24H464Z", fill: "#F26522", id: "text-a", x: 100, y: 240, rotate: 6, delay: 2.9 },
  { d: "M572.5 374.54L550.12 346.35L541.91 355.09V374.54H526.33C524.63 374.54 523.16 373.93 521.94 372.71C520.71 371.49 520.1 370.03 520.1 368.34V297.01H536.39C537.9 297.01 539.2 297.55 540.29 298.63C541.37 299.71 541.92 301 541.92 302.5V319.84L532.15 340L572.1 297H596.46L564.59 331.25L598.02 374.53H572.52L572.5 374.54Z", fill: "#F26522", id: "text-k", x: 140, y: 220, rotate: 8, delay: 3.0 },
];

// Reveal mask: the "IronYak" letters, opaque (alpha 1) on a transparent field, sized/positioned to
// overlay the animated letters exactly (same viewBox + `d` strings). This is only the WORDMARK — it's
// combined at runtime with a full-viewport solid layer via `mask-composite: exclude`, which subtracts
// the letters from the full cover → a full-screen dark sheet with the letters punched out as holes.
// (A single bounded mask image would only keep the panel inside its own box, leaving the rest of the
// page uncovered — hence the two-layer composite.)
const wordmarkSvg =
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 625 444'>` +
  wordmarkPaths.map((p) => `<path d='${p.d}' fill='#000'/>`).join("") +
  `</svg>`;
const WORDMARK_URL = `url("data:image/svg+xml,${encodeURIComponent(wordmarkSvg)}")`;
// Matches the animated SVG box: `max-w-lg` (32rem) capped, minus `px-8` (2rem each side).
const MASK_SIZE = "calc(min(100vw, 32rem) - 4rem) auto";

const pathVariants = {
  hidden: (custom: { x: number; y: number; rotate: number }) => ({
    x: custom.x,
    y: custom.y,
    rotate: custom.rotate,
    opacity: 0,
    scale: 0.5,
  }),
  visible: (custom: { delay: number }) => ({
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom.delay,
      type: "spring" as const,
      stiffness: 60,
      damping: 12,
      mass: 1,
    },
  }),
  // Destruct = reverse of the assembly: fly back to the scattered start, snappier than the spring.
  destruct: (custom: { x: number; y: number; rotate: number }) => ({
    x: custom.x,
    y: custom.y,
    rotate: custom.rotate,
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.7,
      ease: [0.7, 0, 0.84, 0] as [number, number, number, number],
    },
  }),
};

type Phase = "assemble" | "destruct" | "reveal";

export function YakLoader({ onComplete, reduced }: YakLoaderProps) {
  const [phase, setPhase] = useState<Phase>("assemble");
  const [maskOn, setMaskOn] = useState(false);
  const [fadeSimple, setFadeSimple] = useState(false); // reduced-motion plain fade
  const [origin, setOrigin] = useState("50% 50%");
  const [revealScale, setRevealScale] = useState(200);
  const wordmarkRef = useRef<SVGGElement>(null);

  useEffect(() => {
    // Reduced motion: skip the destruct + zoom entirely — hold the static logo, then fade to the page.
    if (reduced) {
      const t1 = setTimeout(() => setFadeSimple(true), 700);
      const t2 = setTimeout(() => onComplete?.(), 1300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    // Assemble settles ~4.0s (last wordmark delay 3.0 + ~1s spring).
    const tDestruct = setTimeout(() => setPhase("destruct"), 4800); // 0.8s hold, then yak flies out (0.7s)
    // Destruct lands ~5.5s → hold the lone "IronYak" on black for a beat before the zoom begins.
    const tReveal = setTimeout(() => {
      // The zoom-through-typography effect scales the letter-holes until ONE letterform grows past the
      // whole viewport, so the origin MUST sit inside a solid stroke (a transparent region) — else the
      // zoom would end on black. We anchor it at the CENTRE of the word: the "N"'s right vertical bar,
      // which sits at the word's horizontal centre and is a solid (always-transparent) stroke. This
      // makes the letters expand symmetrically outward in every direction from the middle of "IronYak".
      const el = wordmarkRef.current;
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.width && r.height) {
          // Word spans viewBox x[98,598] (width 500). The "N" bar sits at x≈355 → the word's midpoint.
          const originXFrac = (355 - 98) / 500; // ≈ 0.514, i.e. the centre of the word
          const originYFrac = 0.5; // vertical centre → expands up and down symmetrically too
          const strokeHalfFrac = 7 / 500; // conservative half-width of the "N" stroke (drives scale)
          const ox = r.left + originXFrac * r.width;
          const oy = r.top + originYFrac * r.height;
          setOrigin(`${ox}px ${oy}px`);

          // Scale so that stroke grows past the farthest viewport corner (full reveal, any screen).
          const W = window.innerWidth;
          const H = window.innerHeight;
          const R = Math.max(
            Math.hypot(ox, oy),
            Math.hypot(W - ox, oy),
            Math.hypot(ox, H - oy),
            Math.hypot(W - ox, H - oy)
          );
          const strokeHalfPx = Math.max(1, strokeHalfFrac * r.width);
          setRevealScale(Math.min(420, (R / strokeHalfPx) * 1.15)); // 15% safety, capped
        }
      }
      setMaskOn(true); // panel becomes a full-screen sheet with the "IronYak" letters as holes
      setPhase("reveal");
    }, 6100);
    const tDone = setTimeout(() => onComplete?.(), 7900);

    return () => {
      clearTimeout(tDestruct);
      clearTimeout(tReveal);
      clearTimeout(tDone);
    };
  }, [onComplete, reduced]);

  // Two mask layers: (1) the wordmark (centered, logo-box sized) and (2) a full-viewport solid fill.
  // `exclude` (webkit: `xor`) subtracts the letters from the full fill → opaque everywhere EXCEPT the
  // letters, across the whole screen. Scaling the panel then grows those holes to reveal the page.
  const maskLayers = `${WORDMARK_URL}, linear-gradient(#000, #000)`;
  const maskStyle = maskOn
    ? {
        maskImage: maskLayers,
        WebkitMaskImage: maskLayers,
        maskSize: `${MASK_SIZE}, 100% 100%`,
        WebkitMaskSize: `${MASK_SIZE}, 100% 100%`,
        maskPosition: "center, center",
        WebkitMaskPosition: "center, center",
        maskRepeat: "no-repeat, no-repeat",
        WebkitMaskRepeat: "no-repeat, no-repeat",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        transformOrigin: origin,
        willChange: "transform, opacity",
      }
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeSimple ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100]"
    >
      {/* Dark panel — full viewport. Solid through assemble/destruct; at reveal it becomes a sheet with
          the "IronYak" letters punched out as holes, then ZOOMS (no opacity fade) so a letterform grows
          past the whole viewport — the hero is revealed purely through the expanding typography. */}
      <motion.div
        className="absolute inset-0 bg-zinc-950"
        style={maskStyle}
        initial={{ scale: 1 }}
        animate={phase === "reveal" ? { scale: revealScale } : { scale: 1 }}
        transition={{ duration: 1.6, ease: [0.5, 0, 0.75, 0] }}
      />

      {/* Logo layer (above the panel, transparent except the marks). */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-lg px-8">
          <svg
            viewBox="0 0 625 444"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {reduced ? (
              [...yakPaths, ...wordmarkPaths].map((p) => (
                <path key={p.id} d={p.d} fill={p.fill} />
              ))
            ) : (
              <>
                {yakPaths.map((p) => (
                  <motion.path
                    key={p.id}
                    d={p.d}
                    fill={p.fill}
                    custom={{ x: p.x, y: p.y, rotate: p.rotate, delay: p.delay }}
                    variants={pathVariants}
                    initial="hidden"
                    animate={phase === "assemble" ? "visible" : "destruct"}
                  />
                ))}
                {/* Colored wordmark shows through assemble/destruct/hold. At reveal it is swapped OUT
                    instantly (duration 0 — not a fade) as the panel's identical letter-holes take over
                    showing the hero; the text then zooms via those holes, so it never disappears. */}
                <motion.g
                  ref={wordmarkRef}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: phase === "reveal" ? 0 : 1 }}
                  transition={{ duration: 0 }}
                >
                  {wordmarkPaths.map((p) => (
                    <motion.path
                      key={p.id}
                      d={p.d}
                      fill={p.fill}
                      custom={{ x: p.x, y: p.y, rotate: p.rotate, delay: p.delay }}
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  ))}
                </motion.g>
              </>
            )}
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
