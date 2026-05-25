const fs = require('fs');
let f = fs.readFileSync('components/footer.tsx', 'utf8');
f = f.replace(
  `<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#7C3AED] flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-shadow duration-300">\n                <Sparkles className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-white" />\n              </div>`,
  `<LogoMark className="w-9 h-9 sm:w-10 sm:h-10" />`
);
fs.writeFileSync('components/footer.tsx', f);
console.log('done');