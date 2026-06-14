import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { brewo } from "@/lib/content";
import Image from "next/image";

export function BrewoSpotlight() {
  return (
    <section id="brewo" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-8">
            <SectionHeading index="01" eyebrow="Featured product" title="My own product" />
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div className="surface-card flex h-full flex-col p-8 sm:p-10">
              <span className="tag mb-6 w-fit">{brewo.badge}</span>
              <div className="mb-6 flex items-center gap-5">
                <div className="logo-pad h-20 w-20 shrink-0 p-3 sm:h-24 sm:w-24">
                  <Image
                    src={brewo.logo}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  brewo
                </span>
              </div>
              <p className="mb-3 text-base font-medium text-[var(--color-accent)]">
                {brewo.tagline}
              </p>
              <p className="body-text mb-8">{brewo.description}</p>
              <ul className="mb-8 flex-1 space-y-4">
                {brewo.contributions.map((item) => (
                  <li
                    key={item}
                    className="body-text flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={brewo.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit brewo.io
                </a>
                <a
                  href={brewo.links.subscribe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="surface-card relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden p-8 sm:p-10">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative flex flex-1 flex-col items-center justify-center py-6">
                <a
                  href={brewo.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit brewo.io"
                  className="logo-pad mb-8 h-40 w-40 p-6 transition-transform hover:-translate-y-0.5 sm:h-48 sm:w-48"
                >
                  <Image
                    src={brewo.cupLogo}
                    alt="Brewo"
                    width={200}
                    height={200}
                    className="h-full w-full object-contain"
                  />
                </a>
                <p className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  brewo
                </p>
                <p className="body-text mt-3 max-w-xs text-center">
                  AI-brewed startups, tech &amp; finance for LATAM
                </p>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {brewo.tags.map((tag) => (
                  <span key={tag} className="skill-chip text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
