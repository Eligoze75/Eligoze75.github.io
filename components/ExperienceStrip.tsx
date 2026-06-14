import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/lib/content";
import Image from "next/image";

export function ExperienceStrip() {
  return (
    <section id="experience" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            index="03"
            title="Where I've worked"
            lede="Startups, a unicorn, and a global brand. Different settings, but mostly the same job: find where data and AI can help a business grow."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {experience.map((item, i) => (
            <FadeIn key={item.company} delay={i * 0.05}>
              <div className="surface-card flex h-full flex-col p-6">
                <div
                  className={`mb-5 h-20 w-full px-4 ${
                    item.darkBg ? "logo-pad logo-pad--dark" : "logo-pad"
                  }`}
                >
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={120}
                    height={48}
                    className="h-12 w-auto max-w-[8rem] object-contain"
                  />
                </div>
                <p className="text-base font-semibold text-white">{item.company}</p>
                <p className="mt-1 text-base text-[var(--color-muted)]">{item.role}</p>
                <p className="mono-meta mt-2 text-[var(--color-faint)]">{item.domain}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
