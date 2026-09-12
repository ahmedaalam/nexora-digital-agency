"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const marqueeItems = [
    { symbol: "▲", name: "startup", subtitle: "Tech" },
    { symbol: "■", name: "company", subtitle: "Global" },
    { symbol: "◆", name: "business", subtitle: "Ventures" },
    { symbol: "●", name: "agency", subtitle: "Labs" },
    { symbol: "❖", name: "vortex", subtitle: "Cloud" },
  ];

  const duplicatedMarquee = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ];

  return (
    /*
     * Hero layout mirrors the Brix reference:
     *   – Large top padding pushes the wave art upward so content
     *     appears in the lower ~45 % of the section.
     *   – Everything is left-aligned within the shared container.
     *   – Subtext + "Contact us →" sit on the same flex row,
     *     baseline-aligned at the bottom.
     *   – Marquee is separated by a thin top-border, just below.
     */
    <section className="relative overflow-hidden bg-white pb-0">
      {/* ── Background Wave Image ────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/hero-bg.png"
          alt="Purple-blue ethereal ambient wave background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* bottom fade so next section blends cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/*
         * Spacer: pushes content down so the wave art fills the top.
         * Matches the Brix reference where ~55 % of the hero is wave.
         */}
        <div className="h-[52vh] min-h-[260px] max-h-[380px]" />

        {/* ── Partner Badges ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          {/* Enterprise Partner */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0052FF] text-white text-xs font-semibold shadow-xs">
            <svg
              className="w-3.5 h-3.5 fill-white shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M18.8 3L14.7 17.6 11 3H8L4.3 17.6 2 3H0l3.8 21h3l3.7-14.4L14.2 24h3L21 3z" />
            </svg>
            <span>Enterprise Partner</span>
          </div>

          {/* Certified Partner */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-slate-200/90 text-slate-800 text-xs font-semibold backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>Certified Partner</span>
          </div>
        </motion.div>

        {/* ── Headline ──────────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-[-0.035em] text-[#0f172a] leading-[1.08]"
        >
          Enterprise-grade design,
          <br />
          without the overhead
        </motion.h1>

        {/* ── Subtext row  (text left, "Contact us →" far right) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          {/* Subtext — two explicit lines matching the reference */}
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-snug max-w-lg">
            Launch stunning, responsive sites without hiring designers or developers
            <br />
            &mdash; perfect for early-stage startups and growing SaaS companies.
          </p>

          {/* Contact us link — baseline of the paragraph */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors group shrink-0 pb-0.5"
          >
            <span>Contact us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* ── Marquee Logos ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 pt-10 border-t border-slate-200/70 relative"
        >
          {/* Left + right gradient fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden w-full">
            <div className="animate-marquee flex items-center gap-14 sm:gap-20 opacity-70 hover:opacity-100 transition-opacity">
              {duplicatedMarquee.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 shrink-0 select-none group cursor-pointer"
                >
                  <span className="text-lg sm:text-xl text-slate-400 group-hover:text-indigo-600 transition-colors">
                    {item.symbol}
                  </span>
                  <span className="text-base sm:text-lg font-semibold tracking-tight text-slate-500 group-hover:text-slate-800 transition-colors lowercase">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* bottom breathing room */}
        <div className="h-16 sm:h-20" />
      </div>
    </section>
  );
}
