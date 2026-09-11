import { About } from "@/components/About";
import { AppliedGhostedSpotlight } from "@/components/AppliedGhostedSpotlight";
import { BrewoSpotlight } from "@/components/BrewoSpotlight";
import { Education } from "@/components/Education";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Now } from "@/components/Now";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { Stack } from "@/components/Stack";
import { WorkTimeline } from "@/components/WorkTimeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="px-6 pt-16 sm:pt-20">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <SectionHeading index="01" title="My own products" />
            </FadeIn>
          </div>
        </section>
        <BrewoSpotlight />
        <AppliedGhostedSpotlight />
        <div className="section-divider" />
        <ProjectGrid />
        <div className="section-divider" />
        <ExperienceStrip />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <WorkTimeline />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Stack />
        <div className="section-divider" />
        <Now />
      </main>
      <Footer />
    </>
  );
}
