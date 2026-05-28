"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "./section-wrapper";

const results = [
  {
    icon: TrendingUp,
    project: "XAUBOT v2",
    category: "Algo Trading Bot",
    slug: "xaubot-v2",
    outcome: "+$160 net profit on first profitable version — 52% win rate across 50 live trades after diagnosing and fixing a critical H1 trend-filter inversion bug.",
    metrics: [
      { value: "52%", label: "Win Rate" },
      { value: "+$160", label: "Net Profit" },
      { value: "50", label: "Trades" },
    ],
    tags: ["Python", "MetaTrader 5", "Flask"],
  },
  {
    icon: Globe,
    project: "Zyn Consultancy",
    category: "Web Development",
    slug: "zyn-consultancy",
    outcome: "Took a Dubai tax consultancy from zero web presence to a live, SEO-optimized site in 7 weeks — receiving inbound consultation bookings within the first month.",
    metrics: [
      { value: "7wks", label: "Discovery to Launch" },
      { value: "10+", label: "Pages Delivered" },
      { value: "1st", label: "Month Bookings" },
    ],
    tags: ["WordPress", "Elementor Pro", "SEO"],
  },
  {
    icon: Database,
    project: "Retail ERP",
    category: "Desktop Application",
    slug: "retail-business-management-erp",
    outcome: "Built a full offline-first desktop ERP with 12+ business modules — POS, inventory, HR, payroll and analytics — that runs at native speed with zero internet dependency and zero monthly cloud costs.",
    metrics: [
      { value: "12+", label: "Modules" },
      { value: "100%", label: "Offline" },
      { value: "$0", label: "Cloud Cost" },
    ],
    tags: ["Electron", "React", "IndexedDB"],
  },
];

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
          <span className="text-[11px] sm:text-xs tracking-[0.2em] text-[#A78BFA] uppercase mb-3 block">
            Proven Results
          </span>
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {["Work That", "Speaks for Itself"].map((line, li) => (
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
            Real outcomes from real projects — no fluff, just results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {results.map((r, i) => (
            <motion.div
              key={r.project}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="gradient-border-hover rounded-2xl p-6 sm:p-7 flex flex-col group transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center shrink-0">
                  <r.icon className="w-5 h-5 text-[#A78BFA]" />
                </div>
                <span className="text-[11px] text-white/50 uppercase tracking-wider font-medium">
                  {r.category}
                </span>
              </div>

              {/* Project name */}
              <h3 className="text-base font-bold mb-3">{r.project}</h3>

              {/* Outcome text */}
              <p className="text-[13px] sm:text-sm text-white/70 leading-relaxed mb-5 flex-1">
                {r.outcome}
              </p>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-2 mb-5 py-4 border-y border-white/[0.06]">
                {r.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-base font-bold text-gradient">{m.value}</div>
                    <div className="text-[10px] text-white/50 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags + link */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-white/60 border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${r.slug}`}
                  className="flex items-center gap-1 text-[12px] text-[#A78BFA] font-medium hover:gap-2 transition-all duration-200 shrink-0 ml-2"
                >
                  Full case study
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
