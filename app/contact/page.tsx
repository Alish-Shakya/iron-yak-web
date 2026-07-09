"use client";

import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { eyebrow, h2Base, INK, MANROPE, MUTED, ORANGE } from "../components/theme";

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
      <section style={{ padding: "80px clamp(20px,5vw,64px) 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.3fr", gap: 50, alignItems: "start" }}>
            
            {/* Left Column: Info & Map */}
            <div>
              <Reveal style={{ marginBottom: 36 }}>
                <div style={{ ...eyebrow, marginBottom: 12 }}>Kathmandu Office</div>
                <h2 style={{ ...h2Base, fontSize: "clamp(28px, 4vw, 42px)", marginBottom: 18 }}>We are here for you</h2>
                <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                  Feel free to visit our operations headquarters in Thamel, call us directly, or send us a message through the form.
                </p>
              </Reveal>

              <Reveal style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <span style={{ color: ORANGE, fontSize: 20, fontWeight: 700 }}>📍</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#1C1C1E" }}>Address</div>
                    <div style={{ color: MUTED, fontSize: 15, marginTop: 4 }}>Thamel, Ward 26, Kathmandu, Nepal</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <span style={{ color: ORANGE, fontSize: 20, fontWeight: 700 }}>📞</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#1C1C1E" }}>Phone Numbers</div>
                    <div style={{ color: MUTED, fontSize: 15, marginTop: 4 }}>+977 1 4700812 &nbsp;|&nbsp; +977 98510 23412</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <span style={{ color: ORANGE, fontSize: 20, fontWeight: 700 }}>✉</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#1C1C1E" }}>Email Enquiries</div>
                    <div style={{ color: MUTED, fontSize: 15, marginTop: 4 }}>info@ironyak.com &nbsp;|&nbsp; bookings@ironyak.com</div>
                  </div>
                </div>
              </Reveal>

              {/* Map Placeholder */}
              <Reveal>
                <div
                  style={{
                    background: INK,
                    borderRadius: 24,
                    height: 260,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 24,
                    color: "#fff",
                    boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                    overflow: "hidden",
                  }}
                >
                  {/* Grid Lines Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2 }}>
                    <div style={{ fontFamily: MANROPE, fontWeight: 800, fontSize: 15 }}>KATHMANDU HQ</div>
                    <div style={{ fontSize: 11, fontFamily: "ui-monospace,monospace", color: "rgba(255,255,255,.4)" }}>27.7172° N · 85.3150° E</div>
                  </div>
                  
                  {/* Styled pin center */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", zIndex: 2 }}>
                    <div style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(238,106,34,.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animation: "iy-zoom 2s infinite ease-out"
                    }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EE6A22" }} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", display: "block", marginTop: 8, color: "#EE6A22" }}>IRON YAK</span>
                  </div>

                  <div style={{ zIndex: 2, fontSize: 12, color: "rgba(255,255,255,.5)", display: "flex", justifyContent: "space-between" }}>
                    <span>ZOOM: 14.5x</span>
                    <span>ACTIVE TRACKING</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact/Booking Form */}
            <Reveal
              style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: 24,
                padding: "40px clamp(24px, 4.5vw, 44px)",
                boxShadow: "0 14px 44px rgba(28,28,30,.04)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🏔️</div>
                  <h3 style={{ fontFamily: MANROPE, fontSize: 24, fontWeight: 800, margin: "0 0 12px", color: "#1C1C1E" }}>
                    Journey Request Received!
                  </h3>
                  <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    Thank you for reaching out. A Himalayan operations planner will review your enquiry and contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <h3 style={{ fontFamily: MANROPE, fontSize: 22, fontWeight: 800, margin: "0 0 4px", color: "#1C1C1E" }}>
                    Plan Your Itinerary
                  </h3>
                  <p style={{ color: MUTED, fontSize: 14, margin: "0 0 10px" }}>
                    Provide your trip preferences and we will prepare a complete proposal.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1C1E" }}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: "1px solid #d2d2d7",
                        fontSize: 15,
                        outline: "none",
                        fontFamily: "inherit",
                        transition: "border-color .2s ease",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1C1E" }}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: "1px solid #d2d2d7",
                        fontSize: 15,
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1C1E" }}>Destination</label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        style={{
                          padding: "12px 16px",
                          borderRadius: 10,
                          border: "1px solid #d2d2d7",
                          fontSize: 15,
                          outline: "none",
                          fontFamily: "inherit",
                          background: "#fff",
                        }}
                      >
                        <option>Everest Base Camp</option>
                        <option>Annapurna Circuit</option>
                        <option>Langtang Valley</option>
                        <option>Upper Mustang</option>
                        <option>Chitwan Jungle Safari</option>
                        <option>Custom Adventure</option>
                      </select>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1C1E" }}>Target Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        style={{
                          padding: "12px 16px",
                          borderRadius: 10,
                          border: "1px solid #d2d2d7",
                          fontSize: 15,
                          outline: "none",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1C1E" }}>Message / Specific Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your fitness levels, timeline, group preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: "1px solid #d2d2d7",
                        fontSize: 15,
                        outline: "none",
                        fontFamily: "inherit",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: "#EE6A22",
                      color: "#fff",
                      border: "none",
                      padding: "16px",
                      borderRadius: 100,
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                      boxShadow: "0 10px 24px rgba(238,106,34,.35)",
                      marginTop: 10,
                      transition: "transform .2s ease, box-shadow .2s ease",
                    }}
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
      <section style={{ padding: "60px clamp(20px,5vw,64px) 100px", background: "#FAF9F6" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ ...eyebrow, marginBottom: 12 }}>FAQ</div>
            <h2 style={{ ...h2Base, fontSize: "clamp(28px, 3.8vw, 42px)", marginBottom: 16 }}>Frequently Asked Questions</h2>
            <p style={{ color: MUTED, fontSize: 16, margin: 0 }}>
              Quick answers to planning details, altitude safety, and bookings.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <Reveal key={idx}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 16,
                      border: "1px solid #eee",
                      overflow: "hidden",
                      transition: "all .3s ease",
                    }}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      style={{
                        width: "100%",
                        padding: "22px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ fontFamily: MANROPE, fontWeight: 700, fontSize: 17, color: "#1C1C1E", paddingRight: 20 }}>
                        {faq.q}
                      </span>
                      <span style={{ fontSize: 18, color: isOpen ? "#EE6A22" : MUTED, fontWeight: 600 }}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 24px 22px 24px", color: MUTED, fontSize: 15, lineHeight: 1.6, borderTop: "1px solid #f9f9f9" }}>
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
