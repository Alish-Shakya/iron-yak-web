import { PageHero } from "@/components/ui/PageHero";
import { StorySplit } from "@/components/about/StorySplit";
import { StatsCounter } from "@/components/about/StatsCounter";
import { CoreValues } from "@/components/about/CoreValues";
import { TeamSection } from "@/components/about/TeamSection";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story & Values"
        subtitle="Crafting authentic Himalayan journeys since 2011 with certified Sherpas and local experts."
        bgImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="About Iron Yak"
      />

      <StorySplit />
      <StatsCounter />
      <CoreValues />
      <TeamSection />
    </>
  );
}
