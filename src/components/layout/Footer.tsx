import Link from "next/link";
import { footerColumns, socials } from "@/data/navigation";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <FaInstagram />,
  Facebook: <FaFacebook />,
  YouTube: <FaYoutube />,
};

/** Site footer: brand blurb, link columns, newsletter, legal bar. */
export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#1C1C1E] text-white pt-[clamp(56px,7vw,88px)] px-[clamp(20px,5vw,64px)] pb-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-10 pb-[52px] border-b border-[rgba(255,255,255,0.12)]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/primary.png"
              alt="Iron Yak Logo"
              className="block h-10 w-auto mb-5"
            />
            <p className="text-[rgba(255,255,255,0.6)] text-[15px] leading-[1.65] max-w-[300px] mt-0 mb-5">
              Tours &amp; Travels Pvt. Ltd. Crafting authentic Himalayan
              journeys from Kathmandu since 2011.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-[16px] transition-[background] duration-200 hover:text-black"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="font-[Manrope,sans-serif] font-bold text-[15px] mb-[18px]">
                {col.title}
              </div>
              <div className="flex flex-col gap-3 text-[rgba(255,255,255,0.6)] text-[15px]">
                {col.links.map((l) => {
                  const isExternal =
                    l.href.startsWith("#") || l.href.startsWith("http");
                  return isExternal ? (
                    <a key={l.label} href={l.href}>
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.label} href={l.href}>
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          <div>
            <div className="font-[Manrope,sans-serif] font-bold text-[15px] mb-[18px]">
              Trail notes
            </div>
            <p className="text-[rgba(255,255,255,0.6)] text-[15px] leading-[1.55] mt-0 mb-[14px]">
              Seasonal routes and travel tips, a few times a year.
            </p>
            <div className="flex gap-2 bg-[rgba(255,255,255,0.08)] rounded-[100px] py-[5px] pr-[5px] pl-[18px]">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border-none outline-none text-white text-[14px] font-[Inter,sans-serif]"
              />
              <button className="border-none bg-[#EE6A22] text-black font-semibold text-[14px] px-[18px] py-2.5 rounded-[100px] cursor-pointer transition-colors duration-200 hover:text-white">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-3 pt-[26px] text-[rgba(255,255,255,0.4)] text-[13px]">
          <div>
            © 2026 Iron Yak Tours &amp; Travels Pvt. Ltd. · Thamel, Kathmandu,
            Nepal
          </div>
          <div className="flex gap-[22px]">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">+977 1 4XXXXXX</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
