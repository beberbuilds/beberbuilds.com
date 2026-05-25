# BeberBuilds Full Site Update — run from C:\Users\Beberg\beberbuilds
Set-Location "C:\Users\Beberg\beberbuilds"

# ── 1. lib/data.ts ───────────────────────────────────────────────────────────
$d = Get-Content "lib\data.ts" -Encoding UTF8
$d = $d | Where-Object { $_ -notmatch '"Blog".*"#blog"' } |
          Where-Object { $_ -notmatch '"Refund Policy"' }
$c = $d -join "`n"
$c = $c.Replace('+92 300 1234567', '+1 (647) 616-5995')
$c = $c.Replace("Worldwide $([char]0x2014) Remote", 'Toronto, Canada')
$c = $c.Replace('"Privacy Policy", href: "#"',   '"Privacy Policy", href: "/privacy-policy"')
$c = $c.Replace('"Terms of Service", href: "#"', '"Terms of Service", href: "/terms-of-service"')
$c = $c.Replace('"Cookie Policy", href: "#"',    '"Cookie Policy", href: "/cookie-policy"')
[IO.File]::WriteAllText((Join-Path (pwd) "lib\data.ts"), $c, [Text.Encoding]::UTF8)
Write-Host "✓ lib/data.ts"

# ── 2. components/footer.tsx ─────────────────────────────────────────────────
$c = Get-Content "components\footer.tsx" -Raw -Encoding UTF8
$c = $c.Replace('+1 (234) 567-890', '+1 (647) 616-5995')
$c = $c.Replace('tel:+1234567890', 'tel:+16476165995')
$c = $c.Replace('San Francisco, CA', 'Toronto, Canada')
$t = 'href="#"'
$i = $c.IndexOf($t); $c = $c.Substring(0,$i) + 'href="/privacy-policy"'   + $c.Substring($i+$t.Length)
$i = $c.IndexOf($t); $c = $c.Substring(0,$i) + 'href="/terms-of-service"' + $c.Substring($i+$t.Length)
[IO.File]::WriteAllText((Join-Path (pwd) "components\footer.tsx"), $c, [Text.Encoding]::UTF8)
Write-Host "✓ components/footer.tsx"

# ── 3. BeberBuilds branding (navbar, about, layout) ──────────────────────────
foreach ($f in @("components\navbar.tsx","components\about.tsx","app\layout.tsx")) {
    $c = (Get-Content $f -Raw -Encoding UTF8).Replace('Beber Builds', 'BeberBuilds')
    [IO.File]::WriteAllText((Join-Path (pwd) $f), $c, [Text.Encoding]::UTF8)
    Write-Host "✓ $f"
}

# ── 4. components/cta-banner.tsx (remove WhatsApp) ───────────────────────────
@'
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { Button } from "@/components/ui/button";
import CalendlyModal from "@/components/calendly-modal";

export default function CTABanner() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <>
      <SectionWrapper className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] sm:rounded-3xl overflow-hidden p-8 sm:p-16 lg:p-20 text-center"
        >
          <div className="absolute inset-0 bg-[#7C3AED]/[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#7C3AED]/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[250px] sm:h-[300px] bg-[#7C3AED]/[0.15] rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s Build the{" "}
              <span className="text-gradient">Future Together</span>
            </h2>
            <p className="text-white/45 max-w-lg mx-auto text-[15px] sm:text-base mb-8">
              Ready to transform your business with AI? Let&apos;s discuss your project
              and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => setCalendlyOpen(true)}
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl px-6 sm:px-7 py-6 sm:py-6 text-[15px] sm:text-sm font-medium transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] group w-full sm:w-auto tap-area"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      </SectionWrapper>
      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </>
  );
}
'@ | Set-Content "components\cta-banner.tsx" -Encoding UTF8
Write-Host "✓ components/cta-banner.tsx"

# ── 5. Create legal directories ───────────────────────────────────────────────
New-Item -ItemType Directory -Force "app\privacy-policy","app\terms-of-service","app\cookie-policy" | Out-Null

