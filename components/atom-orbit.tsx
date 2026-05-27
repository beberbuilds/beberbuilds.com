"use client";

import { useEffect, useRef } from "react";
import { Bot, MessageSquare, LayoutDashboard } from "lucide-react";
import CodeTypewriter from "./code-typewriter";

// Ellipse axes — A is semi-major (width), B is semi-minor (height after tilt projection)
// B/A ≈ 0.34  →  effective tilt angle ≈ 70° (looks genuinely 3D)
const A = 185;
const B = 63;

const RINGS = [
  {
    label: "AI Automation",
    Icon: Bot,
    phiDeg: 0,     // ring 1: horizontal ellipse
    period: 3.2,   // seconds per orbit
    dir: 1,        // clockwise
    t0: 0,
  },
  {
    label: "AI Chatbots",
    Icon: MessageSquare,
    phiDeg: 60,    // ring 2: rotated 60°
    period: 3.7,
    dir: -1,       // counter-clockwise
    t0: Math.PI * 0.65,
  },
  {
    label: "Dashboards & Tools",
    Icon: LayoutDashboard,
    phiDeg: -60,   // ring 3: rotated -60°
    period: 4.2,
    dir: 1,
    t0: Math.PI * 1.3,
  },
] as const;

function getPos(angle: number, phi: number) {
  return {
    x: A * Math.cos(angle) * Math.cos(phi) - B * Math.sin(angle) * Math.sin(phi),
    y: A * Math.cos(angle) * Math.sin(phi) + B * Math.sin(angle) * Math.cos(phi),
  };
}

export default function AtomOrbit() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const frame = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = (now - startRef.current) / 1000;

      RINGS.forEach(({ phiDeg, period, dir, t0 }, i) => {
        const el = cardRefs.current[i];
        if (!el) return;

        const phi = (phiDeg * Math.PI) / 180;
        const a = t0 + dir * (elapsed / period) * Math.PI * 2;
        const { x, y } = getPos(a, phi);

        // Depth cues — cards behind the center fade + shrink
        const norm   = (y + B) / (2 * B);          // 0 = front, 1 = back
        const scale  = (1 - norm * 0.2).toFixed(3);
        const opacity = (1 - norm * 0.4).toFixed(3);
        const zIndex = y > 0 ? "4" : "20";

        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`;
        el.style.opacity   = opacity;
        el.style.zIndex    = zIndex;
      });

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* ── Orbital path lines (SVG, 1:1 px with card animation) ── */}
      <svg
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 340,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "visible",
        }}
        viewBox="-200 -170 400 340"
      >
        {RINGS.map((ring) => (
          <g key={ring.phiDeg}>
            {/* Soft glow under the dashed line */}
            <ellipse
              cx={0} cy={0} rx={A} ry={B}
              fill="none"
              stroke="rgba(167,139,250,0.08)"
              strokeWidth={6}
              transform={`rotate(${ring.phiDeg})`}
            />
            {/* Dashed orbit path */}
            <ellipse
              cx={0} cy={0} rx={A} ry={B}
              fill="none"
              stroke="rgba(124,58,237,0.28)"
              strokeWidth={1}
              strokeDasharray="5 8"
              transform={`rotate(${ring.phiDeg})`}
            />
          </g>
        ))}
      </svg>

      {/* ── Center: CodeTypewriter sits at z-10, between front (z-20) and back (z-4) cards ── */}
      <div className="relative z-10">
        <CodeTypewriter />
      </div>

      {/* ── Orbiting cards ── */}
      {RINGS.map(({ label, Icon }, i) => (
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
