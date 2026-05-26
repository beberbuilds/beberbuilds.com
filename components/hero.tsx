"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Bot, Globe, Code2, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CalendlyModal from "@/components/calendly-modal";
import { useTextScramble } from "@/hooks/use-text-scramble";
import TerminalWidget from "@/components/terminal-widget";

const floatingCards = [
  { icon: Bot, label: "AI Automations", delay: 0 },
  { icon: Globe, label: "Web Applications", delay: 0.12 },
  { icon: Code2, label: "SaaS Solutions", delay: 0.24 },
];

function handleMagneticMove(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  e.currentTarget.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
}
function handleMagneticLeave(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "";
  e.currentTarget.style.transition = "transform 0.5s cubic-bezier(0.175,0.885,0.32,1.275)";
}

export default function Hero() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [torontoTime, setTorontoTime] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setTorontoTime(
        new Date().toLocaleTimeString("en-CA", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const id = setInterval(updateTime, 60_000);
    return () => clearInterval(id);
  }, []);

  const scrambledText = useTextScramble("AI‑Powered Software", mounted, 0.3);

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
            {/* Status badge with Toronto time */}
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
              {torontoTime && `${torontoTime} EST · `}Available for new projects
            </motion.div>

            {/* Main headline */}
            <h1 className="text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] mb-5 sm:mb-7">
              We Build{" "}
              <span className="text-gradient">{scrambledText}</span>
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
              {/* Magnetic Book a Free Call button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="w-full sm:w-auto"
                style={{ transition: "transform 0.1s ease" }}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                <Button
                  onClick={() => setCalendlyOpen(true)}
                  className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-7 py-6 sm:py-6 text-[15px] sm:text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] active:scale-[0.98] group w-full tap-area"
                >
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
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-xl px-7 py-6 sm:py-6 text-[15px] sm:text-sm font-medium border-white/[0.12] text-white/90 hover:bg-white/[0.06] hover:border-white/25 hover:text-white transition-all duration-300 active:scale-[0.98] group w-full tap-area"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:text-[#A78BFA] transition-colors duration-200" />
                  View Our Work
                </Button>
              </motion.div>
            </div>

            {/* Social proof — star badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#7C3AED] text-[#7C3AED]" />
                ))}
              </div>
              <p className="text-[13px] sm:text-sm text-white/50">
                <span className="text-white font-semibold">5.0</span>
                {" "}— rated by every client we&apos;ve worked with
              </p>
            </motion.div>

            {/* Terminal Widget */}
            <TerminalWidget />
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
                  <Image
                    src="/hero-cube.png"
                    alt="AI-powered software visualization"
                    width={320}
                    height={320}
                    priority
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

      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </section>
  );
}
