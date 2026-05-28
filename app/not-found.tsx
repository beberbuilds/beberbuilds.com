"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoMark from "@/components/logo-mark";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7C3AED]/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-lg"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <LogoMark className="w-10 h-10" />
            <span className="text-xl font-bold">Beber<span className="text-[#A78BFA]">Builds</span></span>
          </Link>
        </div>

        {/* 404 */}
        <div className="text-[120px] sm:text-[160px] font-black leading-none text-gradient mb-4 select-none">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-white/45 text-[15px] mb-10 leading-relaxed">
          Looks like this page doesn&apos;t exist. It may have moved or the URL might be wrong.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-6 py-6 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] group w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="outline" className="rounded-xl px-6 py-6 text-sm border-white/[0.12] text-white/80 hover:bg-white/[0.05] w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
