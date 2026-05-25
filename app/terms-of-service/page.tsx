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
          BeberBuilds provides custom software development, AI integration, web development,
          automation systems, and technology consulting. Scope, deliverables, timelines, and fees
          are defined in a Statement of Work ("SOW") or project proposal issued before commencement.
          We reserve the right to decline any project, engage subcontractors, and adjust timelines
          due to client delays or scope changes.
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
          Upon receipt of full and final payment, BeberBuilds assigns you all rights, title, and
          interest in the custom deliverables created specifically for your project.
        </p>
        <h3 className="text-base font-semibold mb-2 text-white/80">BeberBuilds Retained Rights</h3>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li><strong className="text-white/80">Portfolio Rights:</strong> We may showcase your project in our portfolio and marketing. We will seek your consent before featuring confidential business details.</li>
          <li><strong className="text-white/80">Pre-existing IP:</strong> We retain rights to our frameworks, libraries, and tools. You receive a perpetual, royalty-free licence to use them as part of your deliverables.</li>
          <li><strong className="text-white/80">Open Source:</strong> Any open source components remain subject to their original licences.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Confidentiality</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Both parties agree to keep confidential any non-public information disclosed during the
          engagement. If a separate NDA has been signed, it supplements and takes precedence over
          this section.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">6. Warranties</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          BeberBuilds warrants that services will be performed professionally and that final
          deliverables, to our knowledge, will not infringe third-party IP at delivery. We will
          address material defects reported within 30 days at no additional charge. Beyond this,
          services are provided "as is."
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Limitation of Liability</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>Our total liability shall not exceed fees paid by you in the three (3) months preceding the claim.</li>
          <li>We are not liable for indirect, consequential, or punitive damages, including loss of profits or data.</li>
          <li>We are not liable for delays caused by factors outside our control.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Termination</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Either party may terminate by providing 14 days' written notice. Upon termination you will
          pay for all work completed; the deposit is non-refundable. Completed work is delivered upon
          settlement of any outstanding balance.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">9. Governing Law</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          These Terms are governed by the laws of Ontario, Canada. Disputes unresolved within 30 days
          will go to binding arbitration in Toronto under the Arbitration Act, 1991 (Ontario).
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
