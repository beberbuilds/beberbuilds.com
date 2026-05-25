export default function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Left bracket [ — filled bold */}
      <path d="M4 4 H18 V10 H10 V46 H18 V52 H4 Z" fill="#A855F7" />

      {/* Right bracket ] — filled bold */}
      <path d="M60 4 H46 V10 H54 V46 H46 V52 H60 Z" fill="#A855F7" />

      {/* B — vertical stem */}
      <rect x="21" y="6" width="6" height="44" rx="1" fill="#A855F7" />

      {/* B — top bowl (D shape) */}
      <path d="M27 6 H36 C46 6 46 26 36 26 H27 Z" fill="#A855F7" />

      {/* B — bottom bowl (D shape, slightly wider) */}
      <path d="M27 26 H37 C49 26 49 50 37 50 H27 Z" fill="#A855F7" />
    </svg>
  );
}
