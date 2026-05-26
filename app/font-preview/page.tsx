import type { Metadata } from "next";

export const metadata: Metadata = { title: "Font Preview — BeberBuilds" };

const fonts = [
  {
    name: "Space Grotesk",
    import: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap",
    family: "'Space Grotesk', sans-serif",
    tag: "Geometric · techy · startup-ready",
    weights: { normal: 600, brand: 700 },
  },
  {
    name: "Outfit",
    import: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap",
    family: "'Outfit', sans-serif",
    tag: "Round geometry · friendly-pro · very clean",
    weights: { normal: 600, brand: 700 },
  },
  {
    name: "DM Sans",
    import: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap",
    family: "'DM Sans', sans-serif",
    tag: "Neutral · versatile · editorial feel",
    weights: { normal: 600, brand: 700 },
  },
  {
    name: "Plus Jakarta Sans",
    import: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap",
    family: "'Plus Jakarta Sans', sans-serif",
    tag: "Polished · modern SaaS · premium",
    weights: { normal: 600, brand: 700 },
  },
  {
    name: "Syne",
    import: "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap",
    family: "'Syne', sans-serif",
    tag: "Bold identity · distinctive · avant-garde",
    weights: { normal: 700, brand: 800 },
  },
  {
    name: "Raleway",
    import: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap",
    family: "'Raleway', sans-serif",
    tag: "Elegant · thin-stroked · high-end",
    weights: { normal: 600, brand: 700 },
  },
  {
    name: "Manrope",
    import: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap",
    family: "'Manrope', sans-serif",
    tag: "Balanced · humanist geometry · trustworthy",
    weights: { normal: 600, brand: 700 },
  },
  {
    name: "Urbanist",
    import: "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap",
    family: "'Urbanist', sans-serif",
    tag: "Ultra-geometric · sharp · futuristic",
    weights: { normal: 600, brand: 700 },
  },
];

// Inline SVG logo mark so no import needed in a server component
function LogoMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 56"
      fill="none"
      width="36"
      height="36"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M 2 4 H 10 V 7 H 5 V 49 H 10 V 52 H 2 Z" fill="#A855F7" />
      <path d="M 62 4 H 54 V 7 H 59 V 49 H 54 V 52 H 62 Z" fill="#A855F7" />
      <g stroke="#A855F7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 21 6 V 50" />
        <path d="M 21 6 H 30 Q 42 6 42 16 Q 42 27 30 27 H 21" />
        <path d="M 21 27 H 33 Q 46 27 46 39 Q 46 50 33 50 H 21" />
      </g>
    </svg>
  );
}

export default function FontPreview() {
  const allImports = fonts.map((f) => `@import url('${f.import}');`).join("\n");

  return (
    <>
      <style>{allImports}</style>
      <div
        style={{
          minHeight: "100vh",
          background: "#05070f",
          padding: "48px 32px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ maxWidth: 900, margin: "0 auto 48px" }}>
          <p style={{ color: "#A855F7", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
            Font Preview
          </p>
          <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: 0 }}>
            BeberBuilds — Pick Your Font
          </h1>
          <p style={{ color: "#ffffff50", fontSize: 14, marginTop: 8 }}>
            Each card shows the logo + brand name + a sample tagline at multiple weights.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: 24,
          }}
        >
          {fonts.map((font, i) => (
            <div
              key={font.name}
              style={{
                background: "#0d1022",
                border: "1px solid #ffffff10",
                borderRadius: 16,
                padding: "28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {/* Badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    background: "#A855F720",
                    color: "#A855F7",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: 999,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ color: "#ffffff30", fontSize: 11 }}>{font.tag}</span>
              </div>

              {/* Logo row */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: font.family }}>
                <LogoMark />
                <span style={{ color: "#fff", fontSize: 26, fontWeight: font.weights.brand, letterSpacing: "-0.02em" }}>
                  Beber<span style={{ color: "#A855F7" }}>Builds</span>
                </span>
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: font.family,
                  color: "#ffffff60",
                  fontSize: 13,
                  fontWeight: font.weights.normal,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                AI-powered software that helps businesses automate, scale, and succeed.
              </p>

              {/* Nav sample */}
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  fontFamily: font.family,
                  fontSize: 13,
                  color: "#ffffff50",
                  fontWeight: font.weights.normal,
                  borderTop: "1px solid #ffffff08",
                  paddingTop: 16,
                }}
              >
                {["Services", "Projects", "About", "Contact"].map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>

              {/* Font name */}
              <p style={{ color: "#ffffff25", fontSize: 11, margin: 0, fontFamily: "monospace" }}>
                {font.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