# ── 6. app/privacy-policy/page.tsx ───────────────────────────────────────────
@'
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
          BeberBuilds (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy
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
          <li>Send marketing communications only where you have given consent, always with an opt-out option.</li>
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
          We use industry-standard security measures including TLS/SSL encryption, access controls, and
          secure hosting. No internet transmission is 100% secure; in the event of a breach we will
          notify affected individuals as required by law.
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

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Children&apos;s Privacy</h2>
        <p className="text-white/60 leading-relaxed mb-4">Our services are not directed to individuals under 18. We do not knowingly collect data from children.</p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">9. Changes to This Policy</h2>
        <p className="text-white/60 leading-relaxed mb-4">We may update this policy from time to time. Material changes will be reflected in the &quot;Last updated&quot; date above.</p>

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
'@ | Set-Content "app\privacy-policy\page.tsx" -Encoding UTF8
Write-Host "✓ app/privacy-policy/page.tsx"

# ── 7. app/terms-of-service/page.tsx ─────────────────────────────────────────
@'
import Link from "next/link";

export const metadata = { title: "Terms of Service | BeberBuilds" };

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 pb-4">
        <Link href="/" className="text-[#A78BFA] hover:text-white text-sm transition-colors">← Back to Home</Link>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: May 25, 2026</p>
        <p className="text-white/60 leading-relaxed mb-4">
          These Terms of Service govern your use of beberbuilds.com and the services provided by
          BeberBuilds, a software and AI development agency in Toronto, Ontario, Canada. By engaging
          us you agree to these Terms and our{" "}
          <Link href="/privacy-policy" className="text-[#A78BFA] hover:text-white underline">Privacy Policy</Link>.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">1. Services</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds provides custom software development, AI integration, web development, automation
          systems, and technology consulting. Scope, deliverables, timelines, and fees are defined in a
          Statement of Work (&quot;SOW&quot;) or project proposal issued before commencement. We reserve the
          right to decline any project, engage subcontractors, and adjust timelines due to client delays
          or scope changes.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">2. Payment Terms</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>A non-refundable deposit of <strong className="text-white/80">50%</strong> of the total project fee is due before work begins.</li>
          <li>The remaining balance is due upon project completion, before final delivery.</li>
          <li>Retainer invoices are issued at the start of each billing period and due within <strong className="text-white/80">14 days</strong>.</li>
          <li>All fees are in Canadian Dollars (CAD) unless otherwise agreed in writing.</li>
          <li>Overdue invoices accrue interest at <strong className="text-white/80">1.5% per month (18% per annum)</strong>.</li>
          <li>You are responsible for all applicable taxes (HST/GST etc.) in your jurisdiction.</li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          If a project is cancelled after commencement, the deposit is non-refundable. Work completed
          beyond the deposit will be invoiced at our standard rate. Completed deliverables are released
          upon settlement of any outstanding balance.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">3. Client Responsibilities</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Provide accurate information, materials, and access credentials in a timely manner.</li>
          <li>Designate a primary point of contact with authority to make decisions.</li>
          <li>Respond to feedback requests within five (5) business days.</li>
          <li>Ensure any materials you provide do not infringe third-party intellectual property rights.</li>
          <li>Not use our services for any unlawful, harmful, or fraudulent purpose.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">4. Intellectual Property</h2>
        <h3 className="text-base font-semibold mb-2 text-white/80">Client Ownership</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Upon receipt of full and final payment, BeberBuilds assigns you all rights, title, and interest
          in the custom deliverables created specifically for your project.
        </p>
        <h3 className="text-base font-semibold mb-2 text-white/80">BeberBuilds Retained Rights</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Portfolio Rights:</strong> We may showcase your project in our portfolio and marketing materials. We will seek your consent before featuring confidential business details.</li>
          <li><strong className="text-white/80">Pre-existing IP:</strong> We retain all rights to our frameworks, libraries, and tools. You receive a perpetual, royalty-free licence to use them as part of your deliverables.</li>
          <li><strong className="text-white/80">Open Source:</strong> Any open source components remain subject to their original licences.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Confidentiality</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Both parties agree to keep confidential any non-public information disclosed during the
          engagement and not to use it for any purpose other than performing or receiving the services.
          If a separate NDA has been signed, it supplements and takes precedence over this section.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. Warranties</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds warrants that services will be performed professionally and that final deliverables,
          to our knowledge, will not infringe third-party IP at delivery. We will address material defects
          reported within 30 days at no additional charge. Beyond this, services are provided &quot;as is.&quot;
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Limitation of Liability</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Our total liability shall not exceed fees paid by you in the three (3) months preceding the claim.</li>
          <li>We are not liable for indirect, consequential, or punitive damages, including loss of profits or data.</li>
          <li>We are not liable for delays caused by factors outside our control, including your failure to provide materials.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Termination</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Either party may terminate by providing 14 days&apos; written notice. Upon termination you will pay
          for all work completed; the deposit is non-refundable. Completed work is delivered upon
          settlement of any outstanding balance.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">9. Governing Law</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          These Terms are governed by the laws of Ontario, Canada. Disputes unresolved within 30 days of
          written notice will go to binding arbitration in Toronto under the Arbitration Act, 1991
          (Ontario). Either party may seek urgent injunctive relief from the Ontario courts.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">10. General</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Entire Agreement:</strong> These Terms plus any applicable SOW constitute the full agreement.</li>
          <li><strong className="text-white/80">Severability:</strong> Invalid provisions do not affect the remainder of the Terms.</li>
          <li><strong className="text-white/80">Independent Contractors:</strong> No partnership or employment relationship is created.</li>
          <li><strong className="text-white/80">Notices:</strong> Legal notices must be sent to <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] underline">hello@beberbuilds.com</a>.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">11. Contact Us</h2>
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
'@ | Set-Content "app\terms-of-service\page.tsx" -Encoding UTF8
Write-Host "✓ app/terms-of-service/page.tsx"

