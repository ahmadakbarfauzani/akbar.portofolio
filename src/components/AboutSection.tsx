"use client";

import React, { useRef } from "react";
// Import Next Image dihapus atau dibiarkan jika dipakai di tempat lain
import { motion, Variants, useMotionValue, useSpring } from "framer-motion";

// PASTIKAN PATH INI BENAR (sesuaikan dengan lokasi file ElasticMesh kamu)
import ElasticMesh from "./elastic";

function HoverAvoid({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Push element away from the cursor
    const distanceX = centerX - e.clientX;
    const distanceY = centerY - e.clientY;

    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="p-8 -m-8 z-10 relative"
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div id="about" className="relative mb-16 md:mb-24 lg:mb-32 py-8 md:py-16">

      {/* Narrative & Visual (Foreground) */}
      <div className="relative z-10 w-full md:w-[55%] lg:w-[50%] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-8 pointer-events-auto"
        >
          <span className="text-sm uppercase tracking-widest text-neutral-500 font-bold">
            About Me
          </span>
          <p className="text-xl md:text-2xl leading-relaxed text-neutral-300">
            I&apos;m Ahmad Akbar Fauzani, a Graphic Designer crafting clean, purposeful visuals. I design for clarity and impact, ensuring every project looks exceptional and functions perfectly. Let&apos;s build something great together.
          </p>

          <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden mt-4 group cursor-pointer border border-neutral-800 bg-neutral-950 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            {/* BAGIAN YANG DIUBAH: Menggunakan ElasticMesh */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900">
              <ElasticMesh
                image="/p.jpg" // Menggunakan foto profilmu dari folder public
                interaction="hover" // Mesh bergerak saat di-hover
                tilt={14}
                shading={0.5}
                color1="#3b82f6"
                color2="#8b5cf6"
                showGrid={false} // Saya matikan grid-nya agar wajahmu terlihat lebih jelas (bisa diubah ke true jika suka)
                borderRadius={12} // Disesuaikan dengan rounded-xl
                stiffness={0.05}
                damping={0.2}
                grabRadius={0.6}
                pull={0.4}
                wobble={5}
                resolution={25}
                enabled={true}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scattered Milestones & Data (Background/Overlay) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mt-16 md:mt-0 md:absolute md:inset-0 w-full md:h-full z-0 pointer-events-none"
      >
        <div className="grid grid-cols-2 gap-6 md:block md:w-full md:h-full pointer-events-auto">

          {/* Stat Block 1 */}
          <motion.div variants={itemVariants} className="md:absolute md:top-[5%] md:right-[5%] lg:right-[10%]">
            <HoverAvoid>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                className="flex flex-col"
              >
                <span className="text-4xl lg:text-5xl font-semibold text-white drop-shadow-md">3 Years</span>
                <span className="text-sm text-neutral-400 mt-2">Of Learning</span>
              </motion.div>
            </HoverAvoid>
          </motion.div>

          {/* Stat Block 2 */}
          <motion.div variants={itemVariants} className="md:absolute md:top-[45%] md:right-[20%] lg:right-[30%]">
            <HoverAvoid>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="flex flex-col"
              >
                <span className="text-4xl lg:text-5xl font-semibold text-white drop-shadow-md">2 Years</span>
                <span className="text-sm text-neutral-400 mt-2">Freelancer</span>
              </motion.div>
            </HoverAvoid>
          </motion.div>

          {/* Stat Block 3 */}
          <motion.div variants={itemVariants} className="md:absolute md:bottom-[10%] md:right-[5%] lg:right-[15%]">
            <HoverAvoid>
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="flex flex-col"
              >
                <span className="text-4xl lg:text-5xl font-semibold text-white drop-shadow-md">Fresh Graduate</span>
                <span className="text-sm text-neutral-400 mt-2 max-w-[150px]">Visual Communication Design</span>
              </motion.div>
            </HoverAvoid>
          </motion.div>

          {/* Stat Block 4 */}
          <motion.div variants={itemVariants} className="md:absolute md:bottom-[-5%] md:left-[55%] lg:left-[45%]">
            <HoverAvoid>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="flex flex-col"
              >
                <span className="text-4xl lg:text-5xl font-semibold text-white drop-shadow-md">20+</span>
                <span className="text-sm text-neutral-400 mt-2">Projects</span>
              </motion.div>
            </HoverAvoid>
          </motion.div>

        </div>
      </motion.div>

    </div>
  );
}