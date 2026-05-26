"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/logo-mark";

function resolveHref(href: string, pathname: string) {
  if (pathname === "/") return href;
  return `/${href}`;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <LogoMark className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-lg sm:text-xl font-bold tracking-tight">Beber<span className="text-[#A78BFA]">Builds</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href, pathname)}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href={resolveHref("#contact", pathname)}>
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                Contact Us
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2.5 -mr-2 text-white/80 hover:text-white tap-area"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[min(85vw,340px)] bg-[#080b17] border-l border-white/[0.06] flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.05]">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2"
                >
                  <LogoMark className="w-7 h-7" />
                  <span className="text-base font-bold tracking-tight">Beber<span className="text-[#A78BFA]">Builds</span></span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-1.5 text-white/50 hover:text-white tap-area"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6 px-5">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={resolveHref(link.href, pathname)}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.35, ease: "easeOut" }}
                      onClick={() => setMobileOpen(false)}
                      className="text-[15px] text-white/70 hover:text-white py-3.5 px-3 -mx-3 rounded-xl hover:bg-white/[0.04] transition-all duration-200 font-medium"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </nav>

              <div className="p-5 border-t border-white/[0.05]">
                <Link
                  href={resolveHref("#contact", pathname)}
                  onClick={() => setMobileOpen(false)}
                  className="block"
                >
                  <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl py-6 text-[15px] font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                    Contact Us
                  </Button>
                </Link>
                <p className="text-[11px] text-white/25 text-center mt-4">
                  Let&apos;s build something great
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
