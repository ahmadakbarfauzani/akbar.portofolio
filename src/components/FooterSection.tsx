"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { sendEmail, type SendEmailState } from "@/app/actions/send-email";

// ─── Send-button icon ─────────────────────────────────────────────────────────

function ArrowRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
    </svg>
  );
}

// ─── Initial state ────────────────────────────────────────────────────────────

const initialState: SendEmailState = { status: "idle", message: "" };

// ─── Component ───────────────────────────────────────────────────────────────

export default function FooterSection() {
  const formRef    = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [highlighted, setHighlighted] = useState(false);
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  // ── Highlight message field when arriving via #contact anchor ──────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when hash is #contact and section becomes visible
        if (entry.isIntersecting && window.location.hash === "#contact") {
          // Brief delay so Lenis scroll finishes before we animate
          setTimeout(() => {
            setHighlighted(false); // reset first so re-animation works
            requestAnimationFrame(() => {
              setHighlighted(true);
              messageRef.current?.focus();
              // Clear class after animation so it can retrigger
              setTimeout(() => setHighlighted(false), 2000);
            });
          }, 400);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Show toast & reset form when action resolves
  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message, {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #2a2a2a",
          borderRadius: "12px",
          fontSize: "14px",
          letterSpacing: "0.02em",
        },
        iconTheme: { primary: "#a3e635", secondary: "#000" },
      });
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast.error(state.message, {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #3a1a1a",
          borderRadius: "12px",
          fontSize: "14px",
          letterSpacing: "0.02em",
        },
        iconTheme: { primary: "#ef4444", secondary: "#000" },
      });
    }
  }, [state]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-[#111111] pt-14 md:pt-24 pb-8 text-white rounded-t-[3rem] mt-8 md:mt-12"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Zone 1: Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6"
          >
            Your message means a lot!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl"
          >
            We&apos;d love to hear from you! Whether you want to collaborate, need assistance with your projects.
          </motion.p>
        </div>

        {/* Zone 2: Contact Grid & Form */}
        <form ref={formRef} action={formAction} className="mb-24 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-16 pb-16 mb-16">

            {/* Row 1 — LET'S TALK */}
            <div className="col-span-1">
              <h3 className="text-xl uppercase font-bold tracking-widest text-neutral-300">LET&apos;S TALK</h3>
            </div>
            <div className="col-span-1 flex flex-col gap-1 group">
              <label
                htmlFor="email"
                className="text-xs text-gray-400 uppercase tracking-wider group-focus-within:text-white transition-colors duration-200"
              >
                Say Hello <span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="hello@dummy.com"
                className="text-xl md:text-2xl text-white bg-transparent outline-none placeholder:text-white/20 pb-1 w-full"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1 group">
              <label
                htmlFor="message"
                className="text-xs text-gray-400 uppercase tracking-wider group-focus-within:text-white transition-colors duration-200"
              >
                Message <span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                ref={messageRef}
                id="message"
                name="message"
                type="text"
                required
                minLength={10}
                placeholder="Your message..."
                className={`text-xl md:text-2xl text-white bg-transparent outline-none placeholder:text-white/20 pb-1 w-full transition-all${highlighted ? " field-highlight" : ""}`}
              />
            </div>

            {/* Row 2 — LOCATION */}
            <div className="col-span-1">
              <h3 className="text-xl uppercase font-bold tracking-widest text-neutral-300">LOCATION</h3>
            </div>
            <div className="col-span-1 flex flex-col gap-1 group">
              <label
                htmlFor="address"
                className="text-xs text-gray-400 uppercase tracking-wider group-focus-within:text-white transition-colors duration-200"
              >
                Address <span className="text-neutral-600 ml-0.5">(optional)</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                maxLength={100}
                placeholder="Jakarta, Indonesia"
                className="text-xl md:text-2xl text-white bg-transparent outline-none placeholder:text-white/20 pb-1 w-full"
              />
            </div>
            <div className="col-span-1" />

            {/* Row 3 — CONTACT */}
            <div className="col-span-1">
              <h3 className="text-xl uppercase font-bold tracking-widest text-neutral-300">CONTACT</h3>
            </div>
            <div className="col-span-1 flex flex-col gap-1 group">
              <label
                htmlFor="phone"
                className="text-xs text-gray-400 uppercase tracking-wider group-focus-within:text-white transition-colors duration-200"
              >
                Phone <span className="text-neutral-600 ml-0.5">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                pattern="[+\d\s\-()]+"
                placeholder="+XX XXXX XXXX"
                className="text-xl md:text-2xl text-white bg-transparent outline-none placeholder:text-white/20 pb-1 w-full"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1 group">
              <label
                htmlFor="social"
                className="text-xs text-gray-400 uppercase tracking-wider group-focus-within:text-white transition-colors duration-200"
              >
                Social <span className="text-neutral-600 ml-0.5">(optional)</span>
              </label>
              <input
                id="social"
                name="social"
                type="text"
                placeholder="Fluffy_"
                className="text-xl md:text-2xl text-white bg-transparent outline-none placeholder:text-white/20 pb-1 w-full"
              />
            </div>

          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: isPending ? 1 : 1.01, opacity: isPending ? 1 : 0.9 }}
            whileTap={{ scale: isPending ? 1 : 0.99 }}
            type="submit"
            disabled={isPending}
            aria-label="Send message"
            className="group w-full rounded-full bg-gray-200 text-black text-center py-6 text-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Spinner />
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </motion.button>
        </form>

        {/* Zone 3: Footer Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0 mt-8">

          <div className="flex flex-col gap-1 items-center md:items-start text-xs text-white font-medium">
            <a
              href="mailto:ahmadakbarfauzani08@gmail.com"
              className="hover:underline hover:text-gray-300 transition-colors"
            >
              ahmadakbarfauzani08@gmail.com
            </a>
            <a
              href="tel:0813-8921-3295"
              className="hover:underline hover:text-gray-300 transition-colors"
            >
              0813-8921-3295
            </a>
          </div>

          <div className="flex flex-row gap-4">
            <a
              href="https://www.instagram.com/akbarfzann"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-red-950 border border-neutral-800 hover:border-red-500"
            >
              <span className="text-base font-bold">IG</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-akbar-fauzani-a79359394/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-red-950 border border-neutral-800 hover:border-red-500"
            >
              <span className="text-base font-bold">IN</span>
            </a>
            <a
              href="https://www.behance.net/ahmadfauzani1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-red-950 border border-neutral-800 hover:border-red-500"
            >
              <span className="text-base font-bold">BE</span>
            </a>
          </div>

          <div className="flex flex-col gap-1 items-center md:items-end text-xs text-neutral-500 uppercase font-bold tracking-widest text-center md:text-right">
            <span>AHMADAKBARFAUZANI © 2026</span>
            <span>ALL RIGHT RESERVED</span>
          </div>

        </div>
      </div>
    </section>
  );
}
