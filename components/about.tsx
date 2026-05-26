"use client";

import { motion } from "framer-motion";
import { Zap, Target, Heart } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./section-wrapper";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Zap, title: "Fast Delivery", desc: "We ship working software in weeks, not months." },
  { icon: Target, title: "Results Focused", desc: "Every line of code drives measurable business outcomes." },
  { icon: Heart, title: "Client First", desc: "Your success is our success — we're partners, not vendors." },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] sm:text-xs tracking-[0.2em] text-[#A78BFA] uppercase mb-3 block">
              About Us
            </span>
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              We Turn{" "}
              <span className="text-gradient">Ideas Into Intelligent</span>{" "}
              Products
            </h2>
            <p className="text-white/45 leading-relaxed mb-5 text-[15px] sm:text-base">
              BeberBuilds is a premium AI and software development agency. We partner
              with startups and established brands to design, build and launch powerful
              digital products that solve real problems.
            </p>
            <p className="text-white/45 leading-relaxed mb-8 text-[15px] sm:text-base">
              Our team of engineers, designers and AI specialists brings deep expertise
              across machine learning, full-stack development and user experience —
              all under one roof.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-[#7C3AED]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4.5 h-4.5 sm:w-4 sm:h-4 text-[#A78BFA]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-[13px] sm:text-xs text-white/35">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-6 sm:px-7 py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] w-full sm:w-auto tap-area"
            >
              Learn More About Us
            </Button>
          </motion.div>

          {/* Right — dynamic image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] bg-[#7C3AED]/[0.08] rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

            {/* Outer glow ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#7C3AED]/10 animate-pulse-glow pointer-events-none" />

            {/* Image container */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mb-6"
            >
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-[#7C3AED]/30 shadow-[0_0_50px_rgba(124,58,237,0.2)] group">
                <Image
                  src="/about-image.png"
                  alt="BeberBuilds team"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/10 transition-all duration-500" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-strong rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-medium">Trusted by 20+ brands</span>
              </motion.div>
            </motion.div>

            {/* Stat badges — visible on all screens, arranged in a row on mobile */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {[
                { n: "15+", t: "Projects" },
                { n: "20+", t: "Clients" },
                { n: "100%", t: "Satisfaction" },
              ].map((s, i) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                  animate={{ y: [0, -3, 0] }}
                  className="glass rounded-xl px-3.5 py-2.5 text-center z-20"
                >
                  <div className="text-base sm:text-sm font-bold text-gradient">{s.n}</div>
                  <div className="text-[10px] sm:text-[9px] text-white/30">{s.t}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
