"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on devices with a precise pointer (desktop/mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = -200, mouseY = -200;
    let ringX  = -200, ringY  = -200;
    let ringScale = 1;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Expand ring when over interactive elements
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, label');
      ringScale = interactive ? 1.7 : 1;
    };

    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      // Ring lags with lerp
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringX}px, ${ringY}px) scale(${ringScale})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    document.documentElement.classList.add("custom-cursor");
    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot — follows cursor exactly */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#A78BFA",
          boxShadow: "0 0 8px rgba(167,139,250,0.7)",
          translate: "-50% -50%",
          willChange: "transform",
        }}
      />
      {/* Ring — lags behind, expands on hover */}
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(124,58,237,0.55)",
          boxShadow: "0 0 12px rgba(124,58,237,0.15)",
          translate: "-50% -50%",
          transition: "transform 0.15s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
