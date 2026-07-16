"use client";

import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

/** Small uppercase section eyebrow (matches `eyebrow` in theme.ts + a 12px gap). */
const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";

/** Big Manrope section heading (matches `h2Base` in theme.ts; add font size + gap). */
const HEADING =
  "mt-0 font-[Manrope,sans-serif] font-extrabold leading-[1.05] tracking-[-0.03em]";

/** Shared form field wrapper / label / control styles. */
const FIELD = "flex flex-col gap-1.5";
const LABEL = "text-[13px] font-semibold text-[#1C1C1E]";
const INPUT =
  "rounded-[10px] border border-[#d2d2d7] px-4 py-3 text-[15px] [font-family:inherit] [outline:none]";

const FAQS = [
  {
    q: "When is the best season to trek in Nepal?",
    a: "Autumn (September to November) and Spring (March to May) offer the clearest skies, most stable weather, and best trail conditions. Winter is clear but very cold at high altitudes, and Summer is monsoon season with rain and landslides.",
  },
  {
    q: "What travel insurance coverage do I need?",
    a: "You must purchase travel insurance that explicitly covers high-altitude trekking up to 6,000 meters and includes emergency helicopter evacuation. Standard policies often cap elevation coverage at 3,000 meters.",
  },
  {
    q: "How do you handle altitude sickness (AMS)?",
    a: "Our itineraries feature careful acclimatization days. Our guides carry pulse oximeters to measure oxygen saturation levels daily, carry wilderness first aid kits, and are trained to recognize symptoms early and coordinate descent immediately if required.",
  },
  {
    q: "Can I customize a trek itinerary?",
    a: "Absolutely! We offer custom-tailored private departures for solo travelers, families, and private groups. You can choose your dates, modify the pace, and add helicopter sightseeing upgrades.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "Everest Base Camp",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Start Your Journey"
        subtitle="Have a question or ready to plan your trek? Reach out to our Kathmandu office today."
        bgImage="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2100&q=80"
        eyebrowText="Contact Iron Yak"
      />

      {/* Main Split Content */}
      <section className="px-[clamp(20px,5vw,64px)] pt-20 pb-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-[1.1fr_1.3fr] items-start gap-[50px]">

            {/* Left Column: Info & Map */}
            <div>
              <Reveal className="mb-9">
                <div className={EYEBROW}>Kathmandu Office</div>
                <h2 className={`${HEADING} text-[clamp(28px,4vw,42px)] mb-[18px]`}>We are here for you</h2>
                <p className="m-0 text-[16px] leading-[1.6] text-[#6E6E73]">
                  Feel free to visit our operations headquarters in Thamel, call us directly, or send us a message through the form.
                </p>
              </Reveal>

              <Reveal className="flex flex-col gap-5 mb-10">
                <div className="flex gap-4">
                  <span className="text-[20px] font-bold text-[#EE6A22]">📍</span>
                  <div>
                    <div className="font-bold text-[16px] text-[#1C1C1E]">Address</div>
                    <div className="mt-1 text-[15px] text-[#6E6E73]">Thamel, Ward 26, Kathmandu, Nepal</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-[20px] font-bold text-[#EE6A22]">📞</span>
                  <div>
                    <div className="font-bold text-[16px] text-[#1C1C1E]">Phone Numbers</div>
                    <div className="mt-1 text-[15px] text-[#6E6E73]">+977 1 4700812 &nbsp;|&nbsp; +977 98510 23412</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-[20px] font-bold text-[#EE6A22]">✉</span>
                  <div>
                    <div className="font-bold text-[16px] text-[#1C1C1E]">Email Enquiries</div>
                    <div className="mt-1 text-[15px] text-[#6E6E73]">info@ironyak.com &nbsp;|&nbsp; bookings@ironyak.com</div>
                  </div>
                </div>
              </Reveal>

              {/* Map Placeholder */}
              <Reveal>
                <div className="relative flex h-[260px] flex-col justify-between overflow-hidden rounded-3xl bg-[#1C1C1E] p-6 text-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
                  <div className="flex justify-between items-center z-[2]">
                    <div className="font-[Manrope,sans-serif] font-extrabold text-[15px]">KATHMANDU HQ</div>
                    <div className="text-[11px] font-[ui-monospace,monospace] text-[rgba(255,255,255,0.4)]">27.7172° N · 85.3150° E</div>
                  </div>

                  {/* Styled pin center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2]">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(238,106,34,0.25)] animate-[iy-zoom_2s_infinite_ease-out]">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#EE6A22]" />
                    </div>
                    <span className="block mt-2 text-[11px] font-bold tracking-[0.1em] text-[#EE6A22]">IRON YAK</span>
                  </div>

                  <div className="z-[2] flex justify-between text-[12px] text-[rgba(255,255,255,0.5)]">
                    <span>ZOOM: 14.5x</span>
                    <span>ACTIVE TRACKING</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact/Booking Form */}
            <Reveal className="rounded-3xl border border-[#eee] bg-white py-10 px-[clamp(24px,4.5vw,44px)] shadow-[0_14px_44px_rgba(28,28,30,0.04)]">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mb-4 text-[48px]">🏔️</div>
                  <h3 className="mt-0 mb-3 font-[Manrope,sans-serif] text-[24px] font-extrabold text-[#1C1C1E]">
                    Journey Request Received!
                  </h3>
                  <p className="my-0 text-[15px] leading-[1.6] text-[#6E6E73]">
                    Thank you for reaching out. A Himalayan operations planner will review your enquiry and contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="mt-0 mb-1 font-[Manrope,sans-serif] text-[22px] font-extrabold text-[#1C1C1E]">
                    Plan Your Itinerary
                  </h3>
                  <p className="mt-0 mb-[10px] text-[14px] text-[#6E6E73]">
                    Provide your trip preferences and we will prepare a complete proposal.
                  </p>

                  <div className={FIELD}>
                    <label className={LABEL}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`${INPUT} [transition:border-color_0.2s_ease]`}
                    />
                  </div>

                  <div className={FIELD}>
                    <label className={LABEL}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={INPUT}
                    />
                  </div>

                  <div className="grid grid-cols-[1fr_1fr] gap-4">
                    <div className={FIELD}>
                      <label className={LABEL}>Destination</label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className={`${INPUT} bg-white`}
                      >
                        <option>Everest Base Camp</option>
                        <option>Annapurna Circuit</option>
                        <option>Langtang Valley</option>
                        <option>Upper Mustang</option>
                        <option>Chitwan Jungle Safari</option>
                        <option>Custom Adventure</option>
                      </select>
                    </div>

                    <div className={FIELD}>
                      <label className={LABEL}>Target Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={INPUT}
                      />
                    </div>
                  </div>

                  <div className={FIELD}>
                    <label className={LABEL}>Message / Specific Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your fitness levels, timeline, group preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${INPUT} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-[10px] cursor-pointer rounded-[100px] border-none bg-[#EE6A22] p-4 text-[16px] font-semibold text-black shadow-[0_10px_24px_rgba(238,106,34,0.35)] [transition:transform_0.2s_ease,box-shadow_0.2s_ease,color_0.2s_ease] hover:text-white"
                    onMouseEnter={(e) => {
                      (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                      (e.target as HTMLButtonElement).style.boxShadow = "0 14px 30px rgba(238,106,34,.45)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLButtonElement).style.transform = "none";
                      (e.target as HTMLButtonElement).style.boxShadow = "0 10px 24px rgba(238,106,34,.35)";
                    }}
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </Reveal>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-[clamp(20px,5vw,64px)] pt-[60px] pb-[100px] bg-[#FAF9F6]">
        <div className="mx-auto max-w-[800px]">
          <Reveal className="text-center mb-11">
            <div className={EYEBROW}>FAQ</div>
            <h2 className={`${HEADING} text-[clamp(28px,3.8vw,42px)] mb-4`}>Frequently Asked Questions</h2>
            <p className="my-0 text-[16px] text-[#6E6E73]">
              Quick answers to planning details, altitude safety, and bookings.
            </p>
          </Reveal>

          <div className="flex flex-col gap-[14px]">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <Reveal key={idx}>
                  <div className="overflow-hidden rounded-2xl border border-[#eee] bg-white [transition:all_0.3s_ease]">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between border-none bg-transparent px-6 py-[22px] text-left cursor-pointer"
                    >
                      <span className="font-[Manrope,sans-serif] font-bold text-[17px] text-[#1C1C1E] pr-5">
                        {faq.q}
                      </span>
                      <span className={`text-[18px] font-semibold ${isOpen ? "text-[#EE6A22]" : "text-[#6E6E73]"}`}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="pt-0 px-6 pb-[22px] text-[15px] leading-[1.6] text-[#6E6E73] border-t border-[#f9f9f9]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
