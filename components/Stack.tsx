import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { expertise } from "@/lib/content";

export function Stack() {
  return (
    <section id="skills" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            index="07"
            title="What I work on"
            lede="Less a list of tools, more the handful of areas I keep coming back to, and how they tend to feed into each other."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((area, i) => (
            <FadeIn key={area.name} delay={i * 0.05}>
              <div className="surface-card flex h-full flex-col p-7">
                <h3 className="text-lg font-semibold text-white">
                  {area.name}
                </h3>
                <p className="body-text mt-2 flex-1 text-base">{area.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <span key={item} className="skill-chip text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
