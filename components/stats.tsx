"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { stats } from "@/lib/data";

function CountUp({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper className="py-14 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="gradient-border-hover rounded-2xl p-5 sm:p-6 text-center group cursor-default transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#7C3AED]/25 transition-colors">
                <stat.icon className="w-5 h-5 text-[#A78BFA]" />
              </div>
              <div className="text-[1.75rem] sm:text-3xl font-bold text-gradient mb-1 tabular-nums">
                <CountUp target={stat.target} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-[11px] sm:text-xs text-white/35">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
