"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, socialLinks } from "@/lib/data";
import Link from "next/link";
import LogoMark from "@/components/logo-mark";

/* ─── Inline SVG brand icons ─── */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.765.266 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.266-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.266-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const brandIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
};

function FooterColumn({
  title,
  links,
  defaultOpen = false,
}: {
  title: string;
  links: { label: string; href: string }[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      {/* Header — clickable on mobile, static on sm+ */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between sm:cursor-default py-2 sm:py-0 sm:mb-4"
        aria-expanded={open}
      >
        <h4 className="text-sm font-semibold text-white/90">{title}</h4>
        <ChevronDown
          className={`w-4 h-4 text-white/30 sm:hidden transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Links — always visible on sm+, collapsible on mobile */}
      <div className="hidden sm:block">
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[14px] text-white/35 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden sm:hidden"
          >
            <ul className="space-y-3 pb-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/35 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#030612]">
      {/* Top glow — aurora edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-[#7C3AED]/[0.07] rounded-full blur-[60px] pointer-events-none -translate-y-1/2" />

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-14 pb-10 sm:pt-16 sm:pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8">
          {/* ═══ Column 1: Brand (spans 2 on desktop) ═══ */}
          <div className="lg:col-span-2 flex flex-col">
            <Link href="#home" className="flex items-center gap-2.5 group mb-4">
              <LogoMark className="w-9 h-9 sm:w-10 sm:h-10" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight">
                Beber<span className="text-[#A78BFA]">Builds</span>
              </span>
            </Link>

            <p className="text-[14px] sm:text-sm text-white/30 leading-relaxed mb-5 max-w-xs">
              Building AI-powered solutions that help businesses automate, scale,
              and succeed in the digital age.
            </p>

            {/* Contact quick info — mobile friendly */}
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:hello@beberbuilds.com"
                className="flex items-center gap-2.5 text-[13px] text-white/30 hover:text-[#A78BFA] transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED]/10 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-white/40 group-hover:text-[#A78BFA] transition-colors" />
                </div>
                hello@beberbuilds.com
              </a>
              <a
                href="tel:+16476165995"
                className="flex items-center gap-2.5 text-[13px] text-white/30 hover:text-[#A78BFA] transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED]/10 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-white/40 group-hover:text-[#A78BFA] transition-colors" />
                </div>
                +1 (647) 616-5995
              </a>
              <div className="flex items-center gap-2.5 text-[13px] text-white/30">
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white/40" />
                </div>
                Toronto, Canada
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const IconComponent = brandIconMap[social.label] || social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/30 hover:text-white hover:border-[#7C3AED]/25 hover:bg-[#7C3AED]/10 transition-all duration-200 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:text-[#A78BFA] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ═══ Link columns — collapsible on mobile ═══ */}
          <FooterColumn title="Quick Links" links={footerLinks.quickLinks} />
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] sm:text-xs text-white/20 order-2 sm:order-1">
            &copy; {new Date().getFullYear()} BeberBuilds. All rights reserved.
          </p>

          <div className="flex items-center gap-5 order-1 sm:order-2">
            <Link
              href="/privacy-policy"
              className="text-[12px] sm:text-xs text-white/20 hover:text-white/50 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[12px] sm:text-xs text-white/20 hover:text-white/50 transition-colors"
            >
              Terms
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[12px] sm:text-xs text-white/25 hover:text-[#A78BFA] transition-all duration-200 group"
              aria-label="Back to top"
            >
              Back to top
              <div className="w-6 h-6 sm:w-5 sm:h-5 rounded-lg bg-white/[0.04] border border-white/[0.05] flex items-center justify-center group-hover:bg-[#7C3AED]/10 group-hover:border-[#7C3AED]/25 transition-all duration-200">
                <ArrowUp className="w-3 h-3 sm:w-2.5 sm:h-2.5 group-hover:text-[#A78BFA] transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
