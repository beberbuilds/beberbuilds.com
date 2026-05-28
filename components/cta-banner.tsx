"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { Button } from "@/components/ui/button";
import CalendlyModal from "@/components/calendly-modal";

export default function CTABanner() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  return (
    <>
      <SectionWrapper className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] sm:rounded-3xl overflow-hidden p-8 sm:p-16 lg:p-20 text-center border border-white/[0.05] hover:border-[#7C3AED]/25 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-[#7C3AED]/[0.08]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#7C3AED]/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[250px] sm:h-[300px] bg-[#7C3AED]/[0.15] rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Let&apos;s Build the{" "}
                <span className="text-gradient">Future Together</span>
              </h2>
              <p className="text-white/45 max-w-lg mx-auto text-[15px] sm:text-base mb-8">
                Ready to transform your business with AI? Let&apos;s discuss your project
                and find the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => setCalendlyOpen(true)}
                  className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-6 sm:px-7 py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] group w-full sm:w-auto tap-area"
                >
                  Book a Free Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </>
  );
}
