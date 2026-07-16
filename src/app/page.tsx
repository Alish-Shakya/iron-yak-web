import { Hero } from "@/components/home/Hero";
import { Destinations } from "@/components/home/Destinations";
import { SignatureTrek } from "@/components/home/SignatureTrek";
import { WhyIronYak } from "@/components/home/WhyIronYak";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <SignatureTrek />
      <WhyIronYak />
      <Testimonials />
      <FinalCta />
    </>
  );
}
