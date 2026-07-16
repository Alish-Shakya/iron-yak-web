import { Reveal } from "@/components/ui/Reveal";

const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";
const HEADING =
  "mt-0 font-[Manrope,sans-serif] font-extrabold leading-[1.05] tracking-[-0.03em]";

export function ContactInfo() {
  return (
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

      <Reveal>
        <div className="relative flex h-[260px] flex-col justify-between overflow-hidden rounded-3xl bg-[#1C1C1E] p-6 text-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
          <div className="flex justify-between items-center z-[2]">
            <div className="font-[Manrope,sans-serif] font-extrabold text-[15px]">KATHMANDU HQ</div>
            <div className="text-[11px] font-[ui-monospace,monospace] text-[rgba(255,255,255,0.4)]">27.7172° N · 85.3150° E</div>
          </div>

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
  );
}
