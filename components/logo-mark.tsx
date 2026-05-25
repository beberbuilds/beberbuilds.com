export default function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
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
