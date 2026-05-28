"use client";

import { useState } from "react";

const SERVICES = [
  {
    emoji: "🤖",
    title: "AI Automation",
    description:
      "Intelligent automation agents that eliminate repetitive work, process data and make smart decisions around the clock.",
    bullets: [
      "Replace manual, time-consuming tasks with autonomous agents",
      "Connect your tools via smart API workflows and triggers",
      "24/7 pipelines that scale without adding headcount",
    ],
  },
  {
    emoji: "⚙️",
    title: "SaaS Development",
    description:
      "Custom SaaS platforms built from scratch — scalable architecture, seamless APIs and polished user experiences.",
    bullets: [
      "Multi-tenant platforms with subscription billing built-in",
      "Production-ready architecture that scales as you grow",
      "Intuitive UX with smooth user onboarding flows",
    ],
  },
  {
    emoji: "🌐",
    title: "Web Development",
    description:
      "High-performance websites and web apps optimized for speed, SEO and conversion — built with modern frameworks.",
    bullets: [
      "Lightning-fast, mobile-first sites that rank on Google",
      "Conversion-optimized layouts with measurable results",
      "Core Web Vitals compliant and built for long-term growth",
    ],
  },
  {
    emoji: "💬",
    title: "AI Chatbots",
    description:
      "Conversational AI agents that engage visitors, qualify leads and support customers — automatically, 24/7.",
    bullets: [
      "Powered by the latest GPT models for natural conversation",
      "Embedded on your website, WhatsApp or custom channel",
      "Qualify leads and book calls without lifting a finger",
    ],
  },
  {
    emoji: "📊",
    title: "Dashboards & Tools",
    description:
      "Custom internal tools and real-time analytics dashboards that give you instant control over your operations.",
    bullets: [
      "Live data dashboards for your most critical KPIs",
      "Internal tools built exactly to your workflow",
      "Replace spreadsheet chaos with purpose-built software",
    ],
  },
  {
    emoji: "📈",
    title: "Trading Bots",
    description:
      "Algorithmic trading systems with smart entry/exit logic, live monitoring dashboards and full performance analytics.",
    bullets: [
      "Automated strategies on MT5, MT4 or custom broker APIs",
      "Multi-timeframe analysis with risk management built-in",
      "Real-time performance dashboard and trade logging",
    ],
  },
];

const WHY = [
  { icon: "⚡", label: "Fast Delivery", desc: "Most projects launch in 4–8 weeks, not months." },
  { icon: "⭐", label: "5.0 Client Rating", desc: "Every client we've worked with rates us 5 stars." },
  { icon: "🔧", label: "100% Custom-Built", desc: "No templates. Built from scratch for your exact needs." },
  { icon: "📍", label: "Toronto-Based", desc: "Local team, easy to reach, aligned on your timezone." },
];

