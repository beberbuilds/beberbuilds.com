import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import AuroraBackground from "@/components/aurora-background";
import ScrollProgress from "@/components/scroll-progress";

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
  description:
    "We help startups and brands automate, scale and succeed with custom AI solutions, web applications and intelligent systems.",
  keywords: ["AI", "automation", "SaaS", "web development", "chatbots", "software"],
  openGraph: {
    title: "BeberBuilds — AI-Powered Software",
    description: "Custom AI solutions, web applications and intelligent systems.",
    siteName: "BeberBuilds",
    type: "website",
  },
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
        <ScrollProgress />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
