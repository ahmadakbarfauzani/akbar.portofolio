"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2, MessageCircle, Link, FileLock2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const serviceCards = [
    {
      title: "UI/UX DESIGN",
      desc: "Creating seamless, accessible digital experiences.",
      bg: "bg-gradient-to-br from-red-900 to-red-950",
      img: "/wo.jpg",
    },
    {
      title: "BRAND IDENTITY",
      desc: "Developing cohesive visual identities that resonate.",
      bg: "bg-gradient-to-br from-yellow-900 to-yellow-900",
      img: "/ge.jpeg",
    },
    {
      title: "WEB EXPERIENCE",
      desc: "Building highly accessible and interactive web platforms.",
      bg: "bg-gradient-to-br from-neutral-800 to-neutral-950",
      img: "/thumb2.jpg",
    },
    {
      title: "PRODUCT DESIGN",
      desc: "Transforming complex business challenges into elegant solutions.",
      bg: "bg-gradient-to-br from-emerald-900 to-emerald-950",
      img: "/packa.png",
    },
  ];

  const benefits = [
    { text: "Two free revisions", icon: CheckCircle2, color: "text-green-500" },
    { text: "24-48 hours turnaround", icon: MessageCircle, color: "text-blue-400" },
    { text: "Fixed pricing", icon: Link, color: "text-blue-500" },
    { text: "Full file ownership", icon: FileLock2, color: "text-yellow-500" },
  ];

  return (
    <section id="services" className="py-12 md:py-24 mb-8 md:mb-12">
      <div className="mb-12">
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 font-bold mb-2">My Services</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Left Block (2x2 Grid for Services) */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl p-6 flex flex-col justify-between min-h-[280px] md:h-[340px] relative overflow-hidden group transition-transform duration-300 hover:scale-[1.02] ${card.bg}`}
            >
              <div className="z-10 relative">
                <h3 className="text-white font-bold tracking-wider mb-2">{card.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed max-w-[90%]">{card.desc}</p>
              </div>
              <div className="absolute bottom-0 right-0 left-0 h-40 translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                <div className="relative w-full h-full opacity-80 group-hover:opacity-100 transition-opacity">
                  <Image src={card.img} alt={card.title} fill className="object-cover object-top rounded-t-xl mx-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle Block (CTA Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-1 bg-gradient-to-b from-neutral-200 to-blue-500 rounded-3xl p-8 flex flex-col justify-between h-auto min-h-[340px] group transition-transform duration-300 hover:scale-[1.02] relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 to-transparent blur-2xl rounded-full" />

          <div className="relative z-10">
            <h3 className="text-black text-2xl font-bold tracking-tight mb-4 leading-tight">LET&apos;S<br />COLLABORATE</h3>
            <p className="text-black/80 text-sm leading-relaxed">
              Have a project in mind? Let&apos;s build something exceptional together.
            </p>
          </div>

          {/* Collaborate illustration */}
          <div className="relative z-10 w-full flex justify-center my-2 transition-transform duration-500 group-hover:-translate-y-2">
            <Image
              src="/pzl.png"
              alt="Let's Collaborate"
              width={400}
              height={400}
              className="object-contain drop-shadow-xl rounded-2xl"
            />
          </div>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-between w-full bg-black text-white px-5 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:bg-neutral-900 relative z-10"
          >
            Book a call
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>

        {/* Right Block (Benefits) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="col-span-1 flex flex-col pl-0 lg:pl-4 pt-4 lg:pt-0"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Benefits you will receive</h3>
          <ul className="flex flex-col space-y-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <li key={i} className="flex flex-row items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-neutral-900/50 flex items-center justify-center border border-neutral-800 shrink-0 ${benefit.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-neutral-300 text-sm">{benefit.text}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