# ── 8. app/cookie-policy/page.tsx ────────────────────────────────────────────
@'
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
          similar technologies like web beacons, local storage, and session storage — all referred to
          as &quot;cookies&quot; in this policy.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">2. Types of Cookies We Use</h2>
        <h3 className="text-base font-semibold mb-2 text-white/80">Essential Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">Strictly necessary for the website to function. Cannot be disabled and do not require your consent.</p>
        <h3 className="text-base font-semibold mb-2 text-white/80">Analytics Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Help us understand how visitors use our site (e.g. Google Analytics, Vercel Analytics) using
          aggregated, anonymized data. Opt out via the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">
            Google Analytics Opt-out Add-on
          </a>.
        </p>
        <h3 className="text-base font-semibold mb-2 text-white/80">Marketing Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Used to display relevant ads and measure campaign performance. Only placed with your explicit
          consent. May include Meta Pixel, LinkedIn Insight Tag, and Google Ads.
        </p>
        <h3 className="text-base font-semibold mb-2 text-white/80">Functional Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">Remember preferences to personalise your experience. Consent obtained where required by law.</p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">3. Cookie Duration</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Session cookies</strong> — expire when you close your browser.</li>
          <li><strong className="text-white/80">Persistent cookies</strong> — remain for a set period (typically 12–24 months for analytics) until they expire or you delete them.</li>
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
          <li><a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Digital Advertising Alliance of Canada — YourAdChoices</a></li>
          <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Network Advertising Initiative Opt-Out</a></li>
          <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline">Google Ads Settings</a></li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Your Privacy Rights</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Where cookies involve processing of personal data, our{" "}
          <Link href="/privacy-policy" className="text-[#A78BFA] hover:text-white underline">Privacy Policy</Link>{" "}
          applies. We comply with Canada&apos;s PIPEDA, CASL, and — where applicable — the EU/UK GDPR.
          Withdraw consent at any time via browser settings or by contacting us.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. Changes to This Policy</h2>
        <p className="text-white/60 leading-relaxed mb-4">We may update this policy from time to time. Changes will be posted here with an updated &quot;Last updated&quot; date.</p>

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
'@ | Set-Content "app\cookie-policy\page.tsx" -Encoding UTF8
Write-Host "✓ app/cookie-policy/page.tsx"

Write-Host "`n✅ All files updated. Now run the git commands below."