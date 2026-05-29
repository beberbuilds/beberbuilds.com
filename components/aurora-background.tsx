"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="animate-aurora-1 absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#7C3AED]/[0.07] blur-[120px]" style={{ willChange: "transform" }} />
      <div className="animate-aurora-2 absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#A78BFA]/[0.05] blur-[100px]" style={{ willChange: "transform" }} />
      <div className="animate-aurora-3 absolute top-[40%] left-[30%] w-[500px] h-[500px] rounded-full bg-[#6D28D9]/[0.04] blur-[140px]" style={{ willChange: "transform" }} />
    </div>
  );
}
