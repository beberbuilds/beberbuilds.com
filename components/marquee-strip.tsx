"use client";

const items = [
  "AI Automation", "SaaS Development", "Web Applications", "AI Chatbots",
  "Trading Bots", "Desktop ERPs", "Custom Dashboards", "Python", "Next.js",
  "React", "OpenAI", "LangChain", "TypeScript", "Node.js", "PostgreSQL",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="relative py-5 border-y border-white/[0.04] overflow-hidden bg-[#050816]/50 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5 text-xs sm:text-sm text-white/30 uppercase tracking-[0.15em] shrink-0">
            <span className="w-1 h-1 rounded-full bg-[#7C3AED]/60 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
