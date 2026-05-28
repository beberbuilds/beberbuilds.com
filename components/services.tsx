"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import SectionWrapper from "./section-wrapper";
import { services } from "@/lib/data";

export default function Services() {
  const router = useRouter();

  return (
    <SectionWrapper id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[11px] sm:text-xs tracking-[0.2em] text-[#A78BFA] uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {["Services That Drive", "Real Results"].map((line, li) => (
              <span key={li} className={li > 0 ? "block" : ""}>
                {line.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: li * 0.1 + wi * 0.08, duration: 0.5 }}
                    className={`inline-block mr-[0.25em] ${li === 1 ? "text-gradient" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
          <p className="text-white/65 max-w-xl mx-auto text-[15px] sm:text-base">
            End-to-end AI and development services tailored to your business needs.
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => {
            const isFeatured = i === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => router.push(`/services/${service.slug}`)}
                className={`group cursor-pointer ${isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
              >
                {/* Gradient border wrapper */}
                <div className="p-px rounded-2xl bg-gradient-to-br from-[#7C3AED]/20 via-white/[0.03] to-transparent group-hover:from-[#7C3AED]/50 group-hover:to-[#A78BFA]/30 transition-all duration-500 h-full">
                  {/* Inner card */}
                  <div className={`glass rounded-[calc(1rem-1px)] h-full p-6 sm:p-7 transition-all duration-300 hover:border-[#7C3AED]/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] relative overflow-hidden ${isFeatured ? "flex flex-col sm:flex-row gap-6 items-start" : ""}`}>
                    {/* Featured card inner glow */}
                    {isFeatured && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/[0.06] rounded-full blur-[60px] pointer-events-none" />
                    )}

                    {/* Icon + content */}
                    <div className={isFeatured ? "shrink-0" : ""}>
                      <div className={`rounded-xl bg-[#7C3AED]/15 flex items-center justify-center group-hover:bg-[#7C3AED]/25 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 mb-5 ${isFeatured ? "w-14 h-14 sm:w-16 sm:h-16" : "w-12 h-12 sm:w-13 sm:h-13"}`}>
                        <service.icon className={`text-[#A78BFA] ${isFeatured ? "w-7 h-7" : "w-6 h-6"}`} />
                      </div>
                    </div>

                    <div className="flex-1 relative z-10">
                      {isFeatured && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#7C3AED]/15 text-[#A78BFA] text-[10px] uppercase tracking-wider font-semibold mb-3">
                          ★ Featured Service
                        </span>
                      )}
                      <h3 className={`font-semibold mb-2 ${isFeatured ? "text-xl sm:text-2xl" : "text-lg"}`}>
                        {service.title}
                      </h3>
                      <p className={`text-white/65 leading-relaxed mb-5 ${isFeatured ? "text-[15px] sm:text-base max-w-lg" : "text-[14px] sm:text-sm"}`}>
                        {service.description}
                      </p>

                      {isFeatured && (
                        <>
                          <div className="flex flex-wrap gap-2 mb-5">
                            {["Python", "OpenAI", "LangChain", "n8n", "Zapier"].map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-white/60 border border-white/[0.06]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {/* Mini stats row */}
                          <div className="grid grid-cols-3 gap-3 mb-5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                            {[
                              { value: "24/7", label: "Always on" },
                              { value: "60%", label: "Cost saved" },
                              { value: "0", label: "Human errors" },
                            ].map((s) => (
                              <div key={s.label} className="text-center">
                                <div className="text-base font-bold text-gradient">{s.value}</div>
                                <div className="text-[10px] text-white/50 mt-0.5">{s.label}</div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      <span className="inline-flex items-center gap-1.5 text-sm text-[#A78BFA] font-medium group-hover:gap-2 transition-all duration-200">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
