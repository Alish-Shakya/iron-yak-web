"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface YakLoaderProps {
  onComplete?: () => void;
}

const paths = [
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
  { d: "M270.483 247.492L270.913 249.291L266.853 250.544L265.714 248.139L265.112 248.22L258.904 257.151L255.961 249.432L134 265.739L277.379 275.963L270.483 247.492Z", fill: "#A7A9AC", id: "right-body", x: 350, y: 50, rotate: -45, delay: 1.7 }
];

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
      type: "spring",
      stiffness: 60,
      damping: 12,
      mass: 1,
    }
  })
};

export function YakLoader({ onComplete }: YakLoaderProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Total animation takes ~3.5s (max delay 2.2 + ~1s spring)
    // Hold for ~1s, then start fade out at 4.5s
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for fade out to complete before unmounting
      setTimeout(() => {
        onComplete?.();
      }, 600); // 600ms match duration of fade out
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
    >
      <motion.div
        animate={isFadingOut ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full max-w-lg px-8"
      >
        <svg
          viewBox="0 0 625 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {paths.map((p) => (
            <motion.path
              key={p.id}
              id={p.id}
              d={p.d}
              fill={p.fill}
              custom={{ x: p.x, y: p.y, rotate: p.rotate, delay: p.delay }}
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          ))}
        </svg>
      </motion.div>
    </motion.div>
  );
}