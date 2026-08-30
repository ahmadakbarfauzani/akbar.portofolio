"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { globalLenis } from "@/components/SmoothScrollProvider";

export default function FaqsSection() {
  // Generate 6 identical FAQs to enable scrolling as requested
  const faqs = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    q: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    a: "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  }));

  return (
    <section id="faqs" className="py-12 md:py-24 mb-8 md:mb-12">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 relative">
        
        {/* Left Column (Sticky Header & CTA) */}
        <div className="w-full md:w-[45%] flex flex-col items-start md:sticky md:top-24 h-auto md:h-fit">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-widest text-neutral-500 font-bold mb-8"
          >
            FAQS
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight text-white mb-10"
          >
            Still on the fence?<br />
            Let's clear things up.
          </motion.h3>

          <motion.button
            type="button"
            onClick={() => {
              // Set hash so FooterSection highlight animation triggers
              window.history.pushState(null, "", "#contact");
              if (globalLenis) {
                globalLenis.scrollTo("#contact", {
                  offset: 0,
                  duration: 1.6,
                  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              } else {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-transform hover:scale-105 group"
          >
            ASK
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        {/* Right Column (Category & Scrollable Q&A) */}
        <div className="w-full md:w-[55%] flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Category Header */}
            <div className="sticky top-0 bg-black z-10 pb-4">
              <h4 className="border-l-2 border-white pl-4 text-white uppercase tracking-widest text-sm font-bold">
                | SUBSCRIPTION & REVISION
              </h4>
            </div>

            {/* Scrollable Container */}
            <div className="mt-6 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-4 custom-scrollbar" style={{ WebkitOverflowScrolling: "touch" }}>
              <dl>
                {faqs.map((faq) => (
                  <div key={faq.id} className="mb-8 last:mb-0">
                    <dt className="text-lg md:text-xl font-medium text-white mb-3">
                      {faq.q}
                    </dt>
                    <dd className="text-gray-300 leading-relaxed text-sm md:text-base pr-4">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
