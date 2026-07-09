import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { SignatureTrek } from "./components/SignatureTrek";
import { WhyIronYak } from "./components/WhyIronYak";
import { Testimonials } from "./components/Testimonials";
import { FinalCta } from "./components/FinalCta";

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
