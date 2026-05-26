// (B) logo mark — parentheses + B with proper counter holes
export default function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Left parenthesis ( — thick arc, tapers at top/bottom */}
      <path
        d="M 13 4 Q 0 28 13 52 L 13 47 Q 8 28 13 9 Z"
        fill="#A855F7"
      />

      {/* Right parenthesis ) — mirror */}
      <path
        d="M 51 4 Q 64 28 51 52 L 51 47 Q 56 28 51 9 Z"
        fill="#A855F7"
      />

      {/*
        B — compound path, evenodd fill rule punches holes in the bowls.
        Subpaths:
          1. Stem (thin vertical bar)
          2. Top bowl outer (D shape)
          3. Bottom bowl outer (D shape, wider)
          4. Top bowl counter/hole  ← overlaps #2 → evenodd = transparent
          5. Bottom bowl counter/hole ← overlaps #3 → evenodd = transparent
      */}
      <path
        fill="#A855F7"
        fillRule="evenodd"
        d={[
          // 1. Stem — 4 px wide, full height
          "M 18 5 L 22 5 L 22 51 L 18 51 Z",
          // 2. Top bowl outer — D opening right
          "M 22 5 L 32 5 Q 43 5 43 16 Q 43 27 32 27 L 22 27 Z",
          // 3. Bottom bowl outer — D opening right, slightly wider
          "M 22 27 L 34 27 Q 46 27 46 39 Q 46 51 34 51 L 22 51 Z",
          // 4. Top bowl hole — 4 px inset on all sides
          "M 26 9 L 31 9 Q 39 9 39 16 Q 39 23 31 23 L 26 23 Z",
          // 5. Bottom bowl hole — 4 px inset on all sides
          "M 26 31 L 33 31 Q 42 31 42 39 Q 42 47 33 47 L 26 47 Z",
        ].join(" ")}
      />
    </svg>
  );
}
