"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  X,
  CheckCircle,
  Eye,
  LayoutGrid,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics: string;
  color: string;
  badgeBg: string;
  accentGradient: string;
  previewType: "dashboard" | "travel" | "spatial";
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "nova",
      title: "Nova",
      category: "Product Website & Analytics SaaS",
      subtitle:
        "Next-gen enterprise analytics platform with real-time AI insights",
      description:
        "Nova needed a hyper-modern marketing and web application interface to showcase their predictive intelligence software. We designed and built an interactive dashboard environment with real-time metric updates, sub-second latency, and a 42% lift in demo signups.",
      techStack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
      ],
      metrics: "+42% Demo Conversions",
      color: "from-indigo-600 to-violet-500",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accentGradient: "from-indigo-500/10 via-purple-500/10 to-transparent",
      previewType: "dashboard",
    },
    {
      id: "wanderly",
      title: "Wanderly",
      category: "Travel & Hospitality Platform",
      subtitle:
        "Immersive discovery engine and booking portal for boutique stays",
      description:
        "Wanderly required a consumer-facing travel experience that combined editorial storytelling with lightning-fast booking flows. We crafted a rich image-driven UI with instant filters, map clustering, and seamless Apple Pay/Stripe checkout.",
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Stripe API",
        "Mapbox GL",
      ],
      metrics: "3.2x Booking Velocity",
      color: "from-sky-500 to-blue-600",
      badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
      accentGradient: "from-sky-500/10 via-blue-500/10 to-transparent",
      previewType: "travel",
    },
    {
      id: "aether",
      title: "Aether",
      category: "3D Experience & Spatial Web",
      subtitle:
        "Interactive WebGL digital showroom and virtual hardware preview",
      description:
        "Aether pioneered next-gen spatial audio hardware and needed a digital presence that pushed web boundaries. We engineered a customized WebGL 3D product visualizer that runs smoothly at 60 FPS across desktop and mobile devices.",
      techStack: [
        "Three.js",
        "WebGL",
        "Next.js",
        "GLSL Shaders",
        "Tailwind CSS",
      ],
      metrics: "60 FPS WebGL Rendering",
      color: "from-purple-600 to-pink-500",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      accentGradient: "from-purple-500/10 via-pink-500/10 to-transparent",
      previewType: "spatial",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <LayoutGrid className="w-3.5 h-3.5" />
              Featured Case Studies
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
              Selected client work
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A curated selection of modern digital products, SaaS applications,
              and interactive web experiences we have engineered.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <span>Have a project in mind? Let&apos;s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Mockup Header */}
                <div
                  className={`relative h-56 w-full overflow-hidden bg-gradient-to-br ${project.accentGradient} p-4 border-b border-slate-100 flex flex-col justify-between`}
                >
                  {/* Browser top-bar mockup */}
                  <div className="flex items-center justify-between bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.id}.agency.preview
                    </span>
                    <div className="w-4" />
                  </div>

                  {/* Visual Content illustration depending on project type */}
                  <div className="my-auto flex items-center justify-center">
                    {project.previewType === "dashboard" && (
                      <div className="w-full bg-white rounded-xl shadow-md p-3 border border-slate-200/70">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-semibold text-slate-500">
                            Live Analytics
                          </span>
                          <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            Active
                          </span>
                        </div>
                        <div className="h-12 flex items-end gap-1.5 justify-between px-1">
                          <div className="w-full bg-indigo-200 rounded-t h-4 group-hover:h-6 transition-all" />
                          <div className="w-full bg-indigo-300 rounded-t h-7 group-hover:h-9 transition-all" />
                          <div className="w-full bg-indigo-400 rounded-t h-5 group-hover:h-7 transition-all" />
                          <div className="w-full bg-indigo-600 rounded-t h-10 group-hover:h-12 transition-all" />
                          <div className="w-full bg-purple-500 rounded-t h-8 group-hover:h-10 transition-all" />
                        </div>
                      </div>
                    )}

                    {project.previewType === "travel" && (
                      <div className="w-full bg-white rounded-xl shadow-md p-3 border border-slate-200/70">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-md bg-sky-500 flex items-center justify-center text-white text-[10px] font-bold">
                            W
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-slate-800">
                              Alps Horizon Lodge
                            </div>
                            <div className="text-[8px] text-slate-400">
                              Zermatt, Switzerland
                            </div>
                          </div>
                        </div>
                        <div className="h-9 bg-gradient-to-r from-sky-100 to-indigo-100 rounded-lg flex items-center justify-center text-[10px] font-medium text-sky-800">
                          ★★★★★ 4.98 (128 reviews)
                        </div>
                      </div>
                    )}

                    {project.previewType === "spatial" && (
                      <div className="w-full bg-slate-900 rounded-xl shadow-md p-3 text-white border border-slate-700">
                        <div className="flex items-center justify-between mb-1 text-[10px] text-purple-300">
                          <span>3D Canvas Mesh</span>
                          <span className="font-mono text-[9px] text-emerald-400">
                            60 FPS
                          </span>
                        </div>
                        <div className="h-10 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full border-2 border-dashed border-purple-400 group-hover:rotate-180 transition-transform duration-700 flex items-center justify-center">
                            <div className="w-3 h-3 bg-pink-500 rounded-full animate-ping" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold text-xs shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project Details</span>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Tech stack pill tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium text-slate-600 bg-slate-100/90 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-slate-700 hover:text-indigo-600 flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-3">
                {selectedProject.category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                {selectedProject.title} &mdash; {selectedProject.subtitle}
              </h3>

              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 uppercase font-semibold">
                    Key Result
                  </span>
                  <div className="text-lg font-bold text-indigo-600">
                    {selectedProject.metrics}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 uppercase font-semibold">
                    Timeline
                  </span>
                  <div className="text-sm font-semibold text-slate-800">
                    4-Week Turnaround
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Tech Stack Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/30 transition-all"
                >
                  Build a similar project
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
