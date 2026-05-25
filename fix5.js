const fs = require('fs');

// ── 1. Better logo mark matching the [B] bracket design ──────────────────────
fs.writeFileSync('components/logo-mark.tsx', `export default function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40" fill="none" className={className} aria-hidden="true">
      {/* Left bracket */}
      <path d="M14 2H6V38H14" stroke="#A855F7" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter" fill="none"/>
      {/* Right bracket */}
      <path d="M34 2H42V38H34" stroke="#A855F7" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter" fill="none"/>
      {/* B vertical stem */}
      <line x1="17" y1="7" x2="17" y2="33" stroke="#A855F7" strokeWidth="3.5" strokeLinecap="round"/>
      {/* B top bowl */}
      <path d="M17 7H25C30 7 30 13 30 13C30 19 25 19 17 19" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* B bottom bowl - slightly wider */}
      <path d="M17 19H26C32 19 32 27 32 27C32 33 26 33 17 33" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
`);
console.log('✓ logo-mark.tsx updated');

// ── 2. Fix navbar ─────────────────────────────────────────────────────────────
let nav = fs.readFileSync('components/navbar.tsx', 'utf8').replace(/\r\n/g, '\n');

// Fix import - remove Sparkles, add LogoMark
nav = nav.replace(
  `import { Menu, X, Sparkles } from "lucide-react";`,
  `import { Menu, X } from "lucide-react";\nimport LogoMark from "@/components/logo-mark";`
);

// Fix desktop logo block
nav = nav.replace(
  `<Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#7C3AED] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-shadow duration-300">
              <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">BeberBuilds</span>
          </Link>`,
  `<Link href="/" className="flex items-center gap-2 group shrink-0">
            <LogoMark className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-lg sm:text-xl font-bold tracking-tight">beber<span className="text-[#A78BFA]">builds</span></span>
          </Link>`
);

// Fix mobile logo block
nav = nav.replace(
  `<div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base font-bold tracking-tight">BeberBuilds</span>`,
  `<LogoMark className="w-7 h-7" />
                  <span className="text-base font-bold tracking-tight">beber<span className="text-[#A78BFA]">builds</span></span>`
);

fs.writeFileSync('components/navbar.tsx', nav);
console.log('✓ navbar.tsx fixed');

// ── 3. Verify ────────────────────────────────────────────────────────────────
const check = fs.readFileSync('components/navbar.tsx', 'utf8');
if (check.includes('Sparkles')) {
  console.log('⚠ WARNING: Sparkles still found in navbar! Manual edit needed.');
} else {
  console.log('✓ No Sparkles in navbar — all good!');
}

console.log('\nNow run:\n  git add -A\n  git commit -m "fix: correct logo mark and navbar branding"\n  git push origin master');
