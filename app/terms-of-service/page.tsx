import Link from "next/link";

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
