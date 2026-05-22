"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Bot, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingCards = [
  { icon: Bot, label: "AI Automations", delay: 0 },
  { icon: Globe, label: "Web Applications", delay: 0.12 },
  { icon: Code2, label: "SaaS Solutions", delay: 0.24 },
];

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&h=80&fit=crop&crop=face",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-22 pb-14 sm:pt-24 sm:pb-20"
    >
      {/* ── Background effects ── */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60 sm:opacity-100" />

      {/* Main purple glow — top center */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[500px] bg-[#7C3AED]/[0.08] rounded-full blur-[120px] sm:blur-[140px] pointer-events-none" />

      {/* Secondary glow — bottom right */}
      <div className="absolute bottom-[15%] right-[-15%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#A78BFA]/[0.05] rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      {/* Accent glow — top left */}
      <div className="absolute top-[20%] left-[-10%] w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-[#7C3AED]/[0.04] rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Subtle bottom-center accent for depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[150px] bg-gradient-to-t from-[#7C3AED]/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* ═══════ LEFT — TEXT CONTENT ═══════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/[0.08] text-[#A78BFA] text-xs sm:text-sm mb-6 sm:mb-7 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A78BFA]" />
              </span>
              Available for new projects
            </motion.div>

            {/* Main headline */}
            <h1 className="text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] mb-5 sm:mb-7">
              We Build{" "}
              <span className="text-gradient">AI‑Powered Software</span>
              <br />
              <span className="text-white/90">That Grows Businesses</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-lg text-white/50 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-9">
              We help startups and brands automate, scale and succeed with
              custom AI solutions, web applications and intelligent systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-9 sm:mb-11">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="w-full sm:w-auto"
              >
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-7 py-6 sm:py-6 text-[15px] sm:text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] active:scale-[0.98] group w-full tap-area">
                  Book a Free Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="rounded-xl px-7 py-6 sm:py-6 text-[15px] sm:text-sm font-medium border-white/[0.12] text-white/90 hover:bg-white/[0.06] hover:border-white/25 hover:text-white transition-all duration-300 active:scale-[0.98] group w-full tap-area"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:text-[#A78BFA] transition-colors duration-200" />
                  View Our Work
                </Button>
              </motion.div>
            </div>

            {/* Social proof — avatar strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative ring-2 ring-[#050816] rounded-full"
                    style={{ zIndex: avatars.length - i }}
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[13px] sm:text-sm text-white/50 leading-tight">
                  <span className="text-white font-semibold">20+</span> happy
                  clients trust us
                </p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-[#7C3AED]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ═══════ RIGHT — 3D CUBE + FLOATING CARDS ═══════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center h-[360px] sm:h-[400px] lg:h-[520px] mt-2 sm:mt-0"
          >
            {/* ── Glow rings behind cube ── */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[460px] lg:h-[460px] rounded-full border border-[#7C3AED]/8 animate-pulse-glow pointer-events-none" />
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 lg:w-[560px] lg:h-[560px] rounded-full border border-[#7C3AED]/4 pointer-events-none" />
            <div className="absolute w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] lg:w-[620px] lg:h-[620px] rounded-full bg-[#7C3AED]/[0.03] blur-[80px] pointer-events-none" />

            {/* ── Floating cards — absolutely positioned on ALL screen sizes ── */}
            {/* Mobile positions: tighter orbit around cube, smaller cards */}
            {/* Desktop positions: wider orbit, larger cards */}

            {/* Card 1 — AI Automations (top-left) */}
            <motion.div
              initial={{ opacity: 0, y: 16, x: -10 }}
              animate={{ opacity: 1, y: [0, -6, 0], x: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 + floatingCards[0].delay },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 + floatingCards[0].delay },
              }}
              className="absolute z-20 glass-strong rounded-2xl
                top-[8%] left-[2%] sm:top-[8%] sm:left-[5%] lg:top-[8%] lg:left-[4%]
                px-3 py-2.5 sm:px-4 sm:py-3
                flex items-center gap-2 sm:gap-3
                border-white/[0.08] hover:border-[#7C3AED]/25 transition-colors duration-300"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                <Bot className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#A78BFA]" />
              </div>
              <span className="text-[12px] sm:text-sm font-semibold whitespace-nowrap text-white/85">
                AI Automations
              </span>
            </motion.div>

            {/* Card 2 — SaaS Solutions (top-right) */}
            <motion.div
              initial={{ opacity: 0, y: 16, x: 10 }}
              animate={{ opacity: 1, y: [0, -8, 0], x: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 + floatingCards[1].delay },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 + floatingCards[1].delay },
              }}
              className="absolute z-20 glass-strong rounded-2xl
                top-[12%] right-[0%] sm:top-[10%] sm:right-[3%] lg:top-[10%] lg:right-[5%]
                px-3 py-2.5 sm:px-4 sm:py-3
                flex items-center gap-2 sm:gap-3
                border-white/[0.08] hover:border-[#7C3AED]/25 transition-colors duration-300"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#A78BFA]" />
              </div>
              <span className="text-[12px] sm:text-sm font-semibold whitespace-nowrap text-white/85">
                SaaS Solutions
              </span>
            </motion.div>

            {/* Card 3 — Web Applications (bottom-center) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 + floatingCards[2].delay },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 + floatingCards[2].delay },
              }}
              className="absolute z-20 glass-strong rounded-2xl
                bottom-[12%] left-1/2 -translate-x-1/2 sm:bottom-[12%] sm:left-[60%] lg:bottom-[18%] lg:left-[55%]
                px-3 py-2.5 sm:px-4 sm:py-3
                flex items-center gap-2 sm:gap-3
                border-white/[0.08] hover:border-[#7C3AED]/25 transition-colors duration-300"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                <Globe className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#A78BFA]" />
              </div>
              <span className="text-[12px] sm:text-sm font-semibold whitespace-nowrap text-white/85">
                Web Applications
              </span>
            </motion.div>

            {/* ── 3D Cube — centerpiece ── */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-[340px] lg:h-[340px] animate-rotate-cube [transform-style:preserve-3d]">
                {/* Outer face */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-[#7C3AED]/35 bg-[#7C3AED]/[0.08] backdrop-blur-sm shadow-[0_0_50px_rgba(124,58,237,0.2)] sm:shadow-[0_0_80px_rgba(124,58,237,0.25)]" />
                {/* Mid face — rotated 15deg */}
                <div
                  className="absolute inset-3 sm:inset-5 rounded-2xl border border-[#7C3AED]/25 bg-[#7C3AED]/[0.05] backdrop-blur-[2px]"
                  style={{ transform: "rotate(15deg)" }}
                />
                {/* Inner face — rotated 30deg */}
                <div
                  className="absolute inset-6 sm:inset-10 rounded-2xl border border-[#A78BFA]/15 bg-[#7C3AED]/[0.04]"
                  style={{ transform: "rotate(30deg)" }}
                />
                {/* Center image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/hero-cube.png"
                    alt="AI Cube"
                    className="w-44 h-44 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Small decorative dots ── */}
            <div className="absolute top-[25%] left-[15%] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A78BFA]/40 hidden sm:block" />
            <div className="absolute top-[60%] right-[18%] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7C3AED]/50 hidden sm:block" />
            <div className="absolute bottom-[25%] left-[22%] w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A78BFA]/30 hidden sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