export default function BrochurePage() {
  const [printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 100);
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm;
          }
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; }
          .brochure-page { box-shadow: none !important; }
          /* Hide root-layout elements (aurora, scroll progress, cookie banner) */
          body > *:not(#brochure-root) { display: none !important; }
        }
        @media screen {
          .brochure-page { max-width: 794px; margin: 0 auto; box-shadow: 0 4px 40px rgba(0,0,0,0.18); }
        }
      `}</style>

      {/* Print/Download button — screen only */}
      <div
        className="no-print sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: "#0f172a", borderBottom: "1px solid #1e293b" }}
      >
        <span style={{ color: "#94a3b8", fontSize: 13 }}>
          BeberBuilds — Service Brochure
        </span>
        <button
          onClick={handlePrint}
          disabled={printing}
          style={{
            background: "#7C3AED",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            opacity: printing ? 0.7 : 1,
          }}
        >
          {printing ? "Opening print dialog…" : "Save as PDF"}
        </button>
      </div>

      {/* ── BROCHURE CONTENT ── */}
      <div id="brochure-root" style={{ paddingBottom: 40 }}>
      <div
        className="brochure-page"
        style={{ background: "#fff", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
      >
        {/* ── HEADER ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #4c1d95 0%, #7C3AED 60%, #8b5cf6 100%)",
            padding: "28px 32px 24px",
            color: "#fff",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                {/* Logo wordmark */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 800,
                    letterSpacing: -1,
                  }}
                >
                  B
                </div>
                <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>
                  Beber<span style={{ opacity: 0.7 }}>Builds</span>
                </span>
              </div>
              <h1 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: -0.5 }}>
                We Build AI-Powered Software
                <br />
                <span style={{ opacity: 0.85 }}>That Grows Your Business</span>
              </h1>
              <p style={{ fontSize: 12.5, opacity: 0.75, marginTop: 10, maxWidth: 420, lineHeight: 1.55 }}>
                We partner with startups and growing businesses to ship intelligent software —
                from AI automation and custom SaaS platforms to trading bots and analytics dashboards.
              </p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 16 }}>
              <div style={{ fontSize: 11, opacity: 0.65, lineHeight: 2 }}>
                <div>🌐 beberbuilds.com</div>
                <div>✉️ hello@beberbuilds.com</div>
                <div>📞 +1 (647) 616-5995</div>
                <div>📍 Toronto, Ontario</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SERVICES ── */}
        <div style={{ padding: "22px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div
              style={{
                width: 3,
                height: 18,
                borderRadius: 2,
                background: "#7C3AED",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#7C3AED",
              }}
            >
              What We Build
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
            }}
          >
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                style={{
                  border: "1px solid #ede9fe",
                  borderRadius: 10,
                  padding: "14px 14px 14px",
                  background: "#faf9ff",
                  pageBreakInside: "avoid",
                }}
              >
                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      flexShrink: 0,
                    }}
                  >
                    {svc.emoji}
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1e1b4b",
                      letterSpacing: -0.2,
                    }}
                  >
                    {svc.title}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: 11,
                    color: "#4b5563",
                    lineHeight: 1.55,
                    margin: "0 0 8px 0",
                  }}
                >
                  {svc.description}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {svc.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 10.5,
                        color: "#374151",
                        lineHeight: 1.5,
                        paddingLeft: 12,
                        position: "relative",
                        marginBottom: 3,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.4em",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#7C3AED",
                          display: "block",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY BEBERBUILDS ── */}
        <div
          style={{
            margin: "0 32px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
            padding: "16px 20px",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 3, height: 14, borderRadius: 2, background: "#7C3AED" }} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#7C3AED",
              }}
            >
              Why BeberBuilds
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
            {WHY.map((w) => (
              <div key={w.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, marginBottom: 5 }}>{w.icon}</div>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: "#1e1b4b", marginBottom: 3 }}>
                  {w.label}
                </div>
                <div style={{ fontSize: 10, color: "#6b7280", lineHeight: 1.45 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW WE WORK ── */}
        <div style={{ padding: "0 32px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 3, height: 14, borderRadius: 2, background: "#7C3AED" }} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#7C3AED",
              }}
            >
              How We Work
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
            {[
              { step: "01", title: "Discovery Call", desc: "We learn your goals, audience and requirements in a free 30-min call." },
              { step: "02", title: "Plan & Scope", desc: "We map the solution, define milestones and agree on delivery timeline." },
              { step: "03", title: "Build & Iterate", desc: "We build fast with weekly updates and live previews for your feedback." },
              { step: "04", title: "Launch & Support", desc: "We deploy to production and stay on-hand for questions post-launch." },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "12px 12px",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#7C3AED",
                    letterSpacing: "0.05em",
                    marginBottom: 5,
                  }}
                >
                  STEP {s.step}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 4 }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 10.5, color: "#6b7280", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div
          style={{
            background: "#1e1b4b",
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: 15, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>
              Beber<span style={{ color: "#A78BFA" }}>Builds</span>
            </span>
            <p style={{ fontSize: 10.5, color: "#a5b4fc", margin: "3px 0 0", lineHeight: 1 }}>
              AI-Powered Software That Grows Businesses
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              fontSize: 11,
              color: "#c4b5fd",
            }}
          >
            <span>🌐 beberbuilds.com</span>
            <span>✉️ hello@beberbuilds.com</span>
            <span>📞 +1 (647) 616-5995</span>
          </div>
          <div
            style={{
              background: "#7C3AED",
              color: "#fff",
              fontSize: 10,
              fontWeight: 700,
              padding: "6px 14px",
              borderRadius: 6,
              letterSpacing: "0.05em",
            }}
          >
            BOOK A FREE CALL →
          </div>
        </div>
      </div>

      </div>
    </>
  );
}
