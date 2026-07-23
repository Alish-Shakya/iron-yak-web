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
        <h2 className={`${HEADING} text-[clamp(28px,4vw,42px)] mb-[18px]`}>
          We are here for you
        </h2>
        <p className="m-0 text-[16px] leading-[1.6] text-[#6E6E73]">
          Feel free to visit our operations headquarters in Thamel, call us
          directly, or send us a message through the form.
        </p>
      </Reveal>

      <Reveal className="flex flex-col gap-5 mb-10">
        <div className="flex gap-4">
          <span className="text-[20px] font-bold text-[#EE6A22]">📍</span>
          <div>
            <div className="font-bold text-[16px] text-[#1C1C1E]">Address</div>
            <div className="mt-1 text-[15px] text-[#6E6E73]">
              Thamel, Ward 26, Kathmandu, Nepal
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-[20px] font-bold text-[#EE6A22]">📞</span>
          <div>
            <div className="font-bold text-[16px] text-[#1C1C1E]">
              Phone Numbers
            </div>
            <div className="mt-1 text-[15px] text-[#6E6E73] flex flex-wrap items-center gap-x-1">
              <a href="tel:+97714700812" className="hover:text-[#EE6A22] transition-colors">+977 1 4700812</a>
              <span aria-hidden="true">|</span>
              <a href="tel:+9779851023412" className="hover:text-[#EE6A22] transition-colors">+977 98510 23412</a>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-[20px] font-bold text-[#EE6A22]">✉</span>
          <div>
            <div className="font-bold text-[16px] text-[#1C1C1E]">
              Email Enquiries
            </div>
            <div className="mt-1 text-[15px] text-[#6E6E73] flex flex-wrap items-center gap-x-1">
              <a href="mailto:info@ironyak.com" className="hover:text-[#EE6A22] transition-colors">info@ironyak.com</a>
              <span aria-hidden="true">|</span>
              <a href="mailto:bookings@ironyak.com" className="hover:text-[#EE6A22] transition-colors">bookings@ironyak.com</a>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0240297605596!2d85.31800067628934!3d27.68565217619496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ceeeb5ad05%3A0xce133e61f1569681!2sCrayons%20Corp%20Pvt.%20Ltd.!5e0!3m2!1sne!2snp!4v1784191364715!5m2!1sne!2snp"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Iron Yak office location"
          />
        </div>
      </Reveal>
    </div>
  );
}
