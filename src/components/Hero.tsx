"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  const marqueeItems = [
    {
      name: "startup",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="15 7 21 7 21 13" />
        </svg>
      ),
    },
    {
      name: "company",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
          <rect x="3" y="7" width="11" height="11" rx="2.5" opacity="0.5" />
          <rect x="9" y="3" width="11" height="11" rx="2.5" />
        </svg>
      ),
    },
    {
      name: "business",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
          <rect
            x="12"
            y="2"
            width="13"
            height="13"
            rx="3.5"
            transform="rotate(45 12 2)"
          />
          <circle cx="12" cy="12" r="2.5" fill="white" />
        </svg>
      ),
    },
    {
      name: "agency",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3a9 9 0 1 0 9 9h-4a5 5 0 1 1-5-5V3z"
          />
        </svg>
      ),
    },
    {
      name: "vortex",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      ),
    },
  ];

  const duplicatedMarquee = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-white pb-14 sm:pb-20 scroll-mt-20">
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
         * Spacer: pushes content into the lower half of the viewport
         * so the purple wave art fills the top ~48-50%, matching the reference picture.
         */}
        <div className="h-[42vh] min-h-[200px] max-h-[380px]" />

        {/* ── Partner Badges ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          {/* Enterprise Partner */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-xs">
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
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Certified Partner</span>
          </div>
        </motion.div>

        {/* ── Headline ──────────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.035em] text-[#0e121b] leading-[1.06] max-w-4xl"
        >
          Enterprise-grade design,
          <br />
          without the overhead
        </motion.h1>

        {/* ── Subtext row (text left, "Contact us →" far right) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          {/* Subtext — two explicit lines matching the reference */}
          <p className="text-[14px] sm:text-[15px] text-slate-500 font-normal leading-relaxed max-w-xl">
            Launch stunning, responsive sites without hiring designers or
            developers
            <br className="hidden sm:inline" />
            &mdash; perfect for early-stage startups and growing SaaS companies.
          </p>
        </motion.div>

        {/* ── Marquee Logos ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 sm:mt-20 relative"
        >
          {/* Left + right gradient fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div className="overflow-hidden w-full">
            <div className="animate-marquee flex items-center gap-20 sm:gap-28 opacity-75 hover:opacity-100 transition-opacity">
              {duplicatedMarquee.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 shrink-0 select-none group cursor-pointer text-slate-300 hover:text-slate-700 transition-colors"
                >
                  <div className="shrink-0 transition-transform group-hover:scale-110 duration-200">
                    {item.icon}
                  </div>
                  <span className="text-2xl sm:text-[28px] font-bold tracking-tight lowercase">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
