import { useState, useEffect } from "react";
import type { CSSProperties, RefObject } from "react";
import type { RouteStop } from "@/data/home";
import { yakParts, yakGroupClass, WALK_YAK } from "@/data/walkYak";

/**
 * The dotted trek route drawn under each hero slide, with the walking Yak
 * marker that travels the path. `running` toggles the CSS travel + walk cycle;
 * `reduce` parks the Yak mid-path for reduced-motion users. `showMarker` lets
 * the hero withhold the marker until its intro Yak has walked in and handed off.
 */
export function RouteMap({
  pathD,
  stops,
  running,
  reduce,
  labelScale = 1,
  showMarker = true,
  svgRef,
}: {
  pathD: string;
  stops: RouteStop[];
  running: boolean;
  reduce: boolean;
  /** Scales the station labels up for narrower containers (e.g. the detail-page sidebar). */
  labelScale?: number;
  /** Withhold the traveling Yak (the hero shows it only after its intro hands off). */
  showMarker?: boolean;
  /** Lets the hero measure this route's on-screen geometry for the intro handoff. */
  svgRef?: RefObject<SVGSVGElement | null>;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const activeScale = isMobile
    ? labelScale === 2
      ? 1.8
      : 1.5
    : labelScale;

  const markerStyle = {
    offsetPath: `path('${pathD}')`,
    ...(reduce ? { offsetDistance: "55%" } : { "--iy-dur": "7.2s" }),
  } as CSSProperties;

  const fly = running && !reduce; // travel + walk cycle only while this slide is live

  // Labels sit below the drop lines (which end at y=128); grow them with activeScale
  // and push the coord line down so the two rows never collide.
  const nameSize = 14 * activeScale;
  const coordSize = 9.5 * activeScale;
  const nameY = 128 + 3 + nameSize;
  const coordY = nameY + 4 + coordSize;
  const viewH = Math.max(172, coordY + 6);

  return (
    <svg
      ref={svgRef}
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
      {/* traveling Yak marker — the walk-yak mark, scaled to sit on the route and
          banked along it via offset-path. Its feet (native y≈150) sit on the line;
          legs/head/bounce animate through the shared .yak-walk cycle. */}
      {showMarker && (
        <g className={`iy-marker${fly ? " iy-run yak-walk" : ""}`} style={markerStyle}>
          <g transform="scale(0.17)">
            <g className="yak-bounce" transform={`translate(${-WALK_YAK.w / 2} ${-WALK_YAK.h})`}>
              {yakParts.map((p) => (
                <path key={p.id} className={yakGroupClass(p.group)} d={p.d} fill={p.fill} />
              ))}
            </g>
          </g>
        </g>
      )}
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
