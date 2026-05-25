import Link from "next/link";
export const metadata = { title: "Privacy Policy | BeberBuilds" };
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 pb-4">
        <Link href="/" className="text-[#A78BFA] hover:text-white text-sm transition-colors">← Back to Home</Link>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: May 25, 2026</p>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds ("we," "us," or "our") is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your personal information when you visit
          beberbuilds.com or engage our services.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">1. Information We Collect</h2>
        <h3 className="text-base font-semibold mb-2 text-white/80">a) Information You Provide</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Name, email, phone number, and company name when you contact us.</li>
          <li>Project details and requirements shared during consultations or onboarding.</li>
          <li>Payment information (processed by our payment processors; we do not store card details).</li>
          <li>Communications including emails, messages, and feedback.</li>
        </ul>
        <h3 className="text-base font-semibold mb-2 text-white/80">b) Information Collected Automatically</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>IP address, browser type, operating system, and device identifiers.</li>
          <li>Pages visited, time on page, referral URLs, and clickstream data.</li>
          <li>Cookie and tracking data — see our <Link href="/cookie-policy" className="text-[#A78BFA] underline">Cookie Policy</Link>.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Respond to inquiries, provide quotes, and deliver our services.</li>
          <li>Manage client relationships, deliverables, and invoicing.</li>
          <li>Send administrative communications such as project updates and receipts.</li>
          <li>Send marketing communications only where you have consented, always with an opt-out option.</li>
          <li>Improve our website and services through analytics and feedback.</li>
          <li>Comply with legal obligations and prevent fraud.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">3. How We Share Your Information</h2>
        <p className="text-white/60 leading-relaxed mb-2">We do not sell your personal information. We may share it with:</p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Service Providers:</strong> Trusted vendors contractually bound to protect your data.</li>
          <li><strong className="text-white/80">Professional Advisors:</strong> Lawyers and accountants where legally necessary.</li>
          <li><strong className="text-white/80">Legal Authorities:</strong> When required by law or court order.</li>
          <li><strong className="text-white/80">Business Transfers:</strong> In the event of a merger or acquisition, with confidentiality protections.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">4. International Data Transfers</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds is based in Toronto, Ontario, Canada. Your information may be processed in Canada
          or other countries where our service providers operate. We ensure appropriate safeguards under
          PIPEDA and, where applicable, the GDPR.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Data Security</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We use industry-standard security measures including TLS/SSL encryption and secure hosting.
          In the event of a breach, we will notify affected individuals as required by law.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. Data Retention</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Client project data is kept for a minimum of seven (7) years per Canadian tax law. Marketing
          data is removed within 30 days of opting out. You may request deletion at any time, subject
          to legal retention obligations.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Your Rights</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Access:</strong> Request a copy of your personal information.</li>
          <li><strong className="text-white/80">Correction:</strong> Request that we correct inaccurate data.</li>
          <li><strong className="text-white/80">Deletion:</strong> Request erasure, subject to legal obligations.</li>
          <li><strong className="text-white/80">Withdraw Consent:</strong> At any time, without affecting prior processing.</li>
          <li><strong className="text-white/80">Opt Out of Marketing:</strong> Unsubscribe at any time.</li>
          <li><strong className="text-white/80">Complaint:</strong> Contact the Office of the Privacy Commissioner of Canada.</li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          Email <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline">hello@beberbuilds.com</a> to exercise any right. We respond within 30 days.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Children's Privacy</h2>
        <p className="text-white/60 leading-relaxed mb-4">Our services are not directed to individuals under 18. We do not knowingly collect data from children.</p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">9. Changes to This Policy</h2>
        <p className="text-white/60 leading-relaxed mb-4">We may update this policy from time to time. Material changes will be reflected in the "Last updated" date above.</p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">10. Contact Us</h2>
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
