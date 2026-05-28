"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./section-wrapper";
import { projects } from "@/lib/data";

function handle3DTilt(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-6px) scale(1.01)`;
  el.style.transition = "transform 0.1s ease";
}

function resetTilt(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "";
  e.currentTarget.style.transition =
    "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
}

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
          <span className="text-[11px] sm:text-xs tracking-[0.2em] text-[#A78BFA] uppercase mb-3 block">
            Our Work
          </span>
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/65 max-w-xl mx-auto text-[15px] sm:text-base">
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
              onMouseMove={handle3DTilt}
              onMouseLeave={resetTilt}
              onClick={() => router.push(`/projects/${project.slug}`)}
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer border border-white/[0.06] hover:border-[#7C3AED]/30 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)] transition-[border-color,box-shadow] duration-300 h-full"
            >
              {/* Image */}
              <div className="aspect-video bg-[#0a0d1a] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                {/* Shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#A78BFA]/0 group-hover:from-[#7C3AED]/10 group-hover:to-transparent transition-all duration-500" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-[14px] sm:text-sm text-white/65 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-white/70 border border-white/[0.06] group-hover:border-[#7C3AED]/15 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm text-[#A78BFA] font-medium group-hover:gap-2.5 transition-all duration-200">
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
