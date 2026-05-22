"use client";

import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Start Your{" "}
              <span className="text-gradient">Project Today</span>
            </h2>
            <p className="text-white/45 text-[15px] sm:text-base mb-8 max-w-md">
              Have a project in mind? Let&apos;s build something amazing together.
            </p>

            <div className="space-y-3.5">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 transition-all duration-300 hover:border-[#7C3AED]/20"
                >
                  <div className="w-11 h-11 sm:w-10 sm:h-10 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-[#A78BFA]" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-white/35">{info.label}</div>
                    <div className="text-sm font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-[#A78BFA]" />
                Send a Message
              </h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input-mobile w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#7C3AED]/50 focus:ring-1 focus:ring-[#7C3AED]/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input-mobile w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#7C3AED]/50 focus:ring-1 focus:ring-[#7C3AED]/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="input-mobile w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#7C3AED]/50 focus:ring-1 focus:ring-[#7C3AED]/30 transition-all duration-200 resize-none"
                  />
                </div>
                <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] group tap-area">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
