"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Cpu,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      category: "Engineering",
      icon: Code2,
      color: "from-indigo-500 to-blue-500",
      lightBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      description:
        "High-performance, modern web applications built on Next.js, React, and TypeScript with sub-second page loads and robust SEO foundations.",
      features: [
        "Next.js App Router & Server Components",
        "Headless CMS & API Architecture",
        "Lighthouse 95+ Core Web Vitals",
        "Enterprise-level Security & CI/CD",
      ],
      badge: "Popular",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      category: "Product Design",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
      lightBg: "bg-purple-50 text-purple-600 border-purple-100",
      description:
        "Bespoke user experiences designed to convert. We craft scalable design systems, intuitive user workflows, and polished micro-interactions.",
      features: [
        "Figma Design Systems & Component Tokens",
        "Interactive Prototypes & User Testing",
        "Conversion Rate Optimized Workflows",
        "Accessibility (WCAG 2.1 AA Compliant)",
      ],
      badge: "Bespoke",
    },
    {
      id: "saas-dev",
      title: "SaaS Development",
      category: "Cloud Architecture",
      icon: Layers,
      color: "from-blue-600 to-cyan-500",
      lightBg: "bg-blue-50 text-blue-600 border-blue-100",
      description:
        "End-to-end cloud platforms tailored for scaling businesses. We engineer multi-tenant systems, payment gateways, and real-time data pipelines.",
      features: [
        "Stripe Billing & Subscription Engines",
        "Multi-Tenant Database Architecture",
        "Real-time Collaboration & WebSockets",
        "Role-Based Access Control (RBAC)",
      ],
      badge: "Enterprise",
    },
    {
      id: "branding",
      title: "Branding & Strategy",
      category: "Identity",
      icon: Sparkles,
      color: "from-violet-500 to-pink-500",
      lightBg: "bg-violet-50 text-violet-600 border-violet-100",
      description:
        "Memorable brand identities that command authority in saturated tech markets. We define your visual language, positioning, and digital guidelines.",
      features: [
        "Visual Identity & Logo Guidelines",
        "Typography & Color Hierarchy",
        "Investor Pitch Deck & Asset Design",
        "Marketing & Social Design Toolkits",
      ],
      badge: "Growth",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Subtle backdrop decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            Capabilities & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            Tailored services engineered for scale
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From strategic design systems to full-stack web platforms, our cross-functional team delivers
            uncompromising quality at venture-backed speed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${service.color} text-white shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title & Description */}
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="mt-8 pt-4 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 group-hover:gap-3 transition-all"
                  >
                    <span>Request consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
