import Link from "next/link";

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
          We may not have all of the above marketing tools active at all times. The specific tools in
          use at any given time depend on our current marketing activities. You can withdraw consent
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

        {/* 3. How Long Do Cookies Last */}
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
        <p className="text-white/60 leading-relaxed mb-4">
          The specific duration of each cookie we use is noted in the tables in Section 2. Durations are
          subject to change when we update our cookie practices, and the tables in this policy will be
          updated accordingly.
        </p>

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
          Most web browsers allow you to control cookies through their settings. You can typically:
        </p>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-4">
          <li>View the cookies stored on your device and delete them individually or in bulk.</li>
          <li>Block all cookies or only third-party cookies.</li>
          <li>Set your browser to notify you before a cookie is placed.</li>
          <li>Enable private/incognito browsing, which does not save cookies after your session ends.</li>
        </ul>
        <p className="text-white/60 leading-relaxed mb-4">
          Browser-specific instructions for managing cookies:
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
        <p className="text-white/60 leading-relaxed mb-4">
          Please note that blocking or deleting all cookies may impact website functionality and your
          user experience. Certain features may not work correctly if essential cookies are disabled.
        </p>

        <h3 className="text-base font-semibold mb-2 text-white/80">c) Third-Party Opt-Out Tools</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          You can opt out of interest-based advertising from participating companies using industry
          opt-out tools:
        </p>
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
        <p className="text-white/60 leading-relaxed mb-4">
          These opt-out mechanisms work by placing an opt-out cookie on your device. If you clear your
          cookies, you may need to opt out again.
        </p>

        {/* 5. Do Not Track */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">5. Do Not Track Signals</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not
          want your browsing activity tracked. There is currently no universally agreed-upon technical
          standard for responding to DNT signals. At this time, our website does not alter its data
          collection practices in response to DNT signals, but you can manage your cookie preferences
          using the methods described in Section 4.
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
          We rely on consent as our legal basis for non-essential cookies. You may withdraw that consent
          at any time without affecting the lawfulness of processing carried out prior to withdrawal.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          If you are located in the European Union or United Kingdom, the GDPR and UK GDPR apply to
          our processing of cookie data that constitutes personal data. Canadian residents are protected
          under PIPEDA (and applicable provincial privacy legislation). Our cookie practices comply
          with Canada&apos;s Anti-Spam Legislation (CASL) as it relates to the installation of software
          or tracking technologies.
        </p>

        {/* 7. Changes to This Policy */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">7. Changes to This Cookie Policy</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We may update this Cookie Policy from time to time to reflect changes in the cookies we use,
          applicable law, or our practices. When we make material changes, we will update the
          &quot;Last updated&quot; date at the top of this page. If changes significantly affect the way we
          handle your data, we will notify you through a notice on our website or by email where
          appropriate. We encourage you to review this policy periodically.
        </p>

        {/* 8. Contact Us */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#A78BFA]">8. Contact Us</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          If you have any questions about this Cookie Policy or wish to exercise any rights related to
          cookies and your personal data, please contact us:
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
