"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = -200, mouseY = -200;
    let ringX  = -200, ringY  = -200;
    let targetScale = 1, currentScale = 1;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const el = e.target as HTMLElement;
      targetScale = el.closest('a, button, [role="button"], input, textarea, label')
        ? 1.65
        : 1;
    };

    const animate = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;

      // Dot: no lag — update directly from latest mouse position
      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Ring: lerp position (0.2 = snappy but still trails)
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      // Scale: lerp so expand/contract eases instead of snapping
      currentScale += (targetScale - currentScale) * 0.12;

      if (ring) {
        ring.style.transform =
          `translate3d(${ringX}px, ${ringY}px, 0) scale(${currentScale})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    document.documentElement.classList.add("custom-cursor");
    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot — snaps to cursor, no lag */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#A78BFA",
          boxShadow: "0 0 8px rgba(167,139,250,0.8)",
          translate: "-50% -50%",
          willChange: "transform",
        }}
      />
      {/* Ring — lags slightly, no CSS transition (RAF handles all animation) */}
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(124,58,237,0.6)",
          boxShadow: "0 0 10px rgba(124,58,237,0.12)",
          translate: "-50% -50%",
          willChange: "transform",
        }}
      />
    </>
  );
}
