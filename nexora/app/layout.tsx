import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050816",
};

export const metadata: Metadata = {
  title: "Beber Builds — AI-Powered Software That Grows Businesses",
  description:
    "We help startups and brands automate, scale and succeed with custom AI solutions, web applications and intelligent systems.",
  keywords: ["AI", "automation", "SaaS", "web development", "chatbots", "software"],
  openGraph: {
    title: "Beber Builds — AI-Powered Software",
    description: "Custom AI solutions, web applications and intelligent systems.",
    siteName: "Beber Builds",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >


      <body className="min-h-full bg-[#050816] text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
