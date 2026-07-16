export type FooterLink = { label: string; href: string };

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Quick links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Destinations", href: "/destinations" },
      {
        label: "Signature Experience",
        href: "/destinations/everest-base-camp",
      },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Mt. Everest", href: "/destinations/everest-base-camp" },
      { label: "Langtang Valley", href: "/destinations/langtang-valley" },
      { label: "Upper Mustang", href: "/destinations/upper-mustang" },
      { label: "Pokhara & Lakes", href: "/destinations/pokhara-lakes" },
      { label: "Chitwan Jungle", href: "/destinations/chitwan-jungle" },
      { label: "Annapurna Circuit", href: "/destinations/annapurna-circuit" },
    ],
  },
];

export const socials: { label: string; icon: string }[] = [
  { label: "Instagram", icon: "◎" },
  { label: "Facebook", icon: "f" },
  { label: "YouTube", icon: "▶" },
];

export const navLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
