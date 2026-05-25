import Link from "next/link";
export const metadata = { title: "Cookie Policy | BeberBuilds" };
export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 pb-4">
        <Link href="/" className="text-[#A78BFA] hover:text-white text-sm transition-colors">← Back to Home</Link>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: May 25, 2026</p>
        <p className="text-white/60 leading-relaxed mb-4">
          This Cookie Policy explains how BeberBuilds uses cookies and similar tracking technologies
          on beberbuilds.com. Read this alongside our{" "}
          <Link href="/privacy-policy" className="text-[#A78BFA] hover:text-white underline">Privacy Policy</Link>.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">1. What Are Cookies?</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Cookies are small text files placed on your device when you visit a website. We also use
          similar technologies like web beacons, local storage, and session storage.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">2. Types of Cookies We Use</h2>
        <h3 className="text-base font-semibold mb-2 text-white/80">Essential Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">Strictly necessary for the website to function. Cannot be disabled.</p>
        <h3 className="text-base font-semibold mb-2 text-white/80">Analytics Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Help us understand how visitors use our site (e.g. Google Analytics, Vercel Analytics).
          Opt out via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Google Analytics Opt-out Add-on</a>.
        </p>
        <h3 className="text-base font-semibold mb-2 text-white/80">Marketing Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Used to display relevant ads. Only placed with your explicit consent. May include Meta Pixel,
          LinkedIn Insight Tag, and Google Ads.
        </p>
        <h3 className="text-base font-semibold mb-2 text-white/80">Functional Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">Remember your preferences to personalise your experience.</p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">3. Cookie Duration</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Session cookies</strong> expire when you close your browser.</li>
          <li><strong className="text-white/80">Persistent cookies</strong> remain for a set period (typically 12-24 months for analytics) until they expire or you delete them.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">4. How to Control Cookies</h2>
        <h3 className="text-base font-semibold mb-2 text-white/80">Browser Settings</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Microsoft Edge</a></li>
        </ul>
        <h3 className="text-base font-semibold mb-2 text-white/80">Opt-Out Tools</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Digital Advertising Alliance of Canada</a></li>
          <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Network Advertising Initiative Opt-Out</a></li>
          <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Google Ads Settings</a></li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Your Privacy Rights</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Where cookies involve processing of personal data, our{" "}
          <Link href="/privacy-policy" className="text-[#A78BFA] hover:text-white underline">Privacy Policy</Link>{" "}
          applies. We comply with Canada's PIPEDA, CASL, and where applicable the EU/UK GDPR.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. Changes to This Policy</h2>
        <p className="text-white/60 leading-relaxed mb-4">We may update this policy. Changes will be posted here with an updated "Last updated" date.</p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Contact Us</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-white/60 space-y-1">
          <p className="font-semibold text-white/80">BeberBuilds</p>
          <p>Toronto, Ontario, Canada</p>
          <p>Email: <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline">hello@beberbuilds.com</a></p>
          <p>Phone: <a href="tel:+16476165995" className="text-[#A78BFA] hover:text-white underline">+1 (647) 616-5995</a></p>
        </div>
      </div>
    </div>
  );
}
