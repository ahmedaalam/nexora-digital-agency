"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    {
      value: "250+",
      label: "Projects Completed",
      subtext: "Across SaaS, FinTech, & AI",
    },
    {
      value: "120+",
      label: "Clients Served",
      subtext: "Startups to Fortune 500",
    },
    {
      value: "8+",
      label: "Years Experience",
      subtext: "Crafting digital experiences",
    },
    {
      value: "99.4%",
      label: "Client Satisfaction",
      subtext: "Net Promoter Score of 88",
    },
  ];

  const pillars = [
    {
      title: "Design with Intent",
      description:
        "Every pixel serves a business purpose. We blend aesthetics with user-centric usability.",
    },
    {
      title: "Engineered for Resilience",
      description:
        "Rock-solid architectures built with Next.js, automated testing, and scalable cloud infra.",
    },
    {
      title: "Agile Velocity",
      description:
        "Rapid sprints with transparent communication, real-time Slack channels, and weekly demos.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-5">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              About Nexora Agency
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              We bridge the gap between ambitious vision and flawless digital execution.
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Founded by veteran product designers and software engineers,
              Nexora was built to eliminate the friction typical of bloated
              agency workflows. We operate as an elite embedded digital partner
              for high-growth tech ventures.
            </p>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Our mission is singular: empower startups and enterprise teams to
              launch category-defining web platforms and SaaS products that
              captivate users, drive revenue, and scale seamlessly.
            </p>
          </div>

          {/* Right Column: Pillars placed where the card was */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-indigo-200 hover:bg-indigo-50/20 transition-all shadow-xs"
              >
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pl-6.5">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/70 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-semibold text-indigo-600 tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
