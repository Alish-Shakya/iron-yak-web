export type RouteStop = {
  x: number;
  y: number;
  name: string;
  coord: string; // e.g. "27.7°N 85.3°E · BASE"
};

export type Slide = {
  img: string;
  imgAlt: string;
  overlay: string; // gradient overlay over the photo
  title: [string, string]; // two headline lines
  sub: string;
  routeLabel: string;
  routeMeta: string; // e.g. "5 STOPS · 24 DAYS · IN TRANSIT"
  pathD: string; // SVG route path (also used as the marker's offset-path)
  stops: RouteStop[]; // first stop is the highlighted "base"
};

const OVERLAY_A =
  "linear-gradient(180deg, rgba(28,28,30,.55) 0%, rgba(28,28,30,.18) 34%, rgba(28,28,30,.28) 64%, rgba(28,28,30,.74) 100%)";
const OVERLAY_B =
  "linear-gradient(180deg, rgba(28,28,30,.55) 0%, rgba(28,28,30,.2) 34%, rgba(28,28,30,.3) 64%, rgba(28,28,30,.74) 100%)";
const OVERLAY_C =
  "linear-gradient(180deg, rgba(28,28,30,.5) 0%, rgba(28,28,30,.18) 34%, rgba(28,28,30,.28) 64%, rgba(28,28,30,.74) 100%)";
const OVERLAY_D =
  "linear-gradient(180deg, rgba(28,28,30,.5) 0%, rgba(28,28,30,.2) 34%, rgba(28,28,30,.3) 64%, rgba(28,28,30,.76) 100%)";

export const slides: Slide[] = [
  {
    img: "/assets/image/1.jpg",
    imgAlt: "Himalayan mountains at dawn",
    overlay: OVERLAY_A,
    title: ["Journey to the", "Roof of the World"],
    sub: "Experience Nepal's most iconic trek through Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes to the foot of the world's highest peak.",
    routeLabel: "Everest Base Camp Trek",
    routeMeta: "130 km • 12–14 Days • Max Altitude: 5,364 m",
    pathD:
      "M 90 96 C 170 96, 220 58, 290 58 C 370 58, 420 104, 500 104 C 590 104, 640 52, 705 52 C 800 52, 850 88, 915 88",
    stops: [
      { x: 90, y: 96, name: "KATHMANDU", coord: "START · CAPITAL" },
      { x: 290, y: 58, name: "LUKLA", coord: "GATEWAY TO EVEREST" },
      { x: 500, y: 104, name: "NAMCHE", coord: "SHERPA CAPITAL" },
      { x: 705, y: 52, name: "TENGBOCHE", coord: "MONASTERY" },
      { x: 915, y: 88, name: "EVEREST BC", coord: "5,364 m · FINISH" },
    ],
  },

  {
    img: "/assets/image/2.jpg",
    imgAlt: "Annapurna high country",
    overlay: OVERLAY_A,
    title: ["Into the Heart of", "the Annapurnas"],
    sub: "Walk through lush forests, charming mountain villages, and dramatic alpine scenery before reaching the magnificent Annapurna Sanctuary.",
    routeLabel: "Annapurna Base Camp Trek",
    routeMeta: "115 km • 7–10 Days • Max Altitude: 4,130 m",
    pathD:
      "M 90 70 C 160 70, 210 110, 270 110 C 350 110, 400 50, 470 50 C 560 50, 620 95, 690 95 C 780 95, 850 60, 915 60",
    stops: [
      { x: 90, y: 70, name: "POKHARA", coord: "START" },
      { x: 270, y: 110, name: "GHANDRUK", coord: "GURUNG VILLAGE" },
      { x: 470, y: 50, name: "CHHOMRONG", coord: "GATEWAY TO ABC" },
      { x: 690, y: 95, name: "MBC", coord: "4,130 m" },
      { x: 915, y: 60, name: "ABC", coord: "BASE CAMP" },
    ],
  },

  {
    img: "/assets/image/3.jpg",
    imgAlt: "Alpenglow over the Himalaya",
    overlay: OVERLAY_B,
    title: ["Cross Nepal's", "Legendary Mountain Pass"],
    sub: "Embark on one of the world's greatest trekking adventures across diverse landscapes and the breathtaking Thorong La Pass.",
    routeLabel: "Annapurna Circuit Trek",
    routeMeta: "160 km • 14–18 Days • Max Altitude: 5,416 m",
    pathD:
      "M 110 100 C 210 100, 280 55, 370 55 C 480 55, 540 105, 640 105 C 750 105, 800 60, 900 60",
    stops: [
      { x: 110, y: 100, name: "BESISAHAR", coord: "START" },
      { x: 370, y: 55, name: "MANANG", coord: "ACCLIMATIZE" },
      { x: 640, y: 105, name: "THORONG LA", coord: "5,416 m" },
      { x: 900, y: 60, name: "MUKTINATH", coord: "FINISH" },
    ],
  },

  {
    img: "/assets/image/4.jpg",
    imgAlt: "Snow peaks and alpine valley",
    overlay: OVERLAY_C,
    title: ["Experience the", "Untouched Himalayas"],
    sub: "Venture beyond the crowds into remote mountain villages, pristine landscapes, and the spectacular Larkya La Pass.",
    routeLabel: "Manaslu Circuit Trek",
    routeMeta: "177 km • 14–16 Days • Max Altitude: 5,106 m",
    pathD:
      "M 110 60 C 210 60, 290 100, 380 100 C 480 100, 560 60, 650 60 C 760 60, 800 95, 900 95",
    stops: [
      { x: 110, y: 60, name: "SOTI KHOLA", coord: "START" },
      { x: 380, y: 100, name: "JAGAT", coord: "CHECKPOINT" },
      { x: 650, y: 60, name: "SAMAGAUN", coord: "BASE VILLAGE" },
      { x: 900, y: 95, name: "LARKYA LA", coord: "5,106 m" },
    ],
  },

  {
    img: "/assets/image/5.jpg",
    imgAlt: "Misty pine forest trail",
    overlay: OVERLAY_D,
    title: ["Discover Nepal's", "Hidden Alpine Paradise"],
    sub: "Escape into peaceful valleys, glacier-fed rivers, and snow-capped peaks while exploring one of Nepal's most beautiful trekking regions.",
    routeLabel: "Langtang Valley Trek",
    routeMeta: "77 km • 7–9 Days • Max Altitude: 3,870 m",
    pathD:
      "M 110 95 C 210 95, 300 55, 380 55 C 490 55, 550 100, 650 100 C 760 100, 810 58, 900 58",
    stops: [
      { x: 110, y: 95, name: "SYABRUBESI", coord: "START" },
      { x: 380, y: 55, name: "LAMA HOTEL", coord: "FOREST TRAIL" },
      { x: 650, y: 100, name: "LANGTANG", coord: "VILLAGE" },
      { x: 900, y: 58, name: "KYANJIN GOMPA", coord: "3,870 m" },
    ],
  },
];

