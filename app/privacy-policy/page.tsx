import Link from "next/link";

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
          BeberBuilds ("we," "us," or "our") is committed to protecting your privacy. This Privacy
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
          We rely on the following legal bases under applicable privacy law (including Canada's PIPEDA and, where applicable, the EU/UK GDPR): your consent, the performance of a contract with you, compliance with a legal obligation, and our legitimate business interests where those interests do not override your rights.
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
          applicable law, including PIPEDA and, where relevant, the GDPR's standard contractual
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

        {/* 10. Children's Privacy */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">10. Children's Privacy</h2>
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
          changes, we will update the "Last updated" date at the top of this page and, where
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
