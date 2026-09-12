import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXORA | Enterprise-Grade Digital Solutions for Modern Businesses",
  description:
    "We build fast, scalable, and modern web experiences, high-converting SaaS platforms, and UI/UX systems for ambitious startups and global companies.",
  keywords: [
    "Digital Agency",
    "SaaS Development",
    "Web Development",
    "UI/UX Design",
    "Next.js Agency",
    "Enterprise Solutions",
  ],
  openGraph: {
    title: "NEXORA | Enterprise-Grade Digital Solutions",
    description:
      "Modern web experiences, high-converting SaaS platforms, and bespoke UI/UX systems.",
    type: "website",
    locale: "en_US",
    siteName: "Nexora Agency",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 antialiased">
        {children}
      </body>
    </html>
  );
}
