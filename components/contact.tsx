"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "./section-wrapper";
import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Auto-dismiss feedback after 6 seconds
  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(null), 6000);
    return () => clearTimeout(timer);
  }, [feedback]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback(null);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setFeedback({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        formRef.current?.reset();
      }
    } catch {
      setFeedback({
        type: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

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
            <p className="text-white/65 text-[15px] sm:text-base mb-6 max-w-md">
              Have a project in mind? Let&apos;s build something amazing together.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[12px] text-[#A78BFA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                Response within 24 hours
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-[12px] text-white/60">
                🇨🇦 Based in Toronto, serving clients globally
              </div>
            </div>

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
                    <div className="text-[11px] sm:text-xs text-white/55">{info.label}</div>
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

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="input-mobile w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7C3AED]/50 focus:ring-1 focus:ring-[#7C3AED]/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="input-mobile w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7C3AED]/50 focus:ring-1 focus:ring-[#7C3AED]/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className="input-mobile w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7C3AED]/50 focus:ring-1 focus:ring-[#7C3AED]/30 transition-all duration-200 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] group tap-area"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Feedback message */}
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 text-sm rounded-xl p-3 ${
                      feedback.type === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {feedback.type === "success" ? (
                      <CheckCircle className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    {feedback.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
