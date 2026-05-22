"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { projects } from "@/lib/data";

export default function Projects() {
  const router = useRouter();
  return (
    <SectionWrapper id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-[15px] sm:text-base">
            Showcasing our latest AI-powered solutions and applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="glass rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[#7C3AED]/25 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] h-full"
              >
                <div className="aspect-video bg-[#0a0d1a] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-[14px] sm:text-sm text-white/45 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-white/50 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm text-[#A78BFA] font-medium group-hover:gap-2 transition-all duration-200">
                    View Case Study
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
