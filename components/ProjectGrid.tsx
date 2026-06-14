import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, type Project } from "@/lib/content";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      {project.logos ? (
        <div className="mb-6 flex flex-wrap items-center gap-4">
          {project.logos.map((logo) => (
            <div key={logo.alt} className="logo-pad h-24 w-24 p-3 sm:h-28 sm:w-28">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      ) : project.logo ? (
        <div className="logo-pad mb-6 h-24 w-24 p-3 sm:h-28 sm:w-28">
          <Image
            src={project.logo}
            alt=""
            width={96}
            height={96}
            className="h-full w-full object-contain"
          />
        </div>
      ) : null}

      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="tag">{project.tag}</span>
        <span className="mono-meta text-[var(--color-faint)]">{project.meta}</span>
      </div>

      <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
        {project.title}
      </h3>
      <p className="body-text mb-6 flex-1">
        {project.description}
      </p>
      <span className="mono-meta font-medium text-[var(--color-accent)]">
        {project.cta}
        {project.href ? <span aria-hidden="true"> -&gt;</span> : null}
      </span>
    </>
  );

  const className = `surface-card flex h-full flex-col p-7 sm:p-8 transition-transform hover:-translate-y-0.5 ${
    project.featured ? "md:col-span-2" : ""
  }`;

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export function ProjectGrid() {
  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            index="02"
            title="Projects"
            lede="A mix of things I've built, some at work and some on my own. They look unrelated until you notice they're all me poking at the same question from different angles."
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <FadeIn key={project.id} className="md:col-span-2" delay={i * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
          {standard.map((project, i) => (
            <FadeIn key={project.id} delay={(i + 1) * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