export type Feature = { icon: string; title: string; desc: string };

export const features: Feature[] = [
  {
    icon: "✓",
    title: "Licensed guides",
    desc: "Government-certified, Sherpa-led teams who know every ridge by name.",
  },
  {
    icon: "◎",
    title: "Local experts",
    desc: "Born-and-raised teams and community lodges — travel that gives back.",
  },
  {
    icon: "☎",
    title: "24/7 support",
    desc: "A real person on the line, from first enquiry to your flight home.",
  },
  {
    icon: "♦",
    title: "Best-price guarantee",
    desc: "Fair, transparent pricing — no hidden permits, no surprises on trail.",
  },
  {
    icon: "✦",
    title: "Custom trips",
    desc: "Every itinerary shaped around your pace, your people, your season.",
  },
  {
    icon: "⛨",
    title: "Safe adventures",
    desc: "Oxygen, comms and medical protocols on every high-altitude route.",
  },
];

export type Stat = { target: number; suffix: string; label: string };

export const stats: Stat[] = [
  { target: 5000, suffix: "+", label: "Happy travelers" },
  { target: 150, suffix: "+", label: "Tours & treks" },
  { target: 15, suffix: "+", label: "Years experience" },
  { target: 98, suffix: "%", label: "Satisfaction" },
];

export type Testimonial = {
  quote: string;
  avatar: string;
  name: string;
  trip: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      '"The most organised trek I\'ve ever done. Our guide read the mountain like a book — we felt safe the entire way to base camp."',
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Whitfield",
    trip: "Everest Base Camp · UK",
  },
  {
    quote:
      '"Iron Yak turned a bucket-list idea into the trip of a lifetime. Every detail, from permits to tea houses, was handled beautifully."',
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Daniel Okafor",
    trip: "Annapurna Circuit · US",
  },
  {
    quote:
      '"Authentic, warm and genuinely local. We stayed in family lodges and felt like guests, not tourists. Unforgettable."',
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Mei Tanaka",
    trip: "Langtang Valley · JP",
  },
  {
    quote:
      '"From the first email I felt in safe hands. Acclimatisation was perfectly paced and nobody in our group got altitude sick."',
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Lucas Meyer",
    trip: "Upper Mustang · DE",
  },
  {
    quote:
      '"The jungle safari exceeded every expectation. We spotted a rhino within an hour and our naturalist knew every bird call by heart."',
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Priya Nair",
    trip: "Chitwan Jungle · IN",
  },
  {
    quote:
      '"Sunrise over Machhapuchhre from Sarangkot was worth every early alarm. The whole Pokhara trip was relaxed yet packed with wonder."',
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Diego Fernández",
    trip: "Pokhara & Lakes · ES",
  },
  {
    quote:
      "\"Crossing Thorong La was the hardest thing I've done, but the team's encouragement got us all over the pass. Life-changing.\"",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    name: "Amara Johnson",
    trip: "Annapurna Circuit · CA",
  },
  {
    quote:
      '"Small group, big heart. Our porters and guide became friends by the end. I\'m already planning my next Iron Yak adventure."',
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Oliver Bennett",
    trip: "Everest Base Camp · AU",
  },
];
