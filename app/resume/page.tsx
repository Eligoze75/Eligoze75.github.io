import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume · Elí Gonzalez",
  description: "Resume of Elí Gonzalez — Data Scientist, AI Engineer & Builder.",
};

const RESUME_PATH = "/Eli_Gonzalez_Resume.pdf";
const SHARE_URL = "https://eligoze75.github.io/resume";
const FILE_URL = "https://eligoze75.github.io/Eli_Gonzalez_Resume.pdf";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="px-6 pb-20 pt-32 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="hero-heading text-white">Resume</h1>
          <p className="body-text mt-4">
            Elí Gonzalez — Data Scientist, AI Engineer &amp; Builder
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={RESUME_PATH}
              download="Eli_Gonzalez_Resume.pdf"
              className="btn-primary"
            >
              Download
            </a>
            <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Open in new tab
            </a>
          </div>
          <div className="surface-card mt-8 overflow-hidden">
            <iframe
              src={RESUME_PATH}
              title="Elí Gonzalez Resume"
              className="h-[80vh] w-full border-0"
            />
          </div>
          <div className="surface-card mt-8 space-y-3 p-6">
            <p className="body-text">
              Share this page:{" "}
              <a href={SHARE_URL} className="text-[var(--color-accent)] hover:underline">
                {SHARE_URL}
              </a>
            </p>
            <p className="body-text">
              Direct file link:{" "}
              <a href={FILE_URL} className="text-[var(--color-accent)] hover:underline">
                {FILE_URL}
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
