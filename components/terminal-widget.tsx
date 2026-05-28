"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const LINES = [
  { text: "$ beberbuilds --deploy --client=you", delay: 0, color: "rgba(255,255,255,0.55)" },
  { text: "  Initializing project environment...", delay: 600, color: "rgba(255,255,255,0.3)" },
  { text: "✓ AI automation agent .......... built", delay: 1100, color: "#4ADE80" },
  { text: "✓ SaaS platform ............... shipped", delay: 1700, color: "#4ADE80" },
  { text: "✓ Trading bot ................. profitable", delay: 2300, color: "#4ADE80" },
  { text: "✓ Retail ERP .................. deployed", delay: 2900, color: "#4ADE80" },
  { text: "", delay: 3400, color: "" },
  { text: "→ Ready for your project.", delay: 3600, color: "#A78BFA" },
];

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        if (i === LINES.length - 1) setDone(true);
      }, line.delay + 400);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="mt-7 w-full max-w-md mx-auto lg:mx-0"
    >
      <div className="relative rounded-2xl overflow-hidden border border-[#7C3AED]/25 shadow-[0_0_40px_rgba(124,58,237,0.12)]">
        {/* Glow behind terminal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/[0.06] to-transparent pointer-events-none" />

        {/* Terminal header */}
        <div className="relative flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-[#0a0d1a]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_rgba(254,188,46,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_6px_rgba(40,200,64,0.4)]" />
          <div className="flex-1 flex justify-center">
            <span className="text-[11px] text-white/25 font-mono">
              beberbuilds ~ zsh — 80×24
            </span>
          </div>
          {/* Live indicator */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse" />
            <span className="text-[10px] text-white/20 font-mono">live</span>
          </div>
        </div>

        {/* Terminal body */}
        <div className="relative bg-[#07090f] px-5 py-5 font-mono text-[12px] sm:text-[13px] min-h-[200px]">
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.5)_2px,rgba(255,255,255,0.5)_4px)]" />

          <div className="relative space-y-1">
            {LINES.map((line, i) =>
              visibleLines.includes(i) ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ color: line.color || "rgba(255,255,255,0.55)" }}
                  className="leading-relaxed"
                >
                  {line.text || " "}
                </motion.div>
              ) : null
            )}

            {/* Blinking cursor */}
            {!done && (
              <span className="inline-block w-[7px] h-[14px] bg-[#7C3AED] animate-pulse align-middle" />
            )}

            {done && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-3 flex items-center gap-2"
              >
                <span className="inline-block w-[7px] h-[14px] bg-[#7C3AED]/70 animate-pulse align-middle" />
              </motion.div>
            )}
          </div>

          {/* Bottom status bar */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 border-t border-white/[0.04] flex items-center justify-between">
            <span className="text-[10px] text-white/15 font-mono">prod</span>
            <span className="text-[10px] text-white/15 font-mono">Toronto, CA</span>
            <span className="text-[10px] text-[#28C840]/50 font-mono">● connected</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
