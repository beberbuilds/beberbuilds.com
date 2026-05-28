"use client";

import { useEffect, useRef } from "react";
import { Bot, MessageSquare, LayoutDashboard, Layers, Globe, TrendingUp } from "lucide-react";
import LogoMark from "./logo-mark";

const A = 185;
const B = 63;

// 3 rings × 2 cards each = 6 cards, partners placed π apart (opposite sides)
const CARDS = [
  // ── Ring 1 (0°, clockwise, 6.5s) ──
  { label: "AI Automation",    Icon: Bot,             phiDeg:  0,  period: 6.5, dir:  1, t0: 0 },
  { label: "SaaS Development", Icon: Layers,          phiDeg:  0,  period: 6.5, dir:  1, t0: Math.PI },

  // ── Ring 2 (60°, counter-clockwise, 8.0s) ──
  { label: "AI Chatbots",      Icon: MessageSquare,   phiDeg: 60,  period: 8.0, dir: -1, t0: Math.PI * 0.65 },
  { label: "Web Development",  Icon: Globe,           phiDeg: 60,  period: 8.0, dir: -1, t0: Math.PI * 0.65 + Math.PI },

  // ── Ring 3 (-60°, clockwise, 9.5s) ──
  { label: "Dashboards & Tools", Icon: LayoutDashboard, phiDeg: -60, period: 9.5, dir:  1, t0: Math.PI * 1.3 },
  { label: "Trading Bots",     Icon: TrendingUp,      phiDeg: -60, period: 9.5, dir:  1, t0: Math.PI * 1.3 + Math.PI },
] as const;

// Unique rings for drawing SVG paths (deduplicated by phiDeg)
const RING_PATHS = [
  { phiDeg:  0 },
  { phiDeg: 60 },
  { phiDeg: -60 },
];

function getPos(angle: number, phi: number) {
  return {
    x: A * Math.cos(angle) * Math.cos(phi) - B * Math.sin(angle) * Math.sin(phi),
    y: A * Math.cos(angle) * Math.sin(phi) + B * Math.sin(angle) * Math.cos(phi),
  };
}

export default function AtomOrbit() {
  const cardRefs    = useRef<(HTMLDivElement | null)[]>(Array(6).fill(null));
  const startRef    = useRef<number | null>(null);
  const rafRef      = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleRef  = useRef(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const frame = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = (now - startRef.current) / 1000;

      if (visibleRef.current) {
        CARDS.forEach(({ phiDeg, period, dir, t0 }, i) => {
          const el = cardRefs.current[i];
          if (!el) return;

          const phi = (phiDeg * Math.PI) / 180;
          const a   = t0 + dir * (elapsed / period) * Math.PI * 2;
          const { x, y } = getPos(a, phi);

          const norm    = (y + B) / (2 * B);
          const scale   = (1 - norm * 0.2).toFixed(3);
          const opacity = (1 - norm * 0.4).toFixed(3);
          const zIndex  = y > 0 ? "4" : "20";

          el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`;
          el.style.opacity   = opacity;
          el.style.zIndex    = zIndex;
        });
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">

      {/* ── Orbital path SVG (1:1 px with card positions) ── */}
      <svg
        className="absolute pointer-events-none"
        style={{
          width: 400, height: 340,
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "visible",
        }}
        viewBox="-200 -170 400 340"
      >
        {RING_PATHS.map(({ phiDeg }) => (
          <g key={phiDeg}>
            <ellipse cx={0} cy={0} rx={A} ry={B} fill="none"
              stroke="rgba(167,139,250,0.08)" strokeWidth={6}
              transform={`rotate(${phiDeg})`} />
            <ellipse cx={0} cy={0} rx={A} ry={B} fill="none"
              stroke="rgba(124,58,237,0.28)" strokeWidth={1}
              strokeDasharray="5 8"
              transform={`rotate(${phiDeg})`} />
          </g>
        ))}
      </svg>

      {/* ── Nucleus ── */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Outer pulse rings */}
        <div className="absolute w-36 h-36 rounded-full bg-[#7C3AED]/[0.06] blur-[20px] animate-pulse" />
        <div className="absolute w-28 h-28 rounded-full border border-[#7C3AED]/20" />
        <div className="absolute w-22 h-22 rounded-full border border-[#A78BFA]/15" />
        {/* Core */}
        <div className="relative w-20 h-20 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 shadow-[0_0_30px_rgba(124,58,237,0.35)] flex items-center justify-center">
          <LogoMark className="w-12 h-12" />
        </div>
      </div>

      {/* ── Orbiting cards ── */}
      {CARDS.map(({ label, Icon }, i) => (
        <div
          key={label}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="absolute top-1/2 left-1/2"
        >
          <div className="flex items-center gap-2 glass-strong rounded-xl border border-white/[0.09] px-3 py-2 whitespace-nowrap shadow-lg backdrop-blur-sm">
            <div className="w-7 h-7 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(124,58,237,0.2)]">
              <Icon className="w-3.5 h-3.5 text-[#A78BFA]" />
            </div>
            <span className="text-[11px] font-semibold text-white/85">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
