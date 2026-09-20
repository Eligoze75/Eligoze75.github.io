import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

type ProductAction = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
};

type ProductSpotlightProps = {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  contributions: string[];
  tags: string[];
  logo: string;
  logoDark?: boolean;
  delay?: number;
  actions: ProductAction[];
};

export function ProductSpotlight({
  id,
  name,
  badge,
  tagline,
  description,
  contributions,
  tags,
  logo,
  logoDark = false,
  delay = 0,
  actions,
}: ProductSpotlightProps) {
  return (
    <FadeIn delay={delay}>
      <article id={id} className="surface-card p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <div
            className={`logo-pad h-16 w-16 shrink-0 p-2 sm:h-[4.5rem] sm:w-[4.5rem] ${
              logoDark ? "logo-pad--dark" : ""
            }`}
          >
            <Image
              src={logo}
              alt=""
              width={72}
              height={72}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="tag">{badge}</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
              {tagline}
            </p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-muted)] sm:text-base">
              {description}
            </p>
            <ul className="mt-3 space-y-1.5">
              {contributions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-[var(--color-muted)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={action.variant === "ghost" ? "btn-ghost" : "btn-primary"}
                >
                  {action.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="skill-chip text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
