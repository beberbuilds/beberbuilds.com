/**
 * fixup.js — run with: node fixup.js
 * Applies final BeberBuilds.com corrections on top of the existing master push.
 * - Footer copyright: "Beber Builds" → "BeberBuilds"
 * - Testimonial quote: "Beber Builds" → "BeberBuilds"
 * - Replaces legal pages with complete, polished versions
 * - Removes accidentally committed temp scripts
 */

const fs = require("fs");
const path = require("path");

/* ── helpers ── */
function patch(file, from, to) {
  const full = path.join(__dirname, file);
  const src = fs.readFileSync(full, "utf8");
  if (!src.includes(from)) {
    console.log(`  ⚠  "${from}" not found in ${file} — skipping`);
    return;
  }
  fs.writeFileSync(full, src.replace(from, to), "utf8");
  console.log(`  ✓  patched ${file}`);
}

function write(file, content) {
  const full = path.join(__dirname, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf8");
  console.log(`  ✓  wrote   ${file}`);
}

function remove(file) {
  const full = path.join(__dirname, file);
  if (fs.existsSync(full)) {
    fs.unlinkSync(full);
    console.log(`  ✓  removed ${file}`);
  }
}

/* ════════════════════════════════════════════════════
   1.  Simple text patches
════════════════════════════════════════════════════ */
console.log("\n▸ Patching text...");

patch(
  "components/footer.tsx",
  "&copy; {new Date().getFullYear()} Beber Builds. All rights reserved.",
  "&copy; {new Date().getFullYear()} BeberBuilds. All rights reserved."
);

patch(
  "lib/data.ts",
  '"Beber Builds transformed our entire workflow. Their AI automation saved us 40+ hours per week. The team is incredibly talented and responsive."',
  '"BeberBuilds transformed our entire workflow. Their AI automation saved us 40+ hours per week. The team is incredibly talented and responsive."'
);

/* ════════════════════════════════════════════════════
   2.  Complete Privacy Policy page
════════════════════════════════════════════════════ */
console.log("\n▸ Writing legal pages...");

write("app/privacy-policy/page.tsx", `import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | BeberBuilds",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Back button */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 pb-4">
        <Link href="/" className="text-[#A78BFA] hover:text-white text-sm transition-colors">
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: May 25, 2026</p>

        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your personal information when
          you visit our website at beberbuilds.com or engage our services. By accessing our website
          or using our services, you agree to the practices described in this policy. If you do not
          agree, please discontinue use of our website and services.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">1. Information We Collect</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We collect information in the following categories:
        </p>

        <h3 className="text-base font-semibold mb-2 text-white/80">a) Information You Provide Directly</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Name, email address, phone number, and company name when you contact us or submit an inquiry form.</li>
          <li>Project details, requirements, and any other content you share during consultations or onboarding.</li>
          <li>Payment information (processed securely through our payment processors; we do not store full card details).</li>
          <li>Communications, including emails, messages, and any feedback you provide.</li>
        </ul>

        <h3 className="text-base font-semibold mb-2 text-white/80">b) Information Collected Automatically</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>IP address, browser type, operating system, and device identifiers.</li>
          <li>Pages visited, time spent on pages, referral URLs, and clickstream data.</li>
          <li>Cookie and tracking technology data (see our Cookie Policy for details).</li>
        </ul>

        <h3 className="text-base font-semibold mb-2 text-white/80">c) Information from Third Parties</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Analytics providers (e.g., Google Analytics) may share aggregated insights about how users interact with our site.</li>
          <li>If you contact us via LinkedIn or social media, we may receive your public profile information.</li>
        </ul>

        {/* 2. How We Use Your Information */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">2. How We Use Your Information</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Respond to inquiries, provide quotes, and deliver the services you request.</li>
          <li>Manage client relationships, project deliverables, and invoicing.</li>
          <li>Send administrative communications such as project updates, receipts, and policy changes.</li>
          <li>Send marketing communications about our services, case studies, and promotions — only where you have given consent or where permitted by law, and always with an opt-out mechanism.</li>
          <li>Improve our website, services, and user experience through analytics and feedback.</li>
          <li>Comply with legal obligations, prevent fraud, and enforce our agreements.</li>
          <li>Protect the security and integrity of our systems and services.</li>
        </ul>

        <p className="text-white/60 leading-relaxed mb-4">
          We rely on the following legal bases under applicable privacy law (including Canada&apos;s PIPEDA and, where applicable, the EU/UK GDPR): your consent, the performance of a contract with you, compliance with a legal obligation, and our legitimate business interests where those interests do not override your rights.
        </p>

        {/* 3. Cookies and Tracking Technologies */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">3. Cookies and Tracking Technologies</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We use cookies and similar tracking technologies to enhance your experience on our website.
          Cookies are small text files placed on your device that help us understand how you use our
          site and remember your preferences. You can control cookie settings through your browser or
          our cookie consent banner. Disabling certain cookies may limit some functionality. For full
          details, please review our{" "}
          <Link href="/cookie-policy" className="text-[#A78BFA] hover:text-white underline transition-colors">
            Cookie Policy
          </Link>
          .
        </p>

        {/* 4. How We Share Your Information */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">4. How We Share Your Information</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We do not sell your personal information. We may share it with:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            <strong className="text-white/80">Service Providers:</strong> Trusted third-party vendors who assist us in operating our website and delivering services, such as email platforms, payment processors, cloud hosting providers, and analytics tools. These parties are contractually bound to protect your data and use it only as directed by us.
          </li>
          <li>
            <strong className="text-white/80">Professional Advisors:</strong> Lawyers, accountants, and auditors, where necessary for legal or financial compliance.
          </li>
          <li>
            <strong className="text-white/80">Legal Authorities:</strong> Government bodies or law enforcement when required by law, court order, or to protect the rights, property, or safety of BeberBuilds, our clients, or others.
          </li>
          <li>
            <strong className="text-white/80">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to confidentiality protections.
          </li>
        </ul>

        {/* 5. Third-Party Services */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Third-Party Services</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Our website may contain links to third-party websites or integrate third-party tools such
          as Google Analytics, social media widgets, or embedded content. These third parties operate
          under their own privacy policies, and we are not responsible for their data practices. We
          encourage you to review the privacy policies of any third-party services you interact with.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          Where we use AI-powered tools or large language models to assist in delivering our services,
          we take reasonable steps to ensure that confidential client information is not unnecessarily
          shared with those systems. Clients are encouraged to discuss any data-sensitivity concerns
          prior to project commencement.
        </p>

        {/* 6. International Data Transfers */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. International Data Transfers</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds is based in Toronto, Ontario, Canada. If you are located outside Canada,
          your information may be transferred to and processed in Canada or other countries where
          our service providers operate, including the United States. We take steps to ensure that
          any cross-border transfers are subject to appropriate safeguards in accordance with
          applicable law, including PIPEDA and, where relevant, the GDPR&apos;s standard contractual
          clauses or equivalent mechanisms.
        </p>

        {/* 7. Data Security */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Data Security</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We implement industry-standard technical and organizational security measures to protect
          your personal information against unauthorized access, disclosure, alteration, and
          destruction. These measures include encrypted data transmission (TLS/SSL), access controls,
          secure hosting infrastructure, and regular security reviews.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          However, no method of transmission over the internet or electronic storage is 100% secure.
          While we strive to use commercially acceptable means to protect your data, we cannot
          guarantee absolute security. In the event of a data breach that creates a real risk of
          significant harm, we will notify affected individuals and relevant authorities as required
          by applicable law.
        </p>

        {/* 8. Data Retention */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Data Retention</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We retain personal information only for as long as necessary to fulfil the purposes for
          which it was collected, including to satisfy legal, accounting, or reporting requirements.
          Client project data is typically retained for a minimum of seven (7) years to comply with
          Canadian tax and business record requirements. Marketing-related data is retained until
          you opt out, after which it is removed from active mailing lists within 30 days. You may
          request deletion of your data at any time, subject to our legal retention obligations.
        </p>

        {/* 9. Your Rights */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">9. Your Rights</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Depending on your jurisdiction, you may have the following rights regarding your personal
          information:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Access:</strong> Request a copy of the personal information we hold about you.</li>
          <li><strong className="text-white/80">Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
          <li><strong className="text-white/80">Deletion:</strong> Request erasure of your personal information, subject to legal retention obligations.</li>
          <li><strong className="text-white/80">Withdraw Consent:</strong> Withdraw consent for processing activities based on consent, at any time, without affecting the lawfulness of processing before withdrawal.</li>
          <li><strong className="text-white/80">Opt Out of Marketing:</strong> Unsubscribe from marketing communications at any time via the unsubscribe link in any email or by contacting us directly.</li>
          <li><strong className="text-white/80">Data Portability:</strong> Where applicable under GDPR, request that your data be provided in a portable format.</li>
          <li><strong className="text-white/80">Object or Restrict Processing:</strong> Object to or request restriction of certain types of processing.</li>
          <li><strong className="text-white/80">Complaint:</strong> Lodge a complaint with your relevant data protection authority. In Canada, this is the Office of the Privacy Commissioner of Canada (OPC).</li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline transition-colors">
            hello@beberbuilds.com
          </a>
          . We will respond within 30 days or as required by applicable law.
        </p>

        {/* 10. Children’s Privacy */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">10. Children&apos;s Privacy</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Our website and services are not directed to individuals under the age of 18. We do not
          knowingly collect personal information from children. If you believe we have inadvertently
          collected data from a minor, please contact us immediately and we will take steps to delete
          that information.
        </p>

        {/* 11. Changes to This Policy */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">11. Changes to This Privacy Policy</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, legal requirements, or for other operational reasons. When we make material
          changes, we will update the &quot;Last updated&quot; date at the top of this page and, where
          appropriate, notify you by email or a notice on our website. Your continued use of our
          website or services after the effective date constitutes acceptance of the updated policy.
        </p>

        {/* 12. Contact Us */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">12. Contact Us</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy or the
          handling of your personal information, please contact us:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-white/60 space-y-1">
          <p className="font-semibold text-white/80">BeberBuilds</p>
          <p>Toronto, Ontario, Canada</p>
          <p>
            Email:{" "}
            <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline transition-colors">
              hello@beberbuilds.com
            </a>
          </p>
          <p>Website: beberbuilds.com</p>
        </div>
      </div>
    </div>
  );
}
`);

/* ════════════════════════════════════════════════════
   3.  Complete Cookie Policy page
════════════════════════════════════════════════════ */

write("app/cookie-policy/page.tsx", `import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | BeberBuilds",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Back button */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 pb-4">
        <Link href="/" className="text-[#A78BFA] hover:text-white text-sm transition-colors">
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: May 25, 2026</p>

        <p className="text-white/60 leading-relaxed mb-4">
          This Cookie Policy explains how BeberBuilds (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
          tracking technologies on our website at beberbuilds.com. This policy should be read alongside
          our{" "}
          <Link href="/privacy-policy" className="text-[#A78BFA] hover:text-white underline transition-colors">
            Privacy Policy
          </Link>
          , which provides more information about how we handle personal information generally.
        </p>

        {/* 1. What Are Cookies */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">1. What Are Cookies?</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Cookies are small text files that are placed on your device (computer, smartphone, or tablet)
          when you visit a website. They are widely used to make websites work more efficiently, provide
          a better user experience, and give website owners information about how their site is used.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          In addition to traditional cookies, we may also use similar technologies such as:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            <strong className="text-white/80">Web beacons (pixel tags):</strong> Small transparent images embedded in web pages or emails that help us understand whether a page was loaded or an email was opened.
          </li>
          <li>
            <strong className="text-white/80">Local storage:</strong> A browser feature that allows websites to store data locally on your device, similar to cookies but with greater storage capacity.
          </li>
          <li>
            <strong className="text-white/80">Session storage:</strong> Temporary data stored in your browser only for the duration of your session, deleted when you close your browser tab.
          </li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          For simplicity, we refer to all these technologies collectively as &quot;cookies&quot; throughout this policy.
        </p>

        {/* 2. Types of Cookies We Use */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">2. Types of Cookies We Use</h2>

        <h3 className="text-base font-semibold mb-2 text-white/80">a) Essential Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          These cookies are strictly necessary for our website to function correctly. They cannot be
          disabled without significantly affecting the operation of the site. Essential cookies do not
          collect any personally identifiable information and do not require your consent.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
          <table className="w-full text-sm text-white/60">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left pb-2 text-white/80 font-semibold">Purpose</th>
                <th className="text-left pb-2 text-white/80 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Session management and security</td>
                <td className="py-2">Session</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Cookie consent preference storage</td>
                <td className="py-2">1 year</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Load balancing and server routing</td>
                <td className="py-2">Session</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold mb-2 text-white/80">b) Analytics Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          These cookies help us understand how visitors interact with our website by collecting and
          reporting information anonymously or in aggregated form. This data helps us improve our website
          structure, content, and performance. We use analytics cookies only where you have given consent
          (or where permitted under applicable law, such as when data is genuinely anonymized).
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
          <table className="w-full text-sm text-white/60">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left pb-2 text-white/80 font-semibold">Provider</th>
                <th className="text-left pb-2 text-white/80 font-semibold">Purpose</th>
                <th className="text-left pb-2 text-white/80 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Google Analytics</td>
                <td className="py-2 pr-4">Page views, session data, traffic sources, user behaviour</td>
                <td className="py-2">Up to 2 years</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Vercel Analytics</td>
                <td className="py-2 pr-4">Performance metrics, Core Web Vitals</td>
                <td className="py-2">Session / short-term</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-white/60 leading-relaxed mb-4">
          Analytics data collected through Google Analytics is processed in accordance with Google&apos;s
          own privacy policy. Where possible, we use IP anonymization features to reduce the
          identifiability of the data collected. You can opt out of Google Analytics tracking across all
          websites by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A78BFA] hover:text-white underline transition-colors"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>

        <h3 className="text-base font-semibold mb-2 text-white/80">c) Marketing and Advertising Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Marketing cookies are used to track visitors across websites to display relevant
          advertisements and measure the effectiveness of our marketing campaigns. These cookies may
          be set by us or by trusted third-party advertising partners. We only deploy marketing cookies
          where you have explicitly given consent.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
          <table className="w-full text-sm text-white/60">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left pb-2 text-white/80 font-semibold">Provider</th>
                <th className="text-left pb-2 text-white/80 font-semibold">Purpose</th>
                <th className="text-left pb-2 text-white/80 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Meta (Facebook) Pixel</td>
                <td className="py-2 pr-4">Ad targeting, conversion tracking, retargeting</td>
                <td className="py-2">Up to 180 days</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">LinkedIn Insight Tag</td>
                <td className="py-2 pr-4">B2B ad targeting, campaign measurement</td>
                <td className="py-2">Up to 1 year</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Google Ads</td>
                <td className="py-2 pr-4">Remarketing, conversion tracking</td>
                <td className="py-2">Up to 540 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-white/60 leading-relaxed mb-4">
          We may not have all of the above marketing tools active at all times. You can withdraw consent
          for marketing cookies at any time by adjusting your cookie preferences or using the opt-out
          mechanisms described in Section 4.
        </p>

        <h3 className="text-base font-semibold mb-2 text-white/80">d) Functional / Preference Cookies</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Functional cookies allow our website to remember choices you make — such as your preferred
          language, display settings, or whether you have dismissed certain notifications — to provide
          a more personalized experience. These are not strictly necessary for the site to work but
          enhance usability. We will seek your consent for these cookies where required by applicable law.
        </p>

        {/* 3. Cookie Duration */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">3. Cookie Duration</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Cookies can be either <strong className="text-white/80">session cookies</strong> or{" "}
          <strong className="text-white/80">persistent cookies</strong>:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            <strong className="text-white/80">Session cookies</strong> are temporary and expire automatically when you close your browser. They are used to maintain your session as you navigate between pages.
          </li>
          <li>
            <strong className="text-white/80">Persistent cookies</strong> remain on your device for a set period of time (or until you manually delete them). They are used to remember your preferences across visits and to provide analytics data over time.
          </li>
        </ul>

        {/* 4. How to Control Cookies */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">4. How to Control Cookies</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          You have several options to control or limit how cookies are used on your device:
        </p>

        <h3 className="text-base font-semibold mb-2 text-white/80">a) Cookie Consent Banner</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          When you first visit our website, we may present you with a cookie consent banner where you
          can accept or decline non-essential cookies. You can revisit and change your preferences at
          any time by contacting us at{" "}
          <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline transition-colors">
            hello@beberbuilds.com
          </a>
          .
        </p>

        <h3 className="text-base font-semibold mb-2 text-white/80">b) Browser Settings</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Most web browsers allow you to control cookies through their settings. Browser-specific instructions:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline transition-colors">Google Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline transition-colors">Mozilla Firefox</a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline transition-colors">Apple Safari</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline transition-colors">Microsoft Edge</a>
          </li>
        </ul>

        <h3 className="text-base font-semibold mb-2 text-white/80">c) Third-Party Opt-Out Tools</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            <a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline transition-colors">
              Digital Advertising Alliance of Canada (DAAC) — YourAdChoices
            </a>
          </li>
          <li>
            <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline transition-colors">
              Network Advertising Initiative (NAI) Opt-Out
            </a>
          </li>
          <li>
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline transition-colors">
              Google Ads Settings
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/adpreferences/ad_settings" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-white underline transition-colors">
              Meta Ad Preferences
            </a>
          </li>
        </ul>

        {/* 5. Do Not Track */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Do Not Track Signals</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Some browsers include a &quot;Do Not Track&quot; (DNT) feature. There is currently no universally
          agreed-upon standard for responding to DNT signals. At this time, our website does not alter
          its data collection practices in response to DNT signals; you can manage preferences using
          the methods in Section 4.
        </p>

        {/* 6. Cookies and Your Privacy */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. Cookies and Your Privacy Rights</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          The use of certain cookies may constitute the processing of personal data. Where this is the
          case, our{" "}
          <Link href="/privacy-policy" className="text-[#A78BFA] hover:text-white underline transition-colors">
            Privacy Policy
          </Link>{" "}
          applies, including your rights to access, correct, delete, or restrict processing of your data.
          Canadian residents are protected under PIPEDA. EU/UK residents are protected under the GDPR/UK GDPR.
          Our cookie practices also comply with Canada&apos;s Anti-Spam Legislation (CASL).
        </p>

        {/* 7. Changes to This Policy */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Changes to This Cookie Policy</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We may update this Cookie Policy from time to time to reflect changes in the cookies we use,
          applicable law, or our practices. When we make material changes, we will update the
          &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically.
        </p>

        {/* 8. Contact Us */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Contact Us</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          If you have any questions about this Cookie Policy, please contact us:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-white/60 space-y-1">
          <p className="font-semibold text-white/80">BeberBuilds</p>
          <p>Toronto, Ontario, Canada</p>
          <p>
            Email:{" "}
            <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline transition-colors">
              hello@beberbuilds.com
            </a>
          </p>
          <p>Website: beberbuilds.com</p>
        </div>
      </div>
    </div>
  );
}
`);

/* ════════════════════════════════════════════════════
   4.  Complete Terms of Service page
════════════════════════════════════════════════════ */

write("app/terms-of-service/page.tsx", `import Link from "next/link";

export const metadata = {
  title: "Terms of Service | BeberBuilds",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Back button */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 pb-4">
        <Link href="/" className="text-[#A78BFA] hover:text-white text-sm transition-colors">
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: May 25, 2026</p>

        <p className="text-white/60 leading-relaxed mb-4">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website at beberbuilds.com
          and the services provided by BeberBuilds (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a software and AI development
          agency operating in Toronto, Ontario, Canada. By accessing our website, engaging us for services,
          or entering into a project agreement with us, you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be
          bound by these Terms. If you do not agree, please do not use our website or services.
        </p>

        {/* 1. Acceptance of Terms */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">1. Acceptance of Terms</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          By engaging BeberBuilds — whether through our website inquiry form, email, a signed project
          proposal, or any other means — you confirm that you are at least 18 years of age, have the legal
          authority to enter into a binding agreement on behalf of yourself or your organization, and agree
          to these Terms and our{" "}
          <Link href="/privacy-policy" className="text-[#A78BFA] hover:text-white underline transition-colors">
            Privacy Policy
          </Link>
          . These Terms constitute the entire agreement between you and BeberBuilds with respect to the
          subject matter herein, unless a separate written contract has been executed, in which case that
          contract governs to the extent of any conflict.
        </p>

        {/* 2. Services */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">2. Services</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds provides custom software development, AI integration, web application development,
          automation systems, and related technology consulting services to clients worldwide. The specific
          scope, deliverables, timeline, and fees for each engagement are defined in a separate Statement
          of Work (&quot;SOW&quot;), proposal, or project agreement provided to you prior to project commencement.
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Decline any project request at our sole discretion without obligation to provide a reason.</li>
          <li>Engage subcontractors or independent specialists to assist in delivering services, while we remain responsible for the overall quality of the work delivered.</li>
          <li>Adjust timelines due to factors outside our control, including client delays in providing required materials, approvals, or feedback.</li>
          <li>Pause or terminate services if payment obligations are not met in accordance with Section 3.</li>
        </ul>

        {/* 3. Payment Terms */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">3. Payment Terms</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Unless otherwise agreed in writing, the following default terms apply:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>A non-refundable deposit of 50% of the total project fee is due prior to project commencement.</li>
          <li>The remaining balance is due upon project completion and prior to final delivery or deployment of deliverables.</li>
          <li>For ongoing retainer or maintenance arrangements, invoices are issued at the beginning of each billing period and are due within 14 days of the invoice date.</li>
          <li>All fees are quoted and payable in Canadian Dollars (CAD) unless otherwise stated in the proposal.</li>
          <li>Invoices not paid within 30 days of the due date will accrue interest at the rate of 1.5% per month (18% per annum), or the maximum rate permitted by applicable law, whichever is lower.</li>
          <li>You are responsible for all applicable taxes, duties, and levies in your jurisdiction. Where we are required to collect HST/GST or equivalent, it will be added to your invoice as a separate line item.</li>
        </ul>

        {/* 4. Client Responsibilities */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">4. Client Responsibilities</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Provide accurate, complete, and timely information, materials, content, and access credentials required to perform the services.</li>
          <li>Designate a primary point of contact with authority to make decisions and provide approvals on your behalf.</li>
          <li>Respond to requests for feedback, approvals, or clarification within five (5) business days.</li>
          <li>Ensure that any materials, content, branding assets, or third-party software you provide do not infringe upon the intellectual property rights of any third party.</li>
          <li>Not use our services for any unlawful, harmful, fraudulent, or abusive purpose.</li>
        </ul>

        {/* 5. Intellectual Property */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Intellectual Property</h2>

        <h3 className="text-base font-semibold mb-2 text-white/80">a) Client Ownership of Final Deliverables</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Upon receipt of full and final payment for a project, BeberBuilds assigns to you all rights, title,
          and interest in the custom work product created specifically for your project (&quot;Final Deliverables&quot;),
          including all copyrights therein. This assignment is effective only upon full settlement of all
          outstanding invoices.
        </p>

        <h3 className="text-base font-semibold mb-2 text-white/80">b) BeberBuilds Retained Rights</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            <strong className="text-white/80">Portfolio Rights:</strong> The right to display the Final Deliverables in our portfolio, website, case studies, and marketing materials. Where a project involves confidential information, we will seek your prior written consent before featuring specifics publicly.
          </li>
          <li>
            <strong className="text-white/80">Pre-existing IP:</strong> All ownership rights in our pre-existing methodologies, frameworks, libraries, code templates, tools, processes, and know-how. To the extent that BeberBuilds IP is incorporated into your Final Deliverables, we grant you a perpetual, royalty-free, non-exclusive licence to use it solely as part of those deliverables.
          </li>
          <li>
            <strong className="text-white/80">Open Source Components:</strong> Any open source software incorporated into the deliverables remains subject to its original licence terms.
          </li>
        </ul>

        {/* 6. Confidentiality */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. Confidentiality</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Each party agrees to keep confidential any non-public information disclosed by the other party
          in the course of the engagement and not to disclose it to third parties or use it for any purpose
          other than performing or receiving the services. If a separate NDA has been executed between the
          parties, that NDA supplements and takes precedence over this section.
        </p>

        {/* 7. Warranties */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Warranties and Representations</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds warrants that services will be performed in a professional and workmanlike manner
          consistent with industry standards and that Final Deliverables will not, to our knowledge,
          infringe any third-party intellectual property rights at the time of delivery. Except as
          expressly stated above, services and deliverables are provided &quot;as is.&quot; We will address
          material defects reported within 30 days of delivery at no additional charge.
        </p>

        {/* 8. Limitation of Liability */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Limitation of Liability</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          To the maximum extent permitted by applicable law:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            BeberBuilds&apos;s total cumulative liability for any claims shall not exceed the total fees paid
            by you to BeberBuilds in the three (3) months immediately preceding the event giving rise to the claim.
          </li>
          <li>
            In no event shall BeberBuilds be liable for any indirect, incidental, special, consequential,
            or punitive damages, including loss of profits, loss of revenue, loss of data, or business interruption.
          </li>
          <li>
            We are not liable for delays or failures caused by factors outside our reasonable control,
            including acts of God, government actions, internet outages, or third-party service failures.
          </li>
        </ul>

        {/* 9. Indemnification */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">9. Indemnification</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          You agree to indemnify and hold harmless BeberBuilds and its officers, employees, contractors,
          and agents from and against any claims, damages, losses, liabilities, costs, and expenses
          arising out of or related to: (a) your breach of these Terms; (b) your use of the deliverables
          in a manner not contemplated by these Terms; (c) your materials infringing a third party&apos;s
          rights; or (d) your violation of any applicable law or regulation.
        </p>

        {/* 10. Termination */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">10. Termination</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Either party may terminate an active project engagement by providing 14 days&apos; written notice.
          Upon termination, you will pay for all work completed through the termination date; the initial
          deposit is non-refundable; and BeberBuilds will deliver all completed work product upon receipt
          of any outstanding balance. BeberBuilds may terminate services immediately if you materially
          breach these Terms or fail to make required payments.
        </p>

        {/* 11. Governing Law */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">11. Governing Law and Dispute Resolution</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          These Terms shall be governed by the laws of the Province of Ontario and the federal laws of
          Canada. The parties agree to attempt to resolve any dispute informally. If a dispute cannot be
          resolved informally within 30 days, either party may refer the matter to binding arbitration
          in Toronto, Ontario. Either party may seek urgent injunctive relief from a court of competent
          jurisdiction in Toronto, Ontario, without first proceeding to arbitration.
        </p>

        {/* 12. General */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">12. General Provisions</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Entire Agreement:</strong> These Terms, together with any applicable SOW or separately executed written agreement, constitute the entire agreement between the parties.</li>
          <li><strong className="text-white/80">Severability:</strong> If any provision is found invalid or unenforceable, the remaining provisions continue in full force and effect.</li>
          <li><strong className="text-white/80">Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that right in the future.</li>
          <li><strong className="text-white/80">Assignment:</strong> You may not assign your rights or obligations without our prior written consent.</li>
          <li><strong className="text-white/80">Independent Contractors:</strong> The parties are independent contractors. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship.</li>
          <li>
            <strong className="text-white/80">Notices:</strong> Legal notices must be sent by email to{" "}
            <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline transition-colors">hello@beberbuilds.com</a>{" "}
            (for notices to BeberBuilds) or to the email address on file for you.
          </li>
        </ul>

        {/* 13. Contact */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">13. Contact Us</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-white/60 space-y-1">
          <p className="font-semibold text-white/80">BeberBuilds</p>
          <p>Toronto, Ontario, Canada</p>
          <p>
            Email:{" "}
            <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline transition-colors">
              hello@beberbuilds.com
            </a>
          </p>
          <p>Website: beberbuilds.com</p>
        </div>
      </div>
    </div>
  );
}
`);

/* ════════════════════════════════════════════════════
   5.  Remove accidentally committed temp scripts
════════════════════════════════════════════════════ */
console.log("\n▸ Removing temp scripts...");
remove("setup.js");
remove("update.ps1");

console.log("\n✅ Done! Now run:\n");
console.log("  git add -A");
console.log('  git commit -m "fix: BeberBuilds branding, complete legal pages, remove temp scripts"');
console.log("  git push origin master\n");
