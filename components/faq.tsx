"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "./section-wrapper";

const faqs = [
  {
    q: "How much does a project cost?",
    a: "Projects typically range from $1,500 for a landing site to $15,000+ for a full SaaS platform or AI automation system. After a free discovery call, I give you a fixed price — no hourly billing, no surprise invoices.",
  },
  {
    q: "How long does it take to build?",
    a: "Most projects ship in 3–8 weeks depending on scope. Landing pages and simple web apps: 2–3 weeks. SaaS platforms and AI agents: 5–10 weeks. I give you a precise timeline before we start, and I stick to it.",
  },
  {
    q: "Do I own the code when it's done?",
    a: "100%. Every line of code, every file, every API key setup — it all transfers to you at launch. I don't hold anything hostage. You get the GitHub repo, the hosting access, everything.",
  },
  {
    q: "Do you outsource or use junior developers?",
    a: "Never. You work directly with me — Beberg Khan — from the first call to the final deployment. No account managers, no hand-offs, no juniors handed the keys.",
  },
  {
    q: "What if I already have a partially built project?",
    a: "I take these on regularly. I'll audit what exists, keep what's solid, and rebuild what isn't. You only pay for work that adds real value.",
  },
  {
    q: "Can you work with clients outside Canada?",
    a: "Absolutely — the majority of my clients are international. I work across North America, Middle East, UK, and South Asia. Time zones are never a problem.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
        open
          ? "border-[#7C3AED]/30 bg-[#7C3AED]/[0.04]"
          : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
      >
        <span className="text-[15px] sm:text-base font-medium leading-snug">{q}</span>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
          open ? "bg-[#7C3AED] text-white" : "bg-white/[0.04] text-white/40"
        }`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 text-[14px] sm:text-[15px] text-white/70 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="text-[11px] sm:text-xs tracking-[0.2em] text-[#A78BFA] uppercase mb-3 block">
            Got Questions
          </span>
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-white/65 max-w-xl mx-auto text-[15px] sm:text-base">
            Everything you need to know before booking a call.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/50 text-sm mt-10"
        >
          Still have questions?{" "}
          <a href="#contact" className="text-[#A78BFA] hover:underline">
            Send me a message →
          </a>
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
