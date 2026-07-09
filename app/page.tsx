import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { SignatureTrek } from "./components/SignatureTrek";
import { WhyIronYak } from "./components/WhyIronYak";
import { Testimonials } from "./components/Testimonials";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div id="iy-root" style={{ fontFamily: "'Inter',sans-serif", color: "#3A3A3C", background: "#ffffff", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Destinations />
      <SignatureTrek />
      <WhyIronYak />
      <Testimonials />
      <FinalCta />
      <Footer />
    </div>
  );
}
