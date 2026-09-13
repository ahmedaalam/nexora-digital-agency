"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nexora transformed our SaaS product from a clunky MVP into an enterprise-grade experience. Our enterprise conversion rate spiked by 42% within three weeks of launch.",
      author: "Marcus Vance",
      role: "VP of Product, CloudScale AI",
      avatarInitials: "MV",
      avatarBg: "bg-indigo-600",
      rating: 5,
      company: "CloudScale",
    },
    {
      quote:
        "Working with Nexora felt like having an elite Silicon Valley design and engineering squad on our team. They don't just write code—they think deeply about user retention and brand authority.",
      author: "Sophia Chen",
      role: "Founder & CEO, HyperMetric",
      avatarInitials: "SC",
      avatarBg: "bg-violet-600",
      rating: 5,
      company: "HyperMetric",
    },
    {
      quote:
        "The speed and visual polish Nexora brought to our rebrand and Next.js overhaul blew our board away. Their attention to subtle micro-interactions and performance is unmatched.",
      author: "Julian Reynolds",
      role: "Chief Technology Officer, Veloce Labs",
      avatarInitials: "JR",
      avatarBg: "bg-blue-600",
      rating: 5,
      company: "Veloce Labs",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-indigo-600" />
            Social Proof & Client Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            Trusted by tech innovators worldwide
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hear directly from founders, CTOs, and product leaders who scaled
            their digital products with Nexora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50/60 rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:bg-white hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-base leading-relaxed mb-8 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-200/60 flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-sm shrink-0`}
                >
                  {item.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  </div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
