"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <SectionWrapper id="process" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How We{" "}
            <span className="text-gradient">Work</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-[15px] sm:text-base">
            A proven process to take your project from idea to production.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="absolute top-8 left-[10%] right-[10%] h-px hidden lg:block">
            <div className="h-full bg-white/[0.06]" />
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7C3AED]/60 to-[#A78BFA]/60"
            />
          </div>

          {/* Single column on mobile, expands on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-4 lg:gap-2">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#7C3AED]/15 flex items-center justify-center relative z-10 group-hover:bg-[#7C3AED]/25 group-hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] transition-all duration-300 border border-[#7C3AED]/20 shrink-0"
                >
                  <span className="text-[10px] sm:text-xs font-bold text-[#A78BFA] absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center">
                    {i + 1}
                  </span>
                  <step.icon className="w-7 h-7 text-[#A78BFA]" />
                </motion.div>

                <div className="sm:mt-4">
                  <h3 className="font-semibold mb-1 text-[15px] sm:text-base">{step.title}</h3>
                  <p className="text-[13px] sm:text-xs text-white/35 leading-relaxed sm:max-w-[180px] sm:mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
