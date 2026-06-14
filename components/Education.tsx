import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/lib/content";
import Image from "next/image";

export function Education() {
  return (
    <section id="education" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading index="06" title="Education" />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {education.map((item, i) => (
            <FadeIn key={item.degree} delay={i * 0.05}>
              <div className="surface-card flex h-full flex-col p-6 sm:p-7">
                <div className="logo-pad mb-5 h-20 w-20 p-3">
                  <Image
                    src={item.logo}
                    alt=""
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-base font-semibold text-white">{item.degree}</p>
                <p className="body-text mt-2">{item.school}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
