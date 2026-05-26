"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const LINES = [
  { text: "$ beberbuilds --init", delay: 0 },
  { text: "✓ AI automation agent ... built", delay: 800, color: "#4ADE80" },
  { text: "✓ SaaS platform ......... shipped", delay: 1400, color: "#4ADE80" },
  { text: "✓ Trading bot ........... profitable", delay: 2000, color: "#4ADE80" },
  { text: "✓ Retail ERP ............ deployed", delay: 2600, color: "#4ADE80" },
  { text: "→ Ready for your project_", delay: 3400, color: "#A78BFA" },
];

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(prev => [...prev, i]), line.delay + 600);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="mt-6 w-full max-w-md mx-auto lg:mx-0"
    >
      <div className="glass-strong rounded-xl overflow-hidden border border-white/[0.08]">
        {/* Terminal header */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-2 text-[10px] text-white/30 font-mono">beberbuilds ~ zsh</span>
        </div>
        {/* Terminal body */}
        <div className="p-4 font-mono text-[12px] sm:text-[13px] space-y-1 min-h-[140px]">
          {LINES.map((line, i) => (
            visibleLines.includes(i) && (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: line.color || "rgba(255,255,255,0.6)" }}
              >
                {line.text}
              </motion.div>
            )
          ))}
          {visibleLines.length < LINES.length && (
            <span className="inline-block w-2 h-4 bg-[#7C3AED] animate-pulse align-middle" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
