const fs = require('fs');
let f = fs.readFileSync('components/footer.tsx', 'utf8');
f = f.replace(/\s*<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl[^"]*"[^>]*>[\s\S]*?<\/div>/, '\n              <LogoMark className="w-9 h-9 sm:w-10 sm:h-10" />');
fs.writeFileSync('components/footer.tsx', f);
console.log('done - Sparkles removed');