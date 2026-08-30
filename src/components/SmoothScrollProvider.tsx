"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export let globalLenis: Lenis | null = null;

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,          // scroll duration / inertia
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      wheelMultiplier: 0.9,   // slow things down a touch for luxury feel
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Wire Lenis into Framer Motion's scroll tracking (optional but good practice)
    lenis.on("scroll", () => {
      // can be used to sync with Framer Motion's useScroll if needed
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
