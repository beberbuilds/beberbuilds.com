"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";

const STATS = [
  { value: 160, prefix: "$", suffix: "+", label: "Net profit generated for clients" },
  { value: 20, prefix: "", suffix: "+", label: "Projects shipped end-to-end" },
  { value: 50, prefix: "", suffix: "+", label: "Automated workflows deployed" },
  { value: 100, prefix: "", suffix: "%", label: "Client satisfaction rate" },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  isInView,
  index,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const delay = index * 120;
    const increment = value / steps;
    let current = 0;

    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, value, index]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function LiveStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden border-y border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/[0.03] via-[#A78BFA]/[0.05] to-[#7C3AED]/[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#7C3AED]/[0.06] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6" ref={ref}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] sm:text-xs tracking-[0.25em] text-[#A78BFA] uppercase mb-10 sm:mb-12"
        >
          By the numbers
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-[#050816] px-6 py-8 sm:py-10 flex flex-col items-center text-center group hover:bg-[#7C3AED]/[0.04] transition-colors duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-2 leading-none">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                  index={i}
                />
              </div>
              <p className="text-[12px] sm:text-[13px] text-white/35 leading-snug max-w-[120px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
