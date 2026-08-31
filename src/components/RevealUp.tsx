"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export default function RevealUp({
  children,
  delay = 0,
  duration = 0.7,
  className,
  distance = 40,
}: RevealUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      // 1. Ganti 'animate' jadi 'whileInView'
      whileInView={{ opacity: 1, y: 0 }}
      // 2. Tambahkan viewport agar memori hemat
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      // 3. Paksa GPU untuk bersiap
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}