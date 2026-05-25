const fs = require('fs');

const mark = `export default function LogoMark({ className = "w-8 h-8" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 38" fill="none" className={className} aria-hidden="true">
      <polyline points="11,2 4,2 4,36 11,36" stroke="#A855F7" strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="miter" fill="none"/>
      <polyline points="33,2 40,2 40,36 33,36" stroke="#A855F7" strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="miter" fill="none"/>
      <line x1="15" y1="6" x2="15" y2="32" stroke="#A855F7" strokeWidth="3" strokeLinecap="round"/>
      <path d="M15 6 H21 Q29 6 29 12 Q29 18 21 18 H15" stroke="#A855F7" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M15 18 H22 Q31 18 31 25 Q31 32 22 32 H15" stroke="#A855F7" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}`;

fs.writeFileSync('components/logo-mark.tsx', mark);
console.log('created logo-mark.tsx');

let nav = fs.readFileSync('components/navbar.tsx', 'utf8');
nav = nav.replace(
  'import { Menu, X } from "lucide-react";',
  'import { Menu, X } from "lucide-react";\nimport LogoMark from "@/components/logo-mark";'
);
nav = nav.replace(
  '<span className="text-lg sm:text-xl font-bold tracking-tight">Beber<span className="text-[#A78BFA]">Builds</span></span>',
  '<LogoMark className="w-7 h-7 sm:w-8 sm:h-8" />\n            <span className="text-lg sm:text-xl font-bold tracking-tight">beber<span className="text-[#A78BFA]">builds</span></span>'
);
nav = nav.replace(
  '<span className="text-base font-bold tracking-tight">Beber<span className="text-[#A78BFA]">Builds</span></span>',
  '<LogoMark className="w-7 h-7" />\n                  <span className="text-base font-bold tracking-tight">beber<span className="text-[#A78BFA]">builds</span></span>'
);
fs.writeFileSync('components/navbar.tsx', nav);
console.log('patched navbar');

let foot = fs.readFileSync('components/footer.tsx', 'utf8');
foot = foot.replace(
  'import { Sparkles, ChevronDown, ArrowUp, Mail, MapPin, Phone } from "lucide-react";',
  'import { ChevronDown, ArrowUp, Mail, MapPin, Phone } from "lucide-react";\nimport LogoMark from "@/components/logo-mark";'
);
foot = foot.replace(
  '<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#7C3AED] flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-shadow duration-300">\n                <Sparkles className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-white" />\n              </div>',
  '<LogoMark className="w-9 h-9 sm:w-10 sm:h-10" />'
);
foot = foot.replace(
  'Beber<span className="text-[#A78BFA]">Builds</span>',
  'beber<span className="text-[#A78BFA]">builds</span>'
);
fs.writeFileSync('components/footer.tsx', foot);
console.log('patched footer');

console.log('\nDone! Now run: git add -A && git commit -m "feat: logo mark" && git push origin master');