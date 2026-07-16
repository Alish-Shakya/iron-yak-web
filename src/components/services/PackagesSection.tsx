import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/buttons";

const EYEBROW =
  "mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#EE6A22]";
const HEADING =
  "mt-0 font-[Manrope,sans-serif] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em]";
const SECTION_INTRO = "mx-auto my-0 max-w-[540px] text-[16px] text-[#6E6E73]";

const PACKAGES = [
  {
    name: "Classic Trek",
    price: "NRP 1,490",
    desc: "Perfect for independent travelers looking for safety and support on standard routes.",
    features: [
      "Certified local guide",
      "All required park permits",
      "Standard tea house stays",
      "Kathmandu airport transfers",
      "First aid and altitude protocol",
    ],
    ctaText: "Choose Classic",
    popular: false,
  },
  {
    name: "Premium Experience",
    price: "NRP 2,290",
    desc: "Our most popular tier. Elevates comfort and adds peace of mind with flight credits and porter support.",
    features: [
      "Lead guide + dedicated porters",
      "Premium tea house rooms (with private bath)",
      "Daily hot showers & charging credits",
      "Kathmandu boutique hotel (3 nights)",
      "Lukla helicopter upgrade option",
      "All meals on trail included",
    ],
    ctaText: "Choose Premium",
    popular: true,
  },
  {
    name: "Custom Tailored",
    price: "Custom",
    desc: "Designed from scratch. Best for private families, photography tours, or peak ascents.",
    features: [
      "Custom dates & group sizes",
      "Dedicated medical consultant",
      "Flexible, unhurried acclimatization",
      "Special permit coordination",
      "Private vehicle and guide escort",
      "Satellite tracker rental",
    ],
    ctaText: "Inquire Custom",
    popular: false,
  },
];

export function PackagesSection() {
  return (
    <section className="bg-[#FAF9F6] px-[clamp(20px,5vw,64px)] pt-[50px] pb-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-[52px] text-center">
          <div className={EYEBROW}>Trek Packages</div>
          <h2 className={`${HEADING} mb-4`}>Choose your level of comfort</h2>
          <p className={SECTION_INTRO}>
            Whether you want a classic adventure or full-service convenience,
            we have a package tier built for you.
          </p>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-[26px]">
          {PACKAGES.map((pkg, idx) => (
            <Reveal
              key={idx}
              className={`relative flex flex-col justify-between rounded-3xl border border-[#eee] px-[34px] py-[44px] ${
                pkg.popular
                  ? "bg-[#1C1C1E] text-white shadow-[0_20px_40px_rgba(28,28,30,0.2)] [transform:translateY(-8px)]!"
                  : "bg-white text-[#1C1C1E] shadow-[0_10px_30px_rgba(0,0,0,0.03)] [transform:none]!"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-5 right-5 rounded-[100px] bg-[#EE6A22] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.05em] text-white">
                  Best Value
                </div>
              )}
              <div>
                <h3 className="mt-0 mb-[10px] font-[Manrope,sans-serif] text-[22px] font-extrabold">
                  {pkg.name}
                </h3>
                <div className="mb-4 flex items-baseline gap-1.5">
                  <span
                    className={`font-[Manrope,sans-serif] text-[36px] font-extrabold ${pkg.popular ? "text-white" : "text-[#EE6A22]"}`}
                  >
                    {pkg.price}
                  </span>
                  {pkg.price !== "Custom" && (
                    <span
                      className={`text-[14px] ${pkg.popular ? "text-[rgba(255,255,255,0.6)]" : "text-[#6E6E73]"}`}
                    >
                      / person
                    </span>
                  )}
                </div>
                <p
                  className={`mt-0 mb-7 text-[14px] leading-[1.5] ${pkg.popular ? "text-[rgba(255,255,255,0.7)]" : "text-[#6E6E73]"}`}
                >
                  {pkg.desc}
                </p>

                <div
                  className={`mb-[34px] border-t pt-6 ${pkg.popular ? "border-t-[rgba(255,255,255,0.12)]" : "border-t-[#f2f2f2]"}`}
                >
                  <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[14px]">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5">
                        <span className="font-bold text-[#EE6A22]">✓</span>
                        <span
                          className={
                            pkg.popular
                              ? "text-[rgba(255,255,255,0.85)]"
                              : "text-[#3A3A3C]"
                          }
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <PrimaryButton
                href="/contact?package="
                padding="14px 28px"
                fontSize={14}
                shadow={
                  pkg.popular ? "0 8px 24px rgba(238,106,34,.3)" : "none"
                }
                hoverShadow={
                  pkg.popular ? "0 12px 30px rgba(238,106,34,.45)" : "none"
                }
                style={{
                  alignSelf: "stretch",
                  textAlign: "center",
                  justifyContent: "center",
                  background: pkg.popular ? "#EE6A22" : "transparent",
                  color: pkg.popular ? "#fff" : "#EE6A22",
                  border: pkg.popular ? "none" : "1px solid #EE6A22",
                }}
              >
                {pkg.ctaText}
              </PrimaryButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
