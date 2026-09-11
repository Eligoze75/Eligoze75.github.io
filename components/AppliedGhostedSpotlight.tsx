import { FadeIn } from "@/components/FadeIn";
import { appliedGhosted } from "@/lib/content";
import Image from "next/image";

export function AppliedGhostedSpotlight() {
  return (
    <section id="applied-and-ghosted" className="px-6 pb-16 pt-4 sm:pb-20 sm:pt-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-6 flex items-center gap-3 rounded-[var(--radius-card)] border border-white/18 bg-white/[0.05] px-5 py-4">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <p className="mono-label text-white">Currently cooking</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                In progress · Founder
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div className="surface-card flex h-full flex-col p-8 sm:p-10">
              <span className="tag mb-6 w-fit">{appliedGhosted.badge}</span>
              <div className="mb-6 flex items-center gap-5">
                <div className="logo-pad logo-pad--dark h-20 w-20 shrink-0 p-3 sm:h-24 sm:w-24">
                  <Image
                    src={appliedGhosted.logo}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {appliedGhosted.name}
                </span>
              </div>
              <p className="mb-3 text-base font-medium text-[var(--color-accent)]">
                {appliedGhosted.tagline}
              </p>
              <p className="body-text mb-8">{appliedGhosted.description}</p>
              <p className="mono-label mb-3 text-[var(--color-faint)]">How</p>
              <ul className="mb-8 flex-1 space-y-4">
                {appliedGhosted.contributions.map((item) => (
                  <li key={item} className="body-text flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={appliedGhosted.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit appliednghosted.com
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="surface-card relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden p-8 sm:p-10">
              <div className="relative flex flex-1 flex-col items-center justify-center py-6">
                <a
                  href={appliedGhosted.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit appliednghosted.com"
                  className="logo-pad logo-pad--dark mb-8 h-40 w-40 p-6 sm:h-48 sm:w-48"
                >
                  <Image
                    src={appliedGhosted.logo}
                    alt="Applied & Ghosted"
                    width={200}
                    height={200}
                    className="h-full w-full object-contain"
                  />
                </a>
                <p className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {appliedGhosted.name}
                </p>
                <p className="body-text mt-3 max-w-xs text-center">
                  If you&apos;ve been ghosted too, welcome.
                </p>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {appliedGhosted.tags.map((tag) => (
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
