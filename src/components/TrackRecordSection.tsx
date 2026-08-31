"use client";

import { motion } from "framer-motion";
import FlowingMenu from './flowingmenu';

export default function TrackRecordSection() {
  // Masukkan gambar portofolio asli ke dalam array records ini
  const records = [
    {
      title: "Dinas Pemuda dan Olahraga Kab.Bogor",
      subtitle: "Creative Team",
      date: "July - Sep 2023",
      image: "/dsp.jpg"
    },
    {
      title: "SMK Dewantara",
      subtitle: "Student",
      date: "2023 - 2026",
      image: "/dwt (1).jpg"
    },
    {
      title: "Graphic Design",
      subtitle: "Freelance",
      date: "2024 - Now",
      image: "/dg.jpg"
    },
    {
      title: "BNSP Certification",
      subtitle: "Certificate",
      date: "2026 - 2029",
      image: "https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format"
    }
  ];

  return (
    <section id="track-record" className="py-12 md:py-24 mb-8 md:mb-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-6">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-bold">
          TRACK RECORD
        </h2>
        <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold text-right">
          3 YEARS OF EXPERIENCE
        </span>
      </div>

      {/* List Track Record yang sudah disisipi Animasi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <FlowingMenu
          items={records}
          speed={20}
          marqueeBgColor="#ffffff" // Background saat di-hover jadi putih
          marqueeTextColor="#000000" // Teks jadi hitam saat hover
        />
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="py-8 px-4"
      >
        <p className="text-neutral-300 text-sm leading-relaxed">
          Currently pursuing my Bachelor's in Multimedia Engineering Technology at Politeknik Media Kreatif
        </p>
      </motion.div>
    </section>
  );
}