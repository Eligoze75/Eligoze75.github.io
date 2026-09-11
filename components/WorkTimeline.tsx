import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { workTimeline } from "@/lib/content";
import Image from "next/image";

export function WorkTimeline() {
  return (
    <section id="work" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            index="05"
            title="Work"
            lede="Six years across fintech, a Latin American unicorn, and a global consumer brand. A few of the problems I got to chew on along the way."
          />
        </FadeIn>

        <div className="mt-10 space-y-5">
          {workTimeline.map((entry, i) => (
            <FadeIn key={entry.company} delay={i * 0.05}>
              <article className="surface-card p-7 sm:p-8">
                <div className="mb-5 flex items-start gap-5">
                  <div
                    className={`h-20 w-20 shrink-0 p-3 ${
                      entry.darkBg ? "logo-pad logo-pad--dark" : "logo-pad"
                    }`}
                  >
                    <Image
                      src={entry.logo}
                      alt={entry.company}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {entry.company}{" "}
                      <span className="mono-meta ml-1 font-normal text-[var(--color-faint)]">
                        {entry.tag}
                      </span>
                    </p>
                    <p className="text-base text-[var(--color-muted)]">{entry.role}</p>
                  </div>
                </div>
                <p className="body-text">
                  {entry.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
