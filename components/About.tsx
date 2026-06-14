import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading index="04" title={about.title} />
        </FadeIn>

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <FadeIn className="lg:col-span-8" delay={0.05}>
            <div className="surface-card h-full p-8 sm:p-10">
              <div className="space-y-5">
                {about.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-xl font-medium text-white sm:text-2xl"
                        : "body-text"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-4" delay={0.1}>
            <div className="surface-card p-7 sm:p-8 lg:sticky lg:top-24">
              <p className="mono-label mb-5 text-[var(--color-faint)]">
                // profile
              </p>
              <dl>
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] py-3 first:border-t-0 first:pt-0"
                  >
                    <dt className="mono-meta text-[var(--color-faint)]">
                      {fact.label}
                    </dt>
                    <dd className="mono-meta text-right text-[var(--color-text)]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
