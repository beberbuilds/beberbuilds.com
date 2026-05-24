"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendlyModal from "@/components/calendly-modal";
import { projects } from "@/lib/data";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectDetailContent({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  const nextProject = projects.find((p) => p.slug === project?.nextProjectSlug) ?? null;
  const resultsRef = useRef(null);
  const resultsInView = useInView(resultsRef, { once: true, margin: "-80px" });
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  if (!project) notFound();

  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[400px] bg-[#7C3AED]/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/25"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-[2.25rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight mb-4">
              {project.title}
            </h1>

            <p className="text-[15px] sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[13px] sm:text-sm text-white/35 mb-8">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                {project.client}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/15 hidden sm:block" />
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-white/15 hidden sm:block" />
              <span>{project.role}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => setCalendlyOpen(true)}
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-6 py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] group w-full sm:w-auto tap-area"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="rounded-xl px-6 py-6 text-[15px] sm:text-sm font-medium border-white/10 text-white hover:bg-white/5 hover:border-[#7C3AED]/30 transition-all duration-300 group w-full sm:w-auto tap-area"
              >
                <Play className="w-4 h-4 mr-2 group-hover:text-[#A78BFA] transition-colors" />
                View Live Demo
              </Button>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.06] shadow-[0_0_60px_rgba(124,58,237,0.08)]"
          >
            <div className="aspect-video sm:aspect-[21/9] bg-[#0a0d1a]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ───── Overview ───── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-8 lg:p-10 border-white/[0.05]">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A78BFA] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                The Challenge
              </span>
              <p className="text-[14px] sm:text-base text-white/55 leading-relaxed">
                {project.overview.challenge}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-8 lg:p-10 border-white/[0.05]">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A78BFA] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                The Solution
              </span>
              <p className="text-[14px] sm:text-base text-white/55 leading-relaxed">
                {project.overview.solution}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───── Key Features ───── */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-[14px] sm:text-sm text-white/35 max-w-lg mx-auto">
              What makes this project stand out from the crowd.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 sm:p-6 lg:p-7 group transition-all duration-300 hover:border-[#7C3AED]/20 hover:shadow-[0_0_25px_rgba(124,58,237,0.06)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/25 transition-colors">
                  <feature.icon className="w-5 h-5 text-[#A78BFA]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[14px] sm:text-sm text-white/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Tech Stack ───── */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-[14px] sm:text-sm text-white/35 max-w-lg mx-auto">
              Cutting-edge technologies powering this project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] text-[13px] sm:text-sm font-medium border border-[#7C3AED]/25 shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Results ───── */}
      <section ref={resultsRef} className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              The <span className="text-gradient">Results</span>
            </h2>
            <p className="text-[14px] sm:text-sm text-white/35 max-w-lg mx-auto">
              Measurable impact delivered for {project.client}.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {project.results.map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 sm:p-6 text-center group transition-all duration-300 hover:border-[#7C3AED]/20 hover:shadow-[0_0_25px_rgba(124,58,237,0.08)]"
              >
                <div className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold text-gradient mb-2 tabular-nums">
                  <CountUp target={result.value} suffix={result.suffix} isInView={resultsInView} />
                </div>
                <div className="text-[11px] sm:text-sm text-white/35">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Next Project CTA ───── */}
      <section className="py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          {nextProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[2rem] sm:rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center"
            >
              <div className="absolute inset-0 bg-[#7C3AED]/[0.06]" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/15 via-transparent to-[#7C3AED]/8" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#7C3AED]/[0.1] rounded-full blur-[100px]" />

              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA] mb-4 block">
                  Next Case Study
                </span>
                <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                  {nextProject.title}
                </h2>
                <p className="text-[15px] sm:text-base text-white/45 max-w-lg mx-auto mb-8">
                  {nextProject.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href={`/projects/${nextProject.slug}`}>
                    <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-6 py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] group w-full sm:w-auto tap-area">
                      View Next Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/#projects">
                    <Button
                      variant="outline"
                      className="rounded-xl px-6 py-6 text-[15px] sm:text-sm font-medium border-white/10 text-white hover:bg-white/5 hover:border-[#7C3AED]/30 transition-all duration-300 group w-full sm:w-auto tap-area"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                      All Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </>
  );
}
