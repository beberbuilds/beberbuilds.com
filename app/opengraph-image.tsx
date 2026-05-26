import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BeberBuilds — AI-Powered Software That Grows Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050816",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(124,58,237,0.12)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(167,139,250,0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo mark [B] */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "rgba(124,58,237,0.2)",
              border: "1.5px solid rgba(124,58,237,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "800",
              color: "#A78BFA",
            }}
          >
            B
          </div>
          <span style={{ fontSize: "28px", fontWeight: "700", color: "white" }}>
            Beber<span style={{ color: "#A78BFA" }}>Builds</span>
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "800",
            lineHeight: "1.05",
            color: "white",
            marginBottom: "24px",
            maxWidth: "900px",
            letterSpacing: "-0.02em",
          }}
        >
          AI-Powered Software{" "}
          <span style={{ color: "#A78BFA" }}>That Grows Businesses</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "48px",
            maxWidth: "700px",
            lineHeight: "1.5",
          }}
        >
          Custom AI solutions, SaaS platforms, automation agents & web apps.
          Based in Toronto — serving clients globally.
        </div>

        {/* Bottom row — stats */}
        <div style={{ display: "flex", gap: "40px" }}>
          {[
            { n: "20+", l: "Projects Shipped" },
            { n: "100%", l: "Client Satisfaction" },
            { n: "24hr", l: "Response Time" },
          ].map((s) => (
            <div
              key={s.l}
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#A78BFA",
                  lineHeight: "1",
                }}
              >
                {s.n}
              </span>
              <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)" }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>

        {/* URL badge */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            padding: "10px 20px",
            borderRadius: "100px",
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.3)",
            color: "#A78BFA",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          beberbuilds.com
        </div>
      </div>
    ),
    { ...size }
  );
}
