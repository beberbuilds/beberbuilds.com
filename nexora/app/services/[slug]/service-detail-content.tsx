"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, ChevronDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceDetails } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass rounded-2xl border-white/[0.05] overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left tap-area"
      >
        <span className="text-[15px] sm:text-base font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#A78BFA] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-[14px] sm:text-sm text-white/50 leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function ServiceDetailContent({ slug }: { slug: string }) {
  const service = serviceDetails.find((s) => s.slug === slug);
  const overviewRef = useRef(null);

  if (!service) notFound();

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
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#7C3AED]/15 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(124,58,237,0.2)]">
              <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#A78BFA]" />
            </div>

            <h1 className="text-[2.25rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight mb-4">
              {service.title}
            </h1>

            <p className="text-[15px] sm:text-base text-[#A78BFA] max-w-xl mx-auto font-medium mb-4">
              {service.subtitle}
            </p>

            <p className="text-[15px] sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#contact">
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-6 py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] group w-full sm:w-auto tap-area">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── Overview ───── */}
      <section ref={overviewRef} className="py-16 sm:py-20">
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
                What It Is
              </span>
              <p className="text-[14px] sm:text-base text-white/55 leading-relaxed">
                {service.overview.what}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-8 lg:p-10 border-white/[0.05]">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A78BFA] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                Why It Matters
              </span>
              <p className="text-[14px] sm:text-base text-white/55 leading-relaxed">
                {service.overview.why}
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
              Everything you need to {service.title.toLowerCase()} at the highest level.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {service.features.map((feature, i) => (
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

      {/* ───── Benefits ───── */}
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
              Why <span className="text-gradient">Choose</span> This
            </h2>
            <p className="text-[14px] sm:text-sm text-white/35 max-w-lg mx-auto">
              Real outcomes our clients see from {service.title.toLowerCase()}.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 sm:p-6 text-center group transition-all duration-300 hover:border-[#7C3AED]/20 hover:shadow-[0_0_25px_rgba(124,58,237,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7C3AED]/25 transition-colors">
                  <benefit.icon className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-base font-semibold mb-2">{benefit.title}</h3>
                <p className="text-[14px] sm:text-sm text-white/40 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Our Process ───── */}
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
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-[14px] sm:text-sm text-white/35 max-w-lg mx-auto">
              How we deliver {service.title.toLowerCase()} — from kickoff to launch.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {service.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative glass rounded-2xl p-5 sm:p-6 group transition-all duration-300 hover:border-[#7C3AED]/20"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center text-sm font-bold mb-4 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-shadow">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                <p className="text-[14px] sm:text-sm text-white/40 leading-relaxed">{step.description}</p>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#7C3AED]/40 text-xl">
                    →
                  </div>
                )}
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
              The modern tools and frameworks we use to build {service.title.toLowerCase()}.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {service.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] text-[13px] sm:text-sm font-medium border border-[#7C3AED]/25 shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Use Cases ───── */}
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
              Who <span className="text-gradient">Uses</span> This
            </h2>
            <p className="text-[14px] sm:text-sm text-white/35 max-w-lg mx-auto">
              Real-world applications of {service.title.toLowerCase()}.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {service.useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 sm:p-6 lg:p-7 group transition-all duration-300 hover:border-[#7C3AED]/20 hover:shadow-[0_0_25px_rgba(124,58,237,0.06)]"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#7C3AED]/25 transition-colors">
                    <CheckCircle className="w-4 h-4 text-[#A78BFA]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-[14px] sm:text-sm text-white/40 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
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
              Frequently <span className="text-gradient">Asked</span> Questions
            </h2>
            <p className="text-[14px] sm:text-sm text-white/35 max-w-lg mx-auto">
              Everything you might be wondering about {service.title.toLowerCase()}.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {service.faq.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
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
                Let&apos;s Build
              </span>
              <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                Ready to Get Started?
              </h2>
              <p className="text-[15px] sm:text-base text-white/45 max-w-lg mx-auto mb-8">
                Tell us about your project and we&apos;ll put together a free proposal with timeline and pricing — within 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/#contact">
                  <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-6 py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] group w-full sm:w-auto tap-area">
                    Book a Free Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#services">
                  <Button
                    variant="outline"
                    className="rounded-xl px-6 py-6 text-[15px] sm:text-sm font-medium border-white/10 text-white hover:bg-white/5 hover:border-[#7C3AED]/30 transition-all duration-300 group w-full sm:w-auto tap-area"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    All Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
