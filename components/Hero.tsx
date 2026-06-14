import { FadeIn } from "@/components/FadeIn";
import { hero, site } from "@/lib/content";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="hero-shapes" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
            <Image
              src={hero.avatar}
              alt="Elí Gonzalez"
              width={320}
              height={320}
              priority
              className="h-56 w-56 shrink-0 rounded-[var(--radius-card)] border border-[var(--color-border)] object-cover sm:h-72 sm:w-72"
            />
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="mono-label text-[var(--color-faint)]">
                  Vancouver, BC
                </span>
              </div>
              <p className="mono-label mb-5 text-[var(--color-accent)]">
                {hero.pillars.join(" / ")}
              </p>
              <h1 className="hero-heading text-white">
                {hero.headline}
              </h1>
              <div className="mt-6 max-w-2xl space-y-4">
                {hero.intro.map((paragraph) => (
                  <p key={paragraph} className="body-text">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  LinkedIn
                </a>
                <a
                  href={site.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Read my writing
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
