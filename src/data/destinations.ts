export type Destination = {
  img: string;
  title: string;
  badge: string;
  price: string;
  slug: string;
};

export const destinations: Destination[] = [
  {
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    title: "Everest Base Camp",
    badge: "14 days · Strenuous",
    price: "NRP 1,890",
    slug: "everest-base-camp",
  },
  {
    img: "https://images.unsplash.com/photo-1472791108553-c9405341e398?auto=format&fit=crop&w=900&q=80",
    title: "Annapurna Circuit",
    badge: "12 days · Moderate",
    price: "NRP 1,540",
    slug: "annapurna-circuit",
  },
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
    title: "Langtang Valley",
    badge: "8 days · Moderate",
    price: "NRP 980",
    slug: "langtang-valley",
  },
  {
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80",
    title: "Upper Mustang",
    badge: "11 days · Remote",
    price: "NRP 2,120",
    slug: "upper-mustang",
  },
  {
    img: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=900&q=80",
    title: "Pokhara & Lakes",
    badge: "5 days · Easy",
    price: "NRP 640",
    slug: "pokhara-and-lakes",
  },
  {
    img: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",
    title: "Chitwan Jungle",
    badge: "4 days · Safari",
    price: "NRP 520",
    slug: "chitwan-jungle",
  },
];
