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
        <p className="text-white/60 leading-relaxed mb-4">
          We reserve the right to modify these Terms at any time. Material changes will be communicated
          via email or a notice on our website. Continued use of our services after such notice constitutes
          your acceptance of the revised Terms.
        </p>

        {/* 2. Services */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">2. Services</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds provides custom software development, AI integration, web application development,
          automation systems, and related technology consulting services to clients worldwide. The specific
          scope, deliverables, timeline, and fees for each engagement are defined in a separate Statement
          of Work (&quot;SOW&quot;), proposal, or project agreement provided to you prior to project commencement.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          We reserve the right to:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Decline any project request at our sole discretion without obligation to provide a reason.</li>
          <li>Engage subcontractors or independent specialists to assist in delivering services, while we remain responsible for the overall quality of the work delivered.</li>
          <li>Adjust timelines due to factors outside our control, including client delays in providing required materials, approvals, or feedback.</li>
          <li>Pause or terminate services if payment obligations are not met in accordance with Section 3.</li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          Timelines are estimates based on information available at the time of proposal. Significant
          changes to project scope, requirements, or priorities after commencement may result in revised
          timelines and fees, which will be communicated and agreed upon in writing before additional work
          proceeds.
        </p>

        {/* 3. Payment Terms */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">3. Payment Terms</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Payment terms for each project are specified in the applicable proposal or SOW. Unless otherwise
          agreed in writing, the following default terms apply:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>A non-refundable deposit of 50% of the total project fee is due prior to project commencement. This deposit secures your place in our schedule and covers initial planning, research, and setup work.</li>
          <li>The remaining balance is due upon project completion and prior to final delivery or deployment of deliverables.</li>
          <li>For ongoing retainer or maintenance arrangements, invoices are issued at the beginning of each billing period and are due within 14 days of the invoice date.</li>
          <li>All fees are quoted and payable in Canadian Dollars (CAD) unless otherwise stated in the proposal.</li>
          <li>Invoices not paid within 30 days of the due date will accrue interest at the rate of 1.5% per month (18% per annum), or the maximum rate permitted by applicable law, whichever is lower.</li>
          <li>You are responsible for all applicable taxes, duties, and levies in your jurisdiction. Where we are required to collect HST/GST or equivalent, it will be added to your invoice as a separate line item.</li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          In the event of project cancellation after commencement, the deposit is non-refundable and any
          work completed beyond the deposit amount will be invoiced based on time and materials at our
          standard hourly rate. BeberBuilds will deliver all completed work product up to the point of
          cancellation upon receipt of any outstanding balance.
        </p>

        {/* 4. Client Responsibilities */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">4. Client Responsibilities</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          To enable timely and quality delivery of services, you agree to:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Provide accurate, complete, and timely information, materials, content, and access credentials required to perform the services.</li>
          <li>Designate a primary point of contact with authority to make decisions and provide approvals on your behalf.</li>
          <li>Respond to requests for feedback, approvals, or clarification within five (5) business days. Delays in response may result in adjusted timelines at no fault of BeberBuilds.</li>
          <li>Ensure that any materials, content, branding assets, or third-party software you provide do not infringe upon the intellectual property rights of any third party.</li>
          <li>Obtain and maintain any necessary licences, permissions, or consents for third-party services or APIs that form part of the project.</li>
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
        <p className="text-white/60 leading-relaxed mb-4">
          Notwithstanding the above, BeberBuilds retains:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            <strong className="text-white/80">Portfolio Rights:</strong> The right to display the Final Deliverables — including screenshots, descriptions, and general project outcomes — in our portfolio, website, case studies, and marketing materials. Where a project involves confidential information or proprietary business logic, we will seek your prior written consent before featuring specifics publicly. You may request that we limit or anonymize portfolio references at any time.
          </li>
          <li>
            <strong className="text-white/80">Pre-existing IP:</strong> All ownership rights in our pre-existing methodologies, frameworks, libraries, code templates, tools, processes, and know-how developed independently of your project (&quot;BeberBuilds IP&quot;). To the extent that BeberBuilds IP is incorporated into your Final Deliverables, we grant you a perpetual, royalty-free, non-exclusive licence to use it solely as part of those deliverables.
          </li>
          <li>
            <strong className="text-white/80">Open Source Components:</strong> Any open source software incorporated into the deliverables remains subject to its original licence terms. We will identify significant open source components used in your project upon request.
          </li>
        </ul>

        <h3 className="text-base font-semibold mb-2 text-white/80">c) Your Materials</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          You grant BeberBuilds a limited, non-exclusive licence to use your trademarks, logos, content,
          and other materials solely for the purpose of delivering the agreed services. You represent and
          warrant that you have all necessary rights to grant this licence and that your materials do not
          infringe any third-party rights.
        </p>

        {/* 6. Confidentiality */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. Confidentiality</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Each party agrees to keep confidential any non-public information disclosed by the other party
          in the course of the engagement (&quot;Confidential Information&quot;), and not to disclose it to third
          parties or use it for any purpose other than performing or receiving the services. Confidential
          Information excludes information that is publicly available through no fault of the receiving
          party, independently developed, or lawfully received from a third party without restriction.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          If a separate Non-Disclosure Agreement (&quot;NDA&quot;) has been executed between the parties, that NDA
          supplements and takes precedence over this section. Either party may disclose Confidential
          Information to the extent required by law or court order, provided reasonable prior notice is
          given where legally permitted.
        </p>

        {/* 7. Warranties */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Warranties and Representations</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds warrants that:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Services will be performed in a professional and workmanlike manner consistent with industry standards.</li>
          <li>Final Deliverables, to our knowledge, will not infringe any third-party intellectual property rights at the time of delivery.</li>
          <li>We have the right and authority to enter into agreements under these Terms.</li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          Except as expressly stated above, services and deliverables are provided &quot;as is&quot; and &quot;as available.&quot;
          We disclaim all other warranties, express or implied, including warranties of merchantability,
          fitness for a particular purpose, or uninterrupted or error-free operation. Software inherently
          may contain defects; we will address material defects reported within 30 days of delivery at no
          additional charge. Defects reported after this period, or arising from modifications made by
          you or third parties, fall outside this warranty.
        </p>

        {/* 8. Limitation of Liability */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Limitation of Liability</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          To the maximum extent permitted by applicable law:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            BeberBuilds&apos;s total cumulative liability to you for any claims arising out of or related to
            these Terms or the services, whether in contract, tort, negligence, or otherwise, shall not
            exceed the total fees paid by you to BeberBuilds in the three (3) months immediately preceding
            the event giving rise to the claim.
          </li>
          <li>
            In no event shall BeberBuilds be liable for any indirect, incidental, special, consequential,
            or punitive damages, including loss of profits, loss of revenue, loss of data, loss of
            goodwill, business interruption, or cost of substitute services, even if advised of the
            possibility of such damages.
          </li>
          <li>
            We are not liable for delays, failures, or losses caused by factors outside our reasonable
            control, including acts of God, government actions, internet or infrastructure outages,
            third-party service failures, or your failure to provide required materials or approvals.
          </li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          Some jurisdictions do not allow the exclusion of certain warranties or limitations on liability.
          In such jurisdictions, our liability is limited to the fullest extent permitted by law.
        </p>

        {/* 9. Indemnification */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">9. Indemnification</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          You agree to indemnify, defend, and hold harmless BeberBuilds and its officers, employees,
          contractors, and agents from and against any claims, damages, losses, liabilities, costs, and
          expenses (including reasonable legal fees) arising out of or related to: (a) your breach of
          these Terms; (b) your use of the deliverables in a manner not contemplated by these Terms;
          (c) your materials infringing a third party&apos;s intellectual property rights; or (d) your
          violation of any applicable law or regulation.
        </p>

        {/* 10. Termination */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">10. Termination</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Either party may terminate an active project engagement by providing 14 days&apos; written notice.
          Upon termination:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>You will pay for all work completed through the termination date, based on the project rate or our standard hourly rate for time-and-materials work.</li>
          <li>The initial deposit is non-refundable.</li>
          <li>BeberBuilds will deliver all completed work product upon receipt of any outstanding balance.</li>
          <li>Both parties&apos; confidentiality obligations and any other provisions that by their nature should survive termination will continue in full force and effect.</li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds may terminate services immediately, without notice, if you materially breach these
          Terms, fail to make required payments after a written demand, or engage in conduct that is
          harmful, illegal, or fraudulent.
        </p>

        {/* 11. Governing Law */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">11. Governing Law and Dispute Resolution</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          These Terms and any dispute arising out of or in connection with them shall be governed by and
          construed in accordance with the laws of the Province of Ontario and the federal laws of Canada
          applicable therein, without regard to conflict of law principles.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          The parties agree to attempt to resolve any dispute informally by contacting each other in good
          faith. If a dispute cannot be resolved informally within 30 days of written notice, either party
          may refer the matter to binding arbitration administered in Toronto, Ontario, under the
          Arbitration Act, 1991 (Ontario). Notwithstanding the foregoing, either party may seek urgent
          injunctive or equitable relief from a court of competent jurisdiction in Toronto, Ontario,
          without first proceeding to arbitration.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          You consent to the exclusive jurisdiction and venue of the courts of Ontario, Canada for any
          matters not subject to arbitration.
        </p>

        {/* 12. General */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">12. General Provisions</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>
            <strong className="text-white/80">Entire Agreement:</strong> These Terms, together with any applicable SOW, proposal, or separately executed written agreement, constitute the entire agreement between the parties and supersede all prior understandings, negotiations, or representations.
          </li>
          <li>
            <strong className="text-white/80">Severability:</strong> If any provision of these Terms is found invalid or unenforceable by a court of competent jurisdiction, the remaining provisions continue in full force and effect.
          </li>
          <li>
            <strong className="text-white/80">Waiver:</strong> Failure by either party to enforce any provision of these Terms does not constitute a waiver of that right in the future.
          </li>
          <li>
            <strong className="text-white/80">Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. BeberBuilds may assign these Terms in connection with a merger, acquisition, or sale of substantially all of our assets.
          </li>
          <li>
            <strong className="text-white/80">Force Majeure:</strong> Neither party is liable for any failure or delay in performance due to causes beyond their reasonable control, including natural disasters, government actions, pandemics, cyberattacks, or infrastructure failures, provided the affected party gives prompt notice and uses reasonable efforts to resume performance.
          </li>
          <li>
            <strong className="text-white/80">Notices:</strong> Legal notices under these Terms must be in writing and delivered by email to{" "}
            <a href="mailto:hello@beberbuilds.com" className="text-[#A78BFA] hover:text-white underline transition-colors">
              hello@beberbuilds.com
            </a>{" "}
            (for notices to BeberBuilds) or to the email address on file for you. Notices are effective upon confirmation of receipt.
          </li>
          <li>
            <strong className="text-white/80">Independent Contractors:</strong> The parties are independent contractors. Nothing in these Terms creates a partnership, joint venture, agency, franchise, or employment relationship between BeberBuilds and the Client.
          </li>
        </ul>

        {/* 13. Contact */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">13. Contact Us</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          If you have any questions about these Terms of Service or our services, please contact us:
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
