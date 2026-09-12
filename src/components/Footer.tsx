"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-slate-100">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-2.5 mb-4 group focus:outline-none">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-500/25">
                <div className="grid grid-cols-2 gap-1 p-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-90"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                nexora<span className="text-indigo-600">.</span>
              </span>
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mb-6">
              Enterprise-grade digital solutions, Next.js web applications, and conversion-focused UI/UX systems for high-growth tech ventures.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium text-slate-700">All systems operational</span>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  SaaS Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  Design Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-indigo-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-600 transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-indigo-600 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 transition-colors">
                  Careers <span className="text-[10px] text-indigo-600 font-bold ml-1">HIRING</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Engineering Insights
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Join 12,000+ tech founders receiving our bi-weekly breakdown of SaaS design patterns and frontend performance.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-medium">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900 bg-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Nexora Digital Agency Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Dribbble */}
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Dribbble"
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.31c-.242-.049-2.741-.532-5.269-.214a26.137 26.137 0 01-.63-1.508c2.633-1.298 3.805-3.36 3.969-3.588zM12 3.513c2.029 0 3.896.716 5.374 1.909-.157.243-1.28 1.947-3.81 3.197-1.192-2.185-2.493-4.085-2.656-4.321.36-.05.723-.08 1.092-.08zM9.255 4.88c.16.23 1.437 2.088 2.637 4.25-3.337 1.01-6.574 1.01-6.904 1.01a8.563 8.563 0 014.267-5.26zm-5.74 7.12c.39 0 3.26-.01 6.5-1.04.225.44.437.89.638 1.34-3.649 1.09-7.05 4.2-7.228 4.37a8.47 8.47 0 01.09-4.67zm4.285 6.09c.21-.21 3.27-3.03 6.94-4.03.87 2.27 1.23 4.47 1.33 5.16a8.497 8.497 0 01-8.27-1.13zm9.64-.81c-.13-.67-.5-2.73-1.33-4.91 2.37-.34 4.54.14 4.78.2a8.522 8.522 0 01-3.45 4.71z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
