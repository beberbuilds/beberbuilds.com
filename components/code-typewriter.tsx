"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Segment = { text: string; color: string };
type CodeLine = { segments: Segment[]; delay: number };

const LINES: CodeLine[] = [
  { segments: [{ text: "// automate.ts", color: "text-white/30" }], delay: 180 },
  { segments: [], delay: 80 },
  {
    segments: [
      { text: "import", color: "text-[#A78BFA]" },
      { text: " { Agent } ", color: "text-white/60" },
      { text: "from", color: "text-[#A78BFA]" },
      { text: ' "@beberbuilds/ai"', color: "text-[#4ADE80]" },
      { text: ";", color: "text-white/35" },
    ],
    delay: 180,
  },
  { segments: [], delay: 80 },
  {
    segments: [
      { text: "const ", color: "text-[#A78BFA]" },
      { text: "agent", color: "text-white/80" },
      { text: " = ", color: "text-white/40" },
      { text: "new ", color: "text-[#A78BFA]" },
      { text: "Agent", color: "text-[#60A5FA]" },
      { text: "({", color: "text-white/60" },
    ],
    delay: 140,
  },
  {
    segments: [
      { text: "  model", color: "text-white/50" },
      { text: ": ", color: "text-white/30" },
      { text: '"gpt-4o"', color: "text-[#4ADE80]" },
      { text: ",", color: "text-white/30" },
    ],
    delay: 140,
  },
  {
    segments: [
      { text: "  tools", color: "text-white/50" },
      { text: ": [", color: "text-white/30" },
      { text: "searchWeb", color: "text-white/65" },
      { text: ", ", color: "text-white/30" },
      { text: "sendEmail", color: "text-white/65" },
      { text: "],", color: "text-white/30" },
    ],
    delay: 140,
  },
  { segments: [{ text: "});", color: "text-white/60" }], delay: 200 },
  { segments: [], delay: 80 },
  {
    segments: [
      { text: "await ", color: "text-[#A78BFA]" },
      { text: "agent", color: "text-white/75" },
      { text: ".", color: "text-white/35" },
      { text: "run", color: "text-[#60A5FA]" },
      { text: "(", color: "text-white/60" },
      { text: '"Follow up with new leads"', color: "text-[#4ADE80]" },
      { text: ");", color: "text-white/35" },
    ],
    delay: 700,
  },
  { segments: [], delay: 160 },
  {
    segments: [{ text: "// ✓ 23 tasks done · 1.8s", color: "text-[#4ADE80]" }],
    delay: 3200,
  },
];

const CHAR_SPEED = 26; // ms per character

function getLineText(line: CodeLine): string {
  return line.segments.map((s) => s.text).join("");
}

function revealSegments(line: CodeLine, charCount: number): Segment[] {
  let remaining = charCount;
  const result: Segment[] = [];
  for (const seg of line.segments) {
    if (remaining <= 0) break;
    const visible = seg.text.slice(0, remaining);
    if (visible) result.push({ text: visible, color: seg.color });
    remaining -= seg.text.length;
    if (remaining < 0) remaining = 0;
  }
  return result;
}

export default function CodeTypewriter() {
  const [revealedLines, setRevealedLines] = useState(0);
  const [currentChars, setCurrentChars] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 520);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function tick() {
      if (revealedLines >= LINES.length) {
        timer.current = setTimeout(() => {
          setRevealedLines(0);
          setCurrentChars(0);
        }, 2800);
        return;
      }

      const line = LINES[revealedLines];
      const lineText = getLineText(line);

      if (lineText.length === 0) {
        timer.current = setTimeout(() => {
          setRevealedLines((l) => l + 1);
          setCurrentChars(0);
        }, line.delay);
        return;
      }

      if (currentChars < lineText.length) {
        timer.current = setTimeout(() => {
          setCurrentChars((c) => c + 1);
        }, CHAR_SPEED);
      } else {
        timer.current = setTimeout(() => {
          setRevealedLines((l) => l + 1);
          setCurrentChars(0);
        }, line.delay);
      }
    }

    tick();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [revealedLines, currentChars]);

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[320px] sm:max-w-[370px] lg:max-w-[420px]"
    >
      {/* Outer glow */}
      <div className="absolute -inset-4 rounded-3xl bg-[#7C3AED]/10 blur-[50px] -z-10" />

      {/* Card */}
      <div className="rounded-2xl border border-[#7C3AED]/25 bg-[#07091a] shadow-[0_0_50px_rgba(124,58,237,0.14)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05] bg-white/[0.015]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-auto text-[10px] text-white/20 font-mono tracking-wide">
            automate.ts
          </span>
        </div>

        {/* Code */}
        <div className="px-5 py-4 font-mono text-[12px] sm:text-[13px] leading-[1.75] min-h-[240px]">
          {LINES.slice(0, revealedLines).map((line, i) => (
            <div key={i}>
              {line.segments.length === 0 ? (
                <span className="select-none">&nbsp;</span>
              ) : (
                line.segments.map((seg, j) => (
                  <span key={j} className={seg.color}>
                    {seg.text}
                  </span>
                ))
              )}
            </div>
          ))}

          {/* Currently typing line */}
          {revealedLines < LINES.length && (
            <div className="flex items-baseline flex-wrap">
              {revealSegments(LINES[revealedLines], currentChars).map(
                (seg, j) => (
                  <span key={j} className={seg.color}>
                    {seg.text}
                  </span>
                )
              )}
              <span
                className={`inline-block w-[2px] h-[13px] bg-[#A78BFA] ml-px transition-opacity duration-75 ${
                  cursorOn ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-3 px-5 py-2.5 border-t border-white/[0.04] bg-white/[0.01]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
          <span className="text-[10px] text-white/20 font-mono">
            TypeScript · UTF-8 · BeberBuilds AI
          </span>
        </div>
      </div>
    </motion.div>
  );
}
