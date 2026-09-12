"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "$10k - $25k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Web Development",
    "UI/UX Design",
    "SaaS Development",
    "Branding",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6366f1", "#8b5cf6", "#38bdf8"],
        });
      } catch {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5" />
              Let&apos;s Build Together
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Ready to elevate your digital presence?
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Tell us about your product goals. We review all inquiries within 24 business hours and prepare a tailored strategy roadmap.
            </p>

            {/* Quick trust metrics */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Guaranteed 24h Response</div>
                  <div className="text-xs text-slate-500">Fast NDA execution & transparent estimates</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Direct Senior Leadership</div>
                  <div className="text-xs text-slate-500">Speak directly with principal engineers & designers</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-xs text-indigo-900">
                <span className="font-bold">Prefer email?</span> Reach us at{" "}
                <a href="mailto:hello@nexora.agency" className="underline font-semibold hover:text-indigo-700">
                  hello@nexora.agency
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message received!</h3>
                    <p className="mt-2 text-slate-600 max-w-md mx-auto text-sm">
                      Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>. A senior partner will contact you at <span className="font-semibold text-slate-900">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          service: "Web Development",
                          budget: "$10k - $25k",
                          message: "",
                        });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        Book a Strategy Consultation
                      </h3>
                      <p className="text-xs text-slate-500">
                        Fill out the details below and we will get back to you promptly.
                      </p>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                        I need help with
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {services.map((item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => setFormData({ ...formData, service: item })}
                            className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                              formData.service === item
                                ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                        >
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 bg-white"
                        />
                      </div>
                    </div>

                    {/* Project Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project timeline, goals, and any specific technical requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 bg-white resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-center text-[11px] text-slate-400">
                      We treat your NDA and IP with strictest enterprise confidentiality.
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
