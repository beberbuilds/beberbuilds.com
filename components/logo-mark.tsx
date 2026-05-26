// [ B ] logo mark — refined Space Grotesk-era identity
export default function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 38"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Gradient for premium look — top purple → bottom light purple */}
        <linearGradient id="bb-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* Left bracket [ */}
      <polyline
        points="11,2 4,2 4,36 11,36"
        stroke="url(#bb-grad)"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />

      {/* Right bracket ] */}
      <polyline
        points="33,2 40,2 40,36 33,36"
        stroke="url(#bb-grad)"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />

      {/* B — vertical stem */}
      <line
        x1="15" y1="5.5" x2="15" y2="32.5"
        stroke="url(#bb-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* B — top bowl */}
      <path
        d="M15 5.5 H21 Q29.5 5.5 29.5 12 Q29.5 18.5 21 18.5 H15"
        stroke="url(#bb-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* B — bottom bowl (slightly wider for balance) */}
      <path
        d="M15 18.5 H22 Q31 18.5 31 25.5 Q31 32.5 22 32.5 H15"
        stroke="url(#bb-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
