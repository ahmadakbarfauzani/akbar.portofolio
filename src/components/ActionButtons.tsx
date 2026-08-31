"use client";

import { ArrowUpRight } from "lucide-react";
import { globalLenis } from "./SmoothScrollProvider";

export default function ActionButtons() {
  const handleBookCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (globalLenis) {
      globalLenis.scrollTo("#contact", { offset: -100 });
    } else {
      const target = document.querySelector("#contact");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-4 mb-6 md:my-8">
      <a
        href="#contact"
        onClick={handleBookCall}
        className="flex items-center justify-between w-full max-w-full md:max-w-[240px] bg-neutral-900 border border-neutral-700 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:scale-[1.03] hover:bg-red-950 hover:border-red-500 group"
      >
        Book a call
        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
      <a
        href="https://www.behance.net/ahmadfauzani1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full max-w-full md:max-w-[240px] bg-neutral-900 border border-neutral-700 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:scale-[1.03] hover:bg-red-950 hover:border-red-500 group"
      >
        More Projects
        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </div>
  );
}
