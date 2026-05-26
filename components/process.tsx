"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data";
import SectionWrapper from "./section-wrapper";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate from 0% to -((n-1)/n * 100)% — for 5 steps, that's -80%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <SectionWrapper id="process" className="p-0">
      {/* Tall container to capture scroll space */}
      <div ref={containerRef} className="relative h-[350vh] sm:h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* Header */}
          <div className="text-center py-8 sm:py-10 px-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] sm:text-xs tracking-[0.2em] text-[#A78BFA] uppercase mb-3 block"
            >
              How We Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              A Proven{" "}
              <span className="text-gradient">Process</span>
            </motion.h2>
            <p className="text-white/40 text-sm mt-2 hidden sm:block">
              Scroll to walk through each step →
            </p>
          </div>

          {/* Horizontal scrolling cards */}
          <div className="overflow-hidden px-[max(1rem,calc(50vw-700px))]">
            <motion.div style={{ x }} className="flex gap-5 sm:gap-6 w-max pb-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 sm:p-8 w-[280px] sm:w-[320px] shrink-0 border border-white/[0.06] hover:border-[#7C3AED]/30 transition-all duration-300"
                >
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {i + 1}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#7C3AED]/40 to-transparent" />
                  </div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center mb-4 transition-colors">
                    <step.icon className="w-6 h-6 text-[#A78BFA]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress bar at bottom */}
          <div className="flex justify-center mt-4 pb-6">
            <div className="w-48 h-1 bg-white/[0.08] rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
