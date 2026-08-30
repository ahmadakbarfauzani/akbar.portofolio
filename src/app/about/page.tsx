import TopNavigation from "@/components/TopNavigation";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white">
      <TopNavigation />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-12">
        <AboutSection />
      </div>
    </main>
  );
}
