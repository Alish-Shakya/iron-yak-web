import type { CSSProperties } from "react";
import type { RouteStop } from "../data/site";

/**
 * The dotted trek route drawn under each hero slide, with a little yak marker
 * that travels the path. `running` toggles the CSS travel animation; `reduce`
 * parks the marker mid-path for reduced-motion users.
 */
export function RouteMap({
  pathD,
  stops,
  running,
  reduce,
}: {
  pathD: string;
  stops: RouteStop[];
  running: boolean;
  reduce: boolean;
}) {
  const markerStyle = {
    offsetPath: `path('${pathD}')`,
    ...(reduce ? { offsetDistance: "55%" } : { "--iy-dur": "7.2s" }),
  } as CSSProperties;

  return (
    <svg
      viewBox="0 0 1000 172"
      width="100%"
      style={{ display: "block", overflow: "visible" }}
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
      {/* traveling yak marker */}
      <g className={`iy-marker${running && !reduce ? " iy-run" : ""}`} style={markerStyle}>
        <circle cx="-5.4" cy="4" r="2.5" fill="#1C1C1E" />
        <circle cx="5.6" cy="4" r="2.5" fill="#1C1C1E" />
        <path
          d="M-11 3 L-11 -1 Q-11 -2 -10 -2 L-5 -2 L-3 -6 Q-2.6 -7 -1.5 -7 L5 -7 Q6 -7 6.4 -6 L8 -2 L10 -1.6 Q11 -1.3 11 0 L11 3 Q11 4 10 4 L-10 4 Q-11 4 -11 3 Z"
          fill="#EE6A22"
          stroke="#1C1C1E"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path d="M-1.6 -5.4 L4.4 -5.4 L5.4 -2.6 L-1.6 -2.6 Z" fill="#1C1C1E" opacity=".5" />
      </g>
      {/* station labels */}
      <g textAnchor="middle">
        {stops.map((s, i) => (
          <g key={i}>
            <text
              x={s.x}
              y={143}
              fontWeight="700"
              fontSize="14"
              letterSpacing="1"
              fill={i === 0 ? "#EE6A22" : "#ffffff"}
            >
              {s.name}
            </text>
            <text
              x={s.x}
              y={158}
              fontFamily="ui-monospace,Menlo,monospace"
              fontSize="9.5"
              letterSpacing=".5"
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
