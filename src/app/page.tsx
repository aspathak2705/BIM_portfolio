import { HeroSequence } from "@/components/hero/HeroSequence";
import { EngineeringTransition } from "@/components/sections/EngineeringTransition";
import { ServiceExplorer } from "@/components/sections/ServiceExplorer";
import { BIMSystemExplorer } from "@/components/sections/BIMSystemExplorer";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { ProjectPortfolio } from "@/components/sections/ProjectPortfolio";
import { WorkflowTimeline } from "@/components/sections/WorkflowTimeline";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { GlobalMarkets } from "@/components/sections/GlobalMarkets";
import { ContactIntake } from "@/components/sections/ContactIntake";

export default function HomePage() {
  return (
    <>
      {/* 1. CINEMATIC BIM HERO */}
      <HeroSequence />

      {/* 2. ENGINEERING MEETS BIM */}
      <EngineeringTransition />

      {/* 3. SERVICES */}
      <ServiceExplorer />

      {/* 4. ONE MODEL. MULTIPLE DISCIPLINES. */}
      <BIMSystemExplorer />

      {/* 5. FROM 2D TO 3D */}
      <BeforeAfterSlider />

      {/* 6. SELECTED PROJECTS */}
      <ProjectPortfolio />

      {/* 7. FROM BRIEF TO DELIVERY */}
      <WorkflowTimeline />

      {/* 8. WHY WORK WITH US */}
      <WhyUsSection />

      {/* 9. THE PERSON BEHIND THE MODEL */}
      <FounderSection />

      {/* 10. OUR TEAM */}
      <TeamSection />

      {/* 11. BUILT IN INDIA. READY FOR GLOBAL PROJECTS. */}
      <GlobalMarkets />

      {/* 12. HAVE A PROJECT IN MIND? */}
      <ContactIntake />
    </>
  );
}
