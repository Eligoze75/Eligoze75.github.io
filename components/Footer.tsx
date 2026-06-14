import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="flex items-center gap-2 text-sm font-bold text-white">
          <span className="text-[var(--color-accent)]">/</span>
          {site.name}
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-[var(--color-muted)]">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={site.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label transition-colors hover:text-white"
          >
            Medium
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mono-label transition-colors hover:text-white"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
