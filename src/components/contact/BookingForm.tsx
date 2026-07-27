"use client";

import { useState } from "react";

const FIELD = "flex flex-col gap-1.5";
const LABEL = "text-[13px] font-semibold text-[#1C1C1E]";
const INPUT =
  "rounded-[10px] border border-[#d2d2d7] px-4 py-3 text-[15px] [font-family:inherit] [outline:none]";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "Everest Base Camp",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl border border-[#eee] bg-white py-10 px-[clamp(24px,4.5vw,44px)] shadow-[0_14px_44px_rgba(28,28,30,0.04)]">
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

          <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
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
            className="mt-[10px] cursor-pointer rounded-[100px] border-none bg-[#EE6A22] p-4 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(238,106,34,0.35)] [transition:transform_0.2s_ease,box-shadow_0.2s_ease,color_0.2s_ease]"
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
    </div>
  );
}
