import dynamic from "next/dynamic";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import AiCompanion from "@/components/ai-companion";

// Dynamically import heavy Three.js components (client-only, no SSR)
const ParticleBackground = dynamic(
  () => import("@/components/particle-background"),
  { ssr: false }
);
const MagneticCursor = dynamic(
  () => import("@/components/magnetic-cursor"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <ParticleBackground />
      <MagneticCursor />
      <AiCompanion />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
