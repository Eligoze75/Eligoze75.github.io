import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
};

export function SectionHeading({ index, eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="mono-label text-[var(--color-accent)]">{index}</span>
        <span className="h-px w-8 bg-[var(--color-border)]" aria-hidden="true" />
        {eyebrow ? (
          <span className="mono-label text-[var(--color-muted)]">{eyebrow}</span>
        ) : null}
      </div>
      <h2 className="section-heading">{title}</h2>
      {lede ? <p className="section-lede">{lede}</p> : null}
    </div>
  );
}
