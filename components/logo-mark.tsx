export default function LogoMark({ className = "w-8 h-8" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 38" fill="none" className={className} aria-hidden="true">
      <polyline points="11,2 4,2 4,36 11,36" stroke="#A855F7" strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="miter" fill="none"/>
      <polyline points="33,2 40,2 40,36 33,36" stroke="#A855F7" strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="miter" fill="none"/>
      <line x1="15" y1="6" x2="15" y2="32" stroke="#A855F7" strokeWidth="3" strokeLinecap="round"/>
      <path d="M15 6 H21 Q29 6 29 12 Q29 18 21 18 H15" stroke="#A855F7" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M15 18 H22 Q31 18 31 25 Q31 32 22 32 H15" stroke="#A855F7" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}