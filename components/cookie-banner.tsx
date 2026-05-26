"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

// Lazy initializer runs only on the client — safe from SSR since this is a
// "use client" component. Avoids calling setState inside a useEffect body.
function getInitialVisibility() {
  if (typeof window === "undefined") return false;
  return !localStorage.getItem("bb-cookie-consent");
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(getInitialVisibility);

  function accept() {
    localStorage.setItem("bb-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("bb-cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[200]"
        >
          <div className="glass-strong rounded-2xl p-4 sm:p-5 border border-white/[0.1] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-base">🍪</span>
                <p className="text-sm font-semibold text-white">We use cookies</p>
              </div>
              <button
                onClick={decline}
                className="text-white/30 hover:text-white/70 transition-colors shrink-0 mt-0.5"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[13px] text-white/45 leading-relaxed mb-4">
              We use cookies to improve your experience and analyze site traffic.
              See our{" "}
              <Link href="/cookie-policy" className="text-[#A78BFA] hover:underline">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[13px] font-semibold rounded-xl px-4 py-2.5 transition-all duration-200 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Accept All
              </button>
              <button
                onClick={decline}
                className="flex-1 bg-white/[0.05] hover:bg-white/[0.09] text-white/60 hover:text-white text-[13px] font-medium rounded-xl px-4 py-2.5 transition-all duration-200 border border-white/[0.07]"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
