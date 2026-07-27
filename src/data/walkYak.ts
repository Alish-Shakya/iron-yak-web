/**
 * The Yak character, extracted from the logo as `src/assets/walk-yak.svg`.
 *
 * The `d` / `fill` values below are copied verbatim from that file so the mark
 * renders pixel-identical — the only reason they live here (instead of importing
 * the .svg) is that the walk + assembly animations need each shard as its own
 * animatable element. Paths are kept in the SAME order as the file so their
 * overlap (paint order) is preserved. The file's full-canvas white `<rect>` is
 * intentionally omitted — it is the logo's backing sheet, not the Yak, and would
 * render as a white box over the hero photography.
 *
 * viewBox: 0 0 272 151. The Yak faces +x (right), so along an SVG `offset-path`
 * (which travels 0%→100%, left→right) it walks head-first, forward.
 *
 * `group` drives the walk cycle (see globals.css):
 *   - legA / legB : the two dangling leg clusters, swung in antiphase
 *   - head        : the horn/head cluster (upper-right), given a slight nod
 *   - body        : the static core; its bounce comes from the container
 * `sx/sy/srot/delay` are the scattered start pose + stagger for the assembly.
 */
export const WALK_YAK = { w: 272, h: 151 } as const;

export type YakGroup = "body" | "head" | "legA" | "legB";

export type YakPart = {
  id: string;
  d: string;
  fill: string;
  group: YakGroup;
  /** scattered-start offset + rotation (native units / deg) for the assembly */
  sx: number;
  sy: number;
  srot: number;
  /** assembly stagger, seconds */
  delay: number;
};

export const yakParts: YakPart[] = [
  { id: "p1", group: "legB", fill: "#E6E7E8", delay: 0.35, sx: -170, sy: -40, srot: -70,
    d: "M9.28844e-06 44.3613L43.3361 24.7311L31.0232 148.261L8.8294 101.726L9.28844e-06 44.3613Z" },
  { id: "p2", group: "body", fill: "#58595B", delay: 0.0, sx: 0, sy: -190, srot: 40,
    d: "M46.8413 24.543L38.2091 107.705L92.1272 121.105L162.411 118.074L143.504 34.6194L46.8413 24.543Z" },
  { id: "p3", group: "legB", fill: "#D1D3D4", delay: 0.55, sx: -130, sy: 130, srot: -40,
    d: "M54.4876 113.914L55.8898 130.868L40.2467 110.381L54.4876 113.914Z" },
  { id: "p4", group: "body", fill: "#414042", delay: 0.9, sx: 70, sy: 170, srot: 60,
    d: "M174.023 150.31L173.694 151L173.519 150.143L174.023 150.31Z" },
  { id: "p5", group: "head", fill: "#F26522", delay: 0.5, sx: 210, sy: -130, srot: 90,
    d: "M222.508 41.7272L206.032 61.3992L206.229 61.7337L177.769 52.5353L190.915 8.86383L203.578 46.849L209.932 45.2602L209.603 45.1766L222.508 41.7272Z" },
  { id: "p6", group: "body", fill: "#414042", delay: 0.7, sx: 40, sy: 210, srot: -30,
    d: "M170.693 21.3863L184.408 26.6545L176.411 53.2044L193.719 58.7861L172.708 146.61L147.141 34.4522L170.693 21.3863Z" },
  { id: "p7", group: "head", fill: "#6D6E71", delay: 0.45, sx: 220, sy: -60, srot: 120,
    d: "M206.558 44.9049L210.173 38.7587L218.126 41.8109L206.558 44.9049Z" },
  { id: "p8", group: "head", fill: "#F26522", delay: 0.6, sx: 250, sy: -30, srot: 80,
    d: "M222.639 44.9467L223.734 48.2916L221.653 47.8316L215.913 63.4271L209.099 62.2773L208.683 61.5874L222.639 44.9467Z" },
  { id: "p9", group: "body", fill: "#939598", delay: 0.65, sx: 210, sy: 90, srot: -50,
    d: "M223.055 42.7517L243.321 104.548L234.886 106.701L207.347 61.5039L223.055 42.7517Z" },
  { id: "p10", group: "legA", fill: "#6D6E71", delay: 0.8, sx: 120, sy: 170, srot: 45,
    d: "M209.691 67.4409L181.406 129.049L197.882 60.1449L207.062 63.1135L209.691 67.4409Z" },
  { id: "p11", group: "legA", fill: "#BCBEC0", delay: 1.0, sx: 150, sy: 190, srot: 30,
    d: "M211.707 73.4618L212.473 71.9984L213.153 73.1063L190.937 132.06L187.256 126.708L211.707 73.4618Z" },
  { id: "p12", group: "body", fill: "#808285", delay: 0.75, sx: 270, sy: 40, srot: -45,
    d: "M223.888 41.7691L255.108 49.5459L254.517 101.266L244.373 104.276L223.888 41.7691Z" },
  { id: "p13", group: "head", fill: "#F26522", delay: 0.3, sx: 270, sy: -150, srot: 100,
    d: "M256.225 48.7515L225.202 41.0165L255.108 33.0097L244.373 0L272 31.9435L256.225 48.8769V48.7515Z" },
];

/** Maps a part's group to the CSS class that drives its walk motion. */
export function yakGroupClass(group: YakGroup): string {
  switch (group) {
    case "legA":
      return "yak-legA";
    case "legB":
      return "yak-legB";
    case "head":
      return "yak-head";
    default:
      return "";
  }
}
