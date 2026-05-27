"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./section-wrapper";
import { brandLogos } from "@/lib/data";

export default function TrustedBrands() {
  return (
    <SectionWrapper className="py-12 border-y border-white/[0.04]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <p className="text-center text-[10px] sm:text-xs text-white/25 uppercase tracking-[0.2em] mb-7 sm:mb-8">
          Built With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {brandLogos.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={24}
                className="h-6 sm:h-6 w-auto opacity-30 hover:opacity-70 transition-all duration-300 grayscale brightness-0 invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
