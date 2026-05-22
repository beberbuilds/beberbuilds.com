"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import SectionWrapper from "./section-wrapper";
import { services } from "@/lib/data";

export default function Services() {
  const router = useRouter();

  return (
    <SectionWrapper id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Services That Drive{" "}
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-[15px] sm:text-base">
            End-to-end AI and development services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => router.push(`/services/${service.slug}`)}
              className="group glass rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 hover:border-[#7C3AED]/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
            >
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center mb-5 group-hover:bg-[#7C3AED]/25 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300">
                <service.icon className="w-6 h-6 text-[#A78BFA]" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-[14px] sm:text-sm text-white/45 leading-relaxed mb-5">
                {service.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm text-[#A78BFA] font-medium group-hover:gap-2 transition-all duration-200">
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
