// [ B ] logo mark — spaced thin brackets, monoline B stroke
export default function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Left bracket [ — slim, set wide from B */}
      <path d="M 2 4 H 10 V 7 H 5 V 49 H 10 V 52 H 2 Z" fill="#A855F7" />

      {/* Right bracket ] — mirror */}
      <path d="M 62 4 H 54 V 7 H 59 V 49 H 54 V 52 H 62 Z" fill="#A855F7" />

      {/*
        B — monoline stroke style, three open paths sharing the stem axis.
        strokeLinejoin="round" keeps junctions clean at (21,6), (21,27), (21,50).
      */}
      <g
        stroke="#A855F7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Stem — full height */}
        <path d="M 21 6 V 50" />

        {/* Top bowl — D opening right */}
        <path d="M 21 6 H 30 Q 42 6 42 16 Q 42 27 30 27 H 21" />

        {/* Bottom bowl — wider D */}
        <path d="M 21 27 H 33 Q 46 27 46 39 Q 46 50 33 50 H 21" />
      </g>
    </svg>
  );
}
