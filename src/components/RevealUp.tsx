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
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
