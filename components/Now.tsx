import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { now } from "@/lib/content";
import Image from "next/image";

export function Now() {
  return (
    <section id="now" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading index="08" title="Right now" />
        </FadeIn>

        <FadeIn className="mt-8">
          <div className="surface-card flex items-start gap-6 p-7 sm:p-8">
            <div className="logo-pad h-20 w-20 shrink-0 p-3">
              <Image
                src={now.logo}
                alt="UBC"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="body-text">{now.text}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
