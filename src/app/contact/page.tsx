import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { BookingForm } from "@/components/contact/BookingForm";
import { FaqSection } from "@/components/contact/FaqSection";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Iron Yak Tours & Travels in Kathmandu, Nepal. Plan your custom Himalayan trek with our expert team.",
  openGraph: {
    title: "Contact Iron Yak Tours & Travels",
    description:
      "Ready to plan your Nepal trek? Contact our Kathmandu office for custom itineraries and expert advice.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start Your Journey"
        subtitle="Have a question or ready to plan your trek? Reach out to our Kathmandu office today."
        bgImage="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="Contact Iron Yak"
      />

      <section className="px-[clamp(20px,5vw,64px)] pt-20 pb-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-[1.1fr_1.3fr] items-start gap-[50px]">
            <ContactInfo />
            <Reveal>
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
