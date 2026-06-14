import { About } from "@/components/About";
import { BrewoSpotlight } from "@/components/BrewoSpotlight";
import { Education } from "@/components/Education";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Now } from "@/components/Now";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Stack } from "@/components/Stack";
import { WorkTimeline } from "@/components/WorkTimeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrewoSpotlight />
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
