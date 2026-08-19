import Head from "next/head";


const domain = "https://hasnainalam.com";
const pageUrl = `${domain}/privacy-policy`;
const title = "Privacy Policy | Hasnain Alam";
const description =
  "Privacy Policy for hasnainalam.com, covering how data is collected and handled across the website, contact forms, and any linked web, mobile, or desktop applications.";
const lastUpdated = "August 20, 2026"; // update this date whenever the policy actually changes
const contactEmail = "hasnainalam1166@gmail.com"; // keep in sync with the Contact page

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}/#webpage`,
  url: pageUrl,
  name: title,
  description: description,
  isPartOf: {
    "@id": `${domain}/#website`
  },
  about: {
    "@id": `${domain}/#person`
  },
  inLanguage: "en",
  primaryImageOfPage: `${domain}/Hasnain-alam.png`,
  dateModified: "2026-08-20",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph (Facebook, LinkedIn, WhatsApp preview) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${domain}/Hasnain-alam-og-image.webp`} />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${domain}/Hasnain-alam-og-image.webp`} />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-10 text-gray-300 font-light leading-relaxed sm:text-base max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-20">

      <section className="border-b border-gray-900 pb-8 mb-12 pt-28">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Last updated: {lastUpdated}
        </p>
      </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">01.</span> What This Policy Covers
          </h2>
          <p>
            This Privacy Policy explains how data is collected and used on
            hasnainalam.com and any linked projects, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm">
            <li>
              <strong>This website:</strong> hasnainalam.com, including the
              contact form and any pages built with Next.js.
            </li>
            <li>
              <strong>Linked React Native apps:</strong> Mobile projects
              showcased in the portfolio that may request device permissions
              such as camera, location, or notifications.
            </li>
            <li>
              <strong>Linked Electron.js apps:</strong> Desktop projects
              showcased in the portfolio that may access local files or
              system-level features on the user's machine.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">02.</span> What Information Is Collected
          </h2>
          <p>
            Data collection on this site is limited to what's genuinely
            needed for it to function:
          </p>
          <div className="bg-gray-950/40 p-5 rounded-2xl border border-gray-900 space-y-3 text-sm text-gray-400">
            <p>
              <strong>A. Information you provide directly:</strong> When you
              use the contact form, the name, email address, and message you
              submit are sent securely to process your inquiry. This
              information is used only to respond to you — it is not sold,
              shared with third parties for marketing, or added to a mailing
              list.
            </p>
            <p>
              <strong>B. Mobile and desktop app permissions:</strong> React
              Native and Electron.js projects linked from this portfolio may
              request access to device features (like camera, location, file
              system, or notifications). These permissions are only requested
              when needed for that specific app's functionality, and only
              after you explicitly grant them through your device's native
              permission prompt.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">03.</span> How Data Is Stored & Secured
          </h2>
          <p>
            Any data submitted through this site is handled with standard
            security practices:
          </p>
          <p>
            All data sent to and from this site is encrypted in transit over
            HTTPS. Where a database is used to process form submissions
            (such as MongoDB or PostgreSQL), input is validated before it's
            stored. Desktop applications built with Electron.js enforce
            context isolation, which prevents untrusted scripts from
            accessing sensitive system-level APIs.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">04.</span> Cookies & Analytics
          </h2>
          <p>
            This site may use privacy-respecting analytics tools (such as
            Google Analytics or Vercel Analytics) to understand general site
            traffic and performance — for example, which pages are visited
            and how the site is performing for users. This data is
            aggregated and is not used to personally identify you. You can
            disable cookies at any time through your browser's privacy
            settings, and the site will continue to function normally.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">05.</span> Third-Party Services
          </h2>
          <p>
            Contact form submissions and site hosting may pass through
            trusted third-party service providers (such as email delivery
            services or cloud hosting platforms) solely to make the site and
            contact form function. These providers are not authorized to use
            your data for any purpose beyond delivering that service.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">06.</span> Contact
          </h2>
          <p>
            If you have any questions about this Privacy Policy or how your
            data is handled, reach out through the contact form or the email
            address below:
          </p>
          <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl w-max">
            <p className="text-sm font-semibold text-blue-400 font-mono">
              {contactEmail}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}