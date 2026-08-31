"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { globalLenis } from "./SmoothScrollProvider";

function NavLink({
  href,
  children,
  onClick,
  showUnderline = true
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  showUnderline?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (globalLenis) {
        globalLenis.scrollTo(href, { offset: -100 });
      } else {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative pb-[5px] text-neutral-200 hover:text-white transition-colors duration-300"
    >
      {children}
      {showUnderline && (
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] w-full bg-red-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            transformOrigin: "left",
            boxShadow: "0 0 8px rgba(239,68,68,0.9)",
          }}
        />
      )}
    </a>
  );
}

export default function TopNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Certification", href: "#track-record" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      if (globalLenis) {
        globalLenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="flex justify-between items-center w-full sticky top-0 z-50 py-6 px-6 md:px-12 lg:px-20 bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Identity Header / Brand */}
      <div className="flex flex-col gap-1">
        <a
          href="/"
          onClick={handleLogoClick}
          className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-2 uppercase hover:text-neutral-300 transition-colors"
        >
          Ahmad Akbar Fauzani
        </a>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-neutral-400 text-xs tracking-wide mt-1 md:mt-0">
          <p>ahmadakbarfauzani08@gmail.com</p>
          <p>+62 813 8921 3295</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink href={item.href}>{item.name}</NavLink>
          </li>
        ))}
        <li>
          <NavLink href="#contact" showUnderline={false}>
            <span className="flex items-center gap-1 text-white">
              Get in Touch <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </NavLink>
        </li>
      </ul>

      {/* Mobile Nav Toggle */}
      <div className="lg:hidden">
        <button
          className="text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-neutral-800 p-6 flex flex-col gap-6 shadow-2xl z-40 lg:hidden"
          >
            <ul className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)} showUnderline={false}>
                  <span className="flex items-center justify-center gap-1 text-red-500">
                    Get in Touch <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
