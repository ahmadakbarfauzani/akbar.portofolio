import React from 'react';
import Image from 'next/image';
import RevealUp from '@/components/RevealUp';
import FooterSection from '@/components/FooterSection';
import TopNavigation from '@/components/TopNavigation';
import { ArrowUpRight } from 'lucide-react';

export default function UiUxDesignPage() {
  return (
    <main className="bg-black text-[#EAEAEA] min-h-screen font-sans flex flex-col">
      <TopNavigation />
      <div className="w-full px-4 md:px-12 lg:px-20 py-8 md:py-12 flex-grow">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full">
        
        {/* Header Section */}
        <RevealUp delay={0.1} duration={0.8}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-8 pb-4 border-b border-[#333333]">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-left">UI/UX Layout</h1>
            
            {/* Metadata Tags */}
            <div className="flex flex-row gap-3">
              <span className="px-4 py-1 text-xs uppercase tracking-wider border border-[#333333] rounded-full text-[#A0A0A0]">
                UI/UX
              </span>
              <span className="px-4 py-1 text-xs uppercase tracking-wider border border-[#333333] rounded-full text-[#A0A0A0]">
                Web
              </span>
              <span className="px-4 py-1 text-xs uppercase tracking-wider border border-[#333333] rounded-full text-[#A0A0A0]">
                Interface
              </span>
            </div>
          </div>
        </RevealUp>

        {/* Narrative Body Content */}
        <RevealUp delay={0.3} duration={0.8}>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-[#A0A0A0] mt-4">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl mb-4">
              <Image
                src="/hm.png"
                alt="UI/UX Layout Concept"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                priority
              />
            </div>
            <p>
              An editorial layout concept focused on the competitive scene of Valorant. The design features a bold, aggressive typography and a high-contrast dark theme that matches the game&apos;s aesthetic and intensity.
            </p>
            <p>
              The layout is structured to handle dense information—such as player stats, match analyses, and team overviews—while maintaining a clear visual hierarchy and energetic pacing suitable for esports audiences.
            </p>
            <p>
              This project explores the intersection of traditional editorial design principles and modern digital gaming culture.
            </p>
          </div>
        </RevealUp>

        <RevealUp delay={0.4} duration={0.8}>
          <hr className="border-[#333333] border-t-1 w-full my-8" />
        </RevealUp>

        {/* Image Section */}
        <div className="flex flex-col gap-12 mt-4">
          <RevealUp delay={0.5} duration={0.8}>
            <div className="flex flex-col gap-4">
              <div className="relative w-full overflow-hidden rounded-xl bg-[#1A1C20] flex justify-center">
                <Image
                  src="/wad.png" 
                  alt="UI/UX Detail Layout"
                  width={1200}
                  height={3000}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-2xl mx-auto text-center mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
            </div>
          </RevealUp>
        </div>
        
        {/* Behance Button */}
        <RevealUp delay={0.9} duration={0.8}>
          <div className="flex justify-center mt-12 pb-12">
            <a
              href="https://www.behance.net/ahmadfauzani1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-neutral-900 border border-neutral-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:scale-[1.03] hover:bg-red-950 hover:border-red-500 group"
            >
              See on Behance
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </RevealUp>
      </div>
      </div>
      <FooterSection />
    </main>
  );
}