import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Jinling Metals handles website analytics, Microsoft Clarity insights, cookies, and information you choose to send in an inquiry.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sectionClass = "scroll-mt-28 border-t border-cream-border-soft pt-8";
const headingClass = "text-2xl font-semibold leading-tight text-brand-dark";
const paragraphClass = "mt-4 text-sm leading-7 text-[#53606b] sm:text-base sm:leading-8";
const linkClass =
  "font-medium text-editorial-link underline decoration-editorial-link/40 underline-offset-4 transition hover:decoration-editorial-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editorial-link";

const sections = [
  { id: "inquiries", label: "Inquiries" },
  { id: "google-analytics", label: "Google Analytics" },
  { id: "microsoft-clarity", label: "Microsoft Clarity" },
  { id: "your-choices", label: "Your choices" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream-200">
      <section className="bg-brand-dark px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Website Information
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
            This notice explains how Jinling Metals uses information from
            www.jinlingmetals.com and from inquiries you choose to send us.
          </p>
          <p className="mt-6 text-sm text-white/65">
            Last updated: <time dateTime="2026-11-10">10 November 2026</time>
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl border border-cream-border bg-white p-6 sm:p-10">
          <nav aria-label="Privacy policy sections">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={linkClass}>
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-8">
            <section id="inquiries" className={sectionClass}>
              <h2 className={headingClass}>Information you send in an inquiry</h2>
              <p className={paragraphClass}>
                When you email us, you may provide your name, company, contact
                details, product requirements, drawings, or other information
                relevant to your request. We use the information you send to
                review and respond to your inquiry and continue the related
                business communication.
              </p>
              <p className={paragraphClass}>
                Our contact form prepares an email draft in your email
                application. Completing the form does not submit an inquiry to a
                website server; you review and send the message through your email
                service. That service handles the message under its own privacy
                terms.
              </p>
            </section>

            <section id="google-analytics" className={sectionClass}>
              <h2 className={headingClass}>Google Analytics and its cookies</h2>
              <p className={paragraphClass}>
                We use Google Analytics 4 to understand website traffic, page
                visits, and engagement so we can improve our content and website.
                Google receives usage information such as the pages visited,
                session statistics, approximate location, and browser and device
                information.
              </p>
              <p className={paragraphClass}>
                Google Analytics uses first-party cookies, including cookies named{" "}
                <code className="text-[0.9em]">_ga</code> and{" "}
                <code className="text-[0.9em]">_ga_&lt;identifier&gt;</code>, to
                distinguish browsers and maintain session information. Google
                signals and advertising personalization signals are disabled in
                our website tag. The no-cookie configuration described for
                Microsoft Clarity below does not disable Google Analytics or its
                cookies.
              </p>
              <p className={paragraphClass}>
                Read the{" "}
                <a href="https://policies.google.com/privacy" className={linkClass}>
                  Google Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  className={linkClass}
                >
                  how Google uses information from sites that use its services
                </a>
                .
              </p>
            </section>

            <section id="microsoft-clarity" className={sectionClass}>
              <h2 className={headingClass}>Microsoft Clarity in no-cookie mode</h2>
              <p className={paragraphClass}>
                We use Microsoft Clarity to understand how visitors interact with
                our pages through behavioral measurements, heatmaps, and limited
                session replays. This can include clicks, scrolling, mouse
                movements, and how a page is displayed. We use these insights to
                find confusing elements and improve website usability. Microsoft
                receives this browsing information through Clarity.
              </p>
              <p className={paragraphClass}>
                For visitors in every region, our Clarity configuration denies
                both analytics storage and advertising storage and does not allow
                Clarity to set first-party or third-party cookies. Clarity still
                collects limited interaction data without cookies. Each page view
                is treated separately, so it does not provide a continuous replay
                across multiple pages or identify returning visitors in this
                mode.
              </p>
              <p className={paragraphClass}>
                Form input values and drop-down selections are masked in Clarity
                recordings. Please avoid including sensitive personal information
                in page URLs or inquiry details that are not needed for your
                request.
              </p>
              <p className={paragraphClass}>
                The{" "}
                <a
                  href="https://privacy.microsoft.com/en-us/privacystatement"
                  className={linkClass}
                >
                  Microsoft Privacy Statement
                </a>{" "}
                explains how Microsoft collects and uses information, including in
                connection with its advertising services. Microsoft also explains{" "}
                <a
                  href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-without-cookie-consent"
                  className={linkClass}
                >
                  how Clarity reporting changes without cookie consent
                </a>
                .
              </p>
            </section>

            <section id="your-choices" className={sectionClass}>
              <h2 className={headingClass}>Your browser and service choices</h2>
              <p className={paragraphClass}>
                You can use your browser settings to review, delete, or block
                cookies. Blocking cookies alone may not stop all analytics data
                from being sent. Google also provides a{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className={linkClass}
                >
                  Google Analytics opt-out browser add-on
                </a>{" "}
                for supported browsers. This add-on applies to Google Analytics,
                not Microsoft Clarity.
              </p>
              <p className={paragraphClass}>
                When you follow a link to another website or use a third-party
                service, its privacy policy and controls apply to its handling of
                your information.
              </p>
            </section>

            <section id="contact" className={sectionClass}>
              <h2 className={headingClass}>Updates and privacy questions</h2>
              <p className={paragraphClass}>
                We may update this notice when our website or use of these
                services changes. The date above shows when this version was last
                updated.
              </p>
              <p className={paragraphClass}>
                For questions about this notice or information you have sent us,
                email{" "}
                <a href="mailto:info@jinlingsteel.com" className={linkClass}>
                  info@jinlingsteel.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
