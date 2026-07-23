import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import type { RouteStop } from "@/data/home";

/**
 * The dotted trek route drawn under each hero slide, with a little bird marker
 * that travels the path. `running` toggles the CSS travel animation; `reduce`
 * parks the marker mid-path for reduced-motion users.
 */
export function RouteMap({
  pathD,
  stops,
  running,
  reduce,
  labelScale = 1,
}: {
  pathD: string;
  stops: RouteStop[];
  running: boolean;
  reduce: boolean;
  /** Scales the station labels up for narrower containers (e.g. the detail-page sidebar). */
  labelScale?: number;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const activeScale = labelScale * (isMobile ? 1.6 : 1);

  const markerStyle = {
    offsetPath: `path('${pathD}')`,
    ...(reduce ? { offsetDistance: "55%" } : { "--iy-dur": "7.2s" }),
  } as CSSProperties;

  const fly = running && !reduce; // travel + wingbeat only while this slide is live

  // Labels sit below the drop lines (which end at y=128); grow them with activeScale
  // and push the coord line down so the two rows never collide.
  const nameSize = 14 * activeScale;
  const coordSize = 9.5 * activeScale;
  const nameY = 128 + 3 + nameSize;
  const coordY = nameY + 4 + coordSize;
  const viewH = Math.max(172, coordY + 6);

  return (
    <svg
      viewBox={`0 0 1000 ${viewH}`}
      width="100%"
      className="block overflow-visible"
      fontFamily="'Manrope',sans-serif"
    >
      {/* route line */}
      <path
        d={pathD}
        fill="none"
        stroke="rgba(255,255,255,.34)"
        strokeWidth="1.6"
        strokeDasharray="1.5 8"
        strokeLinecap="round"
      />
      {/* drop lines to the labels */}
      <g stroke="rgba(255,255,255,.14)" strokeWidth="1">
        {stops.map((s, i) => (
          <line key={i} x1={s.x} y1={s.y + 9} x2={s.x} y2={128} />
        ))}
      </g>
      {/* station nodes (first is the highlighted base) */}
      {stops.map((s, i) =>
        i === 0 ? (
          <g key={i}>
            <circle cx={s.x} cy={s.y} r="11" fill="rgba(238,106,34,.16)" />
            <circle cx={s.x} cy={s.y} r="6.5" fill="#EE6A22" />
          </g>
        ) : (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r="6"
            fill="#1C1C1E"
            stroke="rgba(255,255,255,.55)"
            strokeWidth="1.8"
          />
        )
      )}
      {/* traveling bird marker — a soaring golden eagle (side view) whose wing beats as it flies */}
      <g className={`iy-marker${fly ? " iy-run" : ""}`} style={markerStyle}>
        <g>
          {/* gentle body bob synced to the wingbeat */}
          {fly && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0.9; 0 -0.9; 0 0.9"
              dur="0.85s"
              keyTimes="0;0.5;1"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              repeatCount="indefinite"
            />
          )}

          {/* far wing — darker, behind the body, for depth */}
          <g>
            <path
              d="M2 -1 C 0 -4, -4 -7, -8 -8.5 C -9.4 -9, -10.6 -8.8, -11.4 -8 C -10.2 -7.8, -9.4 -7.3, -9 -6.9 C -8.4 -5.4, -6 -3.2, 2 -1 Z"
              fill="#5E3A1C"
            />
            {fly && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-26 2 -1; 30 2 -1; -26 2 -1"
                dur="0.85s"
                keyTimes="0;0.5;1"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                repeatCount="indefinite"
              />
            )}
          </g>

          {/* fanned tail */}
          <path d="M-11 -0.6 L-16 -2.6 L-15.4 0 L-16 2.6 L-11 1.2 Z" fill="#5E3A1C" />

          {/* body */}
          <path
            d="M-12.5 0.2 C -13.6 -0.8, -12.6 -1.4, -11 -1.1 C -6 -2.2, -1 -2.6, 4.5 -2.4 C 8 -2.3, 10.8 -1.7, 12 -0.6 C 11.2 -0.2, 10.4 0, 9.8 0.1 C 10.6 0.6, 10 1.6, 7 2 C 1 2.7, -6 2.6, -11 1.4 C -12.6 1, -13.4 0.8, -12.5 0.2 Z"
            fill="#8A5A2C"
          />
          {/* darker head/nape shading */}
          <path d="M6 -2.3 C 9 -2.2, 11 -1.6, 12 -0.6 C 11.2 -0.2, 10.4 0, 9.8 0.1 C 8 0.1, 6.5 -0.6, 6 -2.3 Z" fill="#6E4423" />

          {/* eye + hooked beak */}
          <circle cx="10.4" cy="-0.9" r="0.7" fill="#160F08" />
          <circle cx="10.6" cy="-1.1" r="0.24" fill="#EAD9B0" />
          <path d="M11.7 -0.9 L14.7 -0.2 C 14.1 0.3, 13.4 0.7, 12.8 0.55 C 12.3 0.2, 11.9 -0.4, 11.7 -0.9 Z" fill="#E6B24A" />
          <path d="M14.7 -0.2 C 14.4 0.15, 14 0.45, 13.6 0.5 C 13.9 0.15, 14.2 -0.05, 14.7 -0.2 Z" fill="#2A1B0E" />

          {/* near wing — lightest, in front, hinging at the shoulder */}
          <g>
            <path
              d="M2 -1 C 0 -5, -4 -9, -9 -11 C -10.5 -11.5, -12 -11.2, -13 -10.3 C -11.5 -10, -10.5 -9.4, -10 -8.8 C -11 -8.6, -12 -8.2, -12.5 -7.4 C -10.8 -7.4, -9.6 -7.2, -9 -6.9 C -9.6 -6.4, -10 -5.8, -9.8 -5 C -8.6 -6, -7.2 -6.6, -6 -6.6 C -4 -5, -1.5 -3, 2 -1 Z"
              fill="#A5703A"
            />
            {/* covert / feather detail */}
            <path d="M0 -2 C -2.5 -3.5, -5 -5, -7.5 -6" fill="none" stroke="#6E4423" strokeWidth=".7" opacity=".8" />
            <path d="M1 -1.3 C -1.5 -2.6, -4 -4, -6.5 -5.2" fill="none" stroke="#D9AD6E" strokeWidth=".5" opacity=".7" />
            {fly && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-30 2 -1; 38 2 -1; -30 2 -1"
                dur="0.85s"
                keyTimes="0;0.5;1"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                repeatCount="indefinite"
              />
            )}
          </g>
        </g>
      </g>
      {/* station labels */}
      <g textAnchor="middle">
        {stops.map((s, i) => (
          <g key={i}>
            <text
              x={s.x}
              y={nameY}
              fontWeight="700"
              fontSize={nameSize}
              letterSpacing={activeScale}
              fill={i === 0 ? "#EE6A22" : "#ffffff"}
            >
              {s.name}
            </text>
            <text
              x={s.x}
              y={coordY}
              fontFamily="ui-monospace,Menlo,monospace"
              fontSize={coordSize}
              letterSpacing={0.5 * activeScale}
              fill="rgba(255,255,255,.5)"
            >
              {s.coord}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
