import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import AuroraBackground from "@/components/aurora-background";
import ScrollProgress from "@/components/scroll-progress";
import WhatsAppButton from "@/components/whatsapp-button";
import CustomCursor from "@/components/custom-cursor";
import { Analytics } from "@vercel/analytics/react";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050816",
};

export const metadata: Metadata = {
  title: "BeberBuilds — AI-Powered Software That Grows Businesses",
  description: "Custom AI solutions, SaaS platforms, automation agents and web apps. Based in Toronto, serving clients globally. Book a free discovery call.",
  keywords: ["AI", "automation", "SaaS", "web development", "chatbots", "software", "Toronto", "Canada", "BeberBuilds"],
  authors: [{ name: "Beberg Khan" }],
  creator: "Beberg Khan",
  openGraph: {
    title: "BeberBuilds — AI-Powered Software That Grows Businesses",
    description: "Custom AI solutions, SaaS platforms, automation agents and web apps. Based in Toronto, serving clients globally.",
    siteName: "BeberBuilds",
    type: "website",
    url: "https://beberbuilds.com",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeberBuilds — AI-Powered Software That Grows Businesses",
    description: "Custom AI solutions, SaaS, automation agents and web apps — Toronto-based, serving clients globally.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://beberbuilds.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} dark h-full antialiased`}
      style={{ fontFamily: "var(--font-space-grotesk, system-ui, sans-serif)" }}
    >
      <body className="min-h-full bg-[#050816] text-white flex flex-col noise-bg" suppressHydrationWarning>
        <AuroraBackground />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BeberBuilds",
              description: "AI-powered software development studio — custom AI solutions, SaaS platforms, automation agents and web applications.",
              url: "https://beberbuilds.com",
              telephone: "+16476165995",
              email: "hello@beberbuilds.com",
              founder: { "@type": "Person", name: "Beberg Khan" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "Ontario",
                addressCountry: "CA",
              },
              areaServed: "Worldwide",
              serviceType: ["AI Development", "SaaS Development", "Web Development", "AI Chatbots", "Automation"],
              priceRange: "$$",
            }),
          }}
        />
        <CustomCursor />
        <ScrollProgress />
        {children}
        <CookieBanner />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
