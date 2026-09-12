"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Rocket, CheckCircle2, TrendingUp } from "lucide-react";

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
      description: "Every pixel serves a business purpose. We blend aesthetics with user-centric usability.",
    },
    {
      title: "Engineered for Resilience",
      description: "Rock-solid architectures built with Next.js, automated testing, and scalable cloud infra.",
    },
    {
      title: "Agile Velocity",
      description: "Rapid sprints with transparent communication, real-time Slack channels, and weekly demos.",
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
              Founded by veteran product designers and software engineers, Nexora was built to eliminate
              the friction typical of bloated agency workflows. We operate as an elite embedded digital
              partner for high-growth tech ventures.
            </p>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Our mission is singular: empower startups and enterprise teams to launch category-defining
              web platforms and SaaS products that captivate users, drive revenue, and scale seamlessly.
            </p>

            {/* Core Values / Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mission Card & Interactive Badge */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-indigo-50/60 to-white rounded-3xl p-8 border border-slate-200/80 shadow-lg">
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-md shadow-indigo-500/30 flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5" />
                Vetted Top 1%
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-indigo-600/30">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Nexora Studio Collective</h4>
                  <p className="text-xs text-slate-500">San Francisco • London • Remote</p>
                </div>
              </div>

              <blockquote className="text-slate-700 italic text-sm leading-relaxed border-l-2 border-indigo-500 pl-4 py-1 mb-6">
                &ldquo;Nexora isn&apos;t just another dev shop. They operated like true co-founders,
                challenging our assumptions and elevating our UI to a world-class standard.&rdquo;
              </blockquote>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-200/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Currently accepting new clients</span>
                </div>
                <span className="font-semibold text-indigo-600">Q3 / Q4 2026</span>
              </div>
            </div>
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
