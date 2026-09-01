"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { globalLenis } from "@/components/SmoothScrollProvider";

export default function FaqsSection() {
  const faqs = [
    {
      id: 0,
      q: "What services do you offer?",
      a: "I offer UI/UX design, brand identity, web design, and motion graphics. Whether you need a full product design from scratch or just a visual refresh, I've got you covered.",
    },
    {
      id: 1,
      q: "How long does a typical project take?",
      a: "It depends on the scope. A landing page design usually takes 3–5 days, while a full product or brand identity project can take 2–4 weeks. I'll give you a clear timeline before we start.",
    },
    {
      id: 2,
      q: "How many revisions do I get?",
      a: "Each project includes up to 3 rounds of revisions. Additional revisions beyond that are billed at an hourly rate. I find that 3 rounds is usually more than enough to get things perfect.",
    },
    {
      id: 3,
      q: "What does the collaboration process look like?",
      a: "We start with a discovery call to align on goals, then I move into research and initial concepts. You'll review and give feedback, and we iterate until the design is exactly right before final delivery.",
    },
    {
      id: 4,
      q: "Do you work with international clients?",
      a: "Absolutely. I work with clients worldwide and am comfortable collaborating across time zones. Most communication happens async via email or Notion, with video calls scheduled as needed.",
    },
    {
      id: 5,
      q: "What files will I receive at the end?",
      a: "You'll receive all source files (Figma, AI, or PSD depending on the project), plus export-ready assets in the formats you need — PNG, SVG, PDF, WebP, and more.",
    },
  ];

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
            Let&apos;s clear things up.
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
