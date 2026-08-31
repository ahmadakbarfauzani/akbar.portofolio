import ActionButtons from "@/components/ActionButtons";
import ValueProposition from "@/components/ValueProposition";
import SocialContainer from "@/components/SocialContainer";
import TopNavigation from "@/components/TopNavigation";
import HeroIntro from "@/components/HeroIntro";
import PrimaryProject from "@/components/PrimaryProject";
import SecondaryProjects from "@/components/SecondaryProjects";
import AboutSection from "@/components/AboutSection";
import ClosingStatement from "@/components/ClosingStatement";
import ServicesSection from "@/components/ServicesSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import FaqsSection from "@/components/FaqsSection";
import FooterSection from "@/components/FooterSection";
import RevealUp from "@/components/RevealUp";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white">
      <TopNavigation />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12 lg:px-20 py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-24 lg:gap-32">

        {/* Left Column (Sticky Sidebar) */}
        <aside className="w-full md:w-[35%] lg:w-[30%] flex flex-col md:sticky md:top-[120px] h-auto md:h-[calc(100vh-160px)]">
          <RevealUp delay={0.15} duration={0.7}>
            <ActionButtons />
          </RevealUp>
          <RevealUp delay={0.25} duration={0.7}>
            <ValueProposition />
          </RevealUp>
          <RevealUp delay={0.35} duration={0.7} className="mt-auto">
            <SocialContainer />
          </RevealUp>
        </aside>

        {/* Right Column (Scrollable Content) */}
        <section className="w-full md:w-[65%] lg:w-[70%] flex flex-col">
          <RevealUp delay={0.2} duration={0.8} distance={50}>
            <HeroIntro />
          </RevealUp>
          <RevealUp delay={0.35} duration={0.8} distance={50}>
            <PrimaryProject />
          </RevealUp>
          <RevealUp delay={0.45} duration={0.8} distance={50}>
            <SecondaryProjects />
          </RevealUp>
          <RevealUp delay={0.55} duration={0.8} distance={50}>
            <ClosingStatement />
          </RevealUp>
        </section>

      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <AboutSection />
        <ServicesSection />
        <TrackRecordSection />
        <FaqsSection />
      </div>
      <FooterSection />
    </main>
  );
}
