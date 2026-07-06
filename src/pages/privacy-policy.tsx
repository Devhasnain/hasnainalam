import Head from "next/head";


const domain = "https://hasnainalam.com";
const pageUrl = `${domain}/privacy-policy`;
const title = "Privacy Policy | Hasnain Alam - Full-Stack Developer";
const description =
  "Privacy Policy detailing data processing practices, application state management, and platform security standards across Web, Mobile (React Native), and Desktop (Electron.js) software.";

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
};

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph (Facebook, LinkedIn, WhatsApp preview) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${domain}/Hasnain-alam-og-image.png`} />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${domain}/Hasnain-alam-og-image.png`} />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* Background Subtle Glow Accent */}
      {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" /> */}

      <div className="space-y-10 text-gray-300 font-light leading-relaxed sm:text-base max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-20">

      <section className="border-b border-gray-900 pb-8 mb-12 pt-28">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-center">
          Privacy Policy
        </h1>
      </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">01.</span> Scope of Digital
            Platforms
          </h2>
          <p>
            This Privacy Policy applies to the data architectures of the
            following multi-platform software systems showcased or
            distributed through my professional portfolio:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm">
            <li>
              <strong>MERN & Next.js Platforms:</strong> Dynamic web
              applications utilizing server-side rendering and cloud database
              layers.
            </li>
            <li>
              <strong>React Native Apps:</strong> Mobile systems that request
              user hardware permissions and execute local cross-platform
              caching.
            </li>
            <li>
              <strong>Electron.js Clients:</strong> Cross-platform desktop
              applications operating under sandboxed, OS-level boundaries.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">02.</span> Information
            Collection & Core Utilities
          </h2>
          <p>
            My primary focus is performance optimization, which is why data
            collection is kept to minimal, necessary parameters across all
            applications:
          </p>
          <div className="bg-gray-950/40 p-5 rounded-2xl border border-gray-900 space-y-3 text-sm text-gray-400">
            <p>
              <strong>A. User-Provided Data:</strong> When you use contact
              forms or authentication modules, your explicit identifier data
              (such as name, email address, and message context) is relayed
              to dynamic endpoints in strictly encrypted, standard JSON
              formats.
            </p>
            <p>
              <strong>B. Mobile & Desktop Native Hardware:</strong> Under
              React Native and Electron.js frameworks, local client memory
              handles, offline state configurations (Zustand/SQLite storage),
              and basic machine logging are not accessed until explicit
              dynamic permission is granted through the native OS
              permission dialog.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">03.</span> State Storage &
            Security Infrastructure
          </h2>
          <p>
            Modern cloud infrastructure standards are used to process and
            secure all collected data elements:
          </p>
          <p>
            Backend data processing relies on strictly validated schemas
            (MongoDB/PostgreSQL connections), and all data in transit is
            routed over Secure Socket Layers (HTTPS/WSS pipelines). Electron
            applications enforce context isolation to block remote script
            injection, ensuring maximum security validation.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">04.</span> Cookies and
            Tracking Telemetry
          </h2>
          <p>
            On Next.js platforms, minimal local analytical tracers may be
            used to evaluate performance metrics and monitor SEO parameters.
            You can customize or fully clear storage parameters through your
            browser&apos;s preference and privacy controls.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-blue-500 text-lg">05.</span> Developer
            Coordinates
          </h2>
          <p>
            For any queries related to this statement, runtime processing
            models, or my personal portfolio repositories, you can reach out
            through the direct contact form or the email address below:
          </p>
          <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl w-max">
            <p className="text-sm font-semibold text-blue-400 font-mono">
              Email Routing Node: hasnain.alam@example.com
            </p>
          </div>
        </section>
      </div>
    </>
  );
}