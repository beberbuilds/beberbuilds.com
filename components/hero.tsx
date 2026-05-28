"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendlyModal from "@/components/calendly-modal";
import { useTextScramble } from "@/hooks/use-text-scramble";
import AtomOrbit from "@/components/atom-orbit";


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

  useEffect(() => {
    setMounted(true);
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
            {/* Main headline */}
            <h1 className="text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] mb-5 sm:mb-7">
              We Build{" "}
              <span className="text-gradient">{scrambledText}</span>
              <br />
              <span className="text-white/90">That Grows Businesses</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-lg text-white/70 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-9">
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
              <p className="text-[13px] sm:text-sm text-white/70">
                <span className="text-white font-semibold">5.0</span>
                {" "}— rated by every client we&apos;ve worked with
              </p>
            </motion.div>

          </motion.div>

          {/* ═══════ RIGHT — 3D CUBE + FLOATING CARDS ═══════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center h-[310px] sm:h-[400px] lg:h-[520px] mt-2 sm:mt-0"
          >
            {/* Ambient glow */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-[#7C3AED]/[0.06] blur-[80px] pointer-events-none" />

            {/* Scale down on mobile so orbit fits without overflow */}
            <div className="w-full h-full scale-[0.72] sm:scale-100 origin-center">
              <AtomOrbit />
            </div>
          </motion.div>
        </div>
      </div>

      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </section>
  );
}
