"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <SectionWrapper className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our{" "}
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-[15px] sm:text-base">
            We measure success by the results we deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 sm:p-7 relative group transition-all duration-300 hover:border-[#7C3AED]/20"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-white/[0.04]" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#7C3AED] text-[#7C3AED]" />
                ))}
              </div>

              <p className="text-[14px] sm:text-sm text-white/55 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-sm font-bold text-[#A78BFA] shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-white/35">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
