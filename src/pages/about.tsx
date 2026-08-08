import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


const domain = "https://hasnainalam.com";
const pageUrl = `${domain}/about`;
const title = "About Hasnain Alam | Multi-Platform Software Engineer";
const description =
  "Learn more about Hasnain Alam, a specialized Full-Stack Developer leveraging Next.js/MERN stack, React Native, and Electron.js to build high-performance applications.";
const imageUrl = `${domain}/Hasnain-alam-og-image.png`;

export default function AboutPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}/#profile`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": `${domain}/#website` },
    mainEntity: {
      "@type": "Person",
      "@id": `${domain}/#person`,
      name: "Hasnain Alam",
      url: domain,
      image: `${domain}/Hasnain-alam.png`,
      jobTitle: "Full-Stack MERN Developer",
      description:
        "Full-Stack Developer specializing in MERN Stack, Next.js, React Native, Electron.js, NestJS, TypeScript, Node.js and MongoDB.",
      sameAs: [
        "https://github.com/devhasnain",
        "https://www.linkedin.com/in/devhasnain",
      ],
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="profile" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="profile:first_name" content="Hasnain" />
        <meta property="profile:last_name" content="Alam" />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* HERO */}
        <header className="border-b border-gray-900 pb-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-md px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Architect Profile
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
              About{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-white">
                Hasnain Alam
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              A software engineer dedicated to building hyper-optimized
              application platforms spanning web ecosystems, cross-platform
              mobile environments, and secure desktop boundaries.
            </p>

            {/* Quick stats row - adds scannable content + SEO-friendly keywords */}
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  3+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">
                  Platforms
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  MERN
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">
                  Core Stack
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  TS
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">
                  Type-Safe
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <figure className="relative w-80 h-80 rounded-2xl bg-gray-950 border border-gray-900 p-2 overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 via-transparent to-transparent opacity-80 z-10" />
              <Image
                src="/Hasnain-alam.png"
                alt="Hasnain Alam - Full-Stack MERN, React Native & Electron.js Developer"
                title="Hasnain Alam - Full-Stack MERN, React Native & Electron.js Developer"
                fill
                sizes="176px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </figure>
          </div>
        </header>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-gray-300 font-light leading-relaxed text-sm sm:text-base">
          <div className="lg:col-span-8 space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-blue-500 font-mono text-xl">01.</span>{" "}
                Professional Mission
              </h2>
              <p>
                I specialize in breaking down complex architectural constraints
                into maintainable, production-ready systems. Operating at the
                intersection of robust backend servers and highly interactive
                user interfaces, my objective is to engineer digital portals
                that achieve low-latency performance with exceptional structural
                code fidelity.
              </p>
              <p>
                By treating type-safety as a foundational rule rather than an
                option, I design systems that scale elegantly across distributed
                microservices and native client applications without
                fragmentation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-blue-500 font-mono text-xl">02.</span>{" "}
                Core Multi-Platform Framework Breakdown
              </h2>
              <p>
                To maintain absolute coverage across standard operational
                systems, my engineering matrix is systematically split into
                three isolated core configurations:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 bg-gray-950/40 border border-gray-900 rounded-xl hover:border-blue-500/20 transition-colors">
                  <h3 className="text-base font-bold text-white mb-1">
                    MERN & Next.js Full-Stack Architecture
                  </h3>
                  <p className="text-xs text-gray-400">
                    Engineering robust RESTful APIs and real-time socket
                    channels powered by Node.js, Express, and MongoDB or
                    PostgreSQL clusters. On the frontend layer, I deploy dynamic
                    Next.js applications optimized for advanced Server-Side
                    Rendering (SSR) and crawlable layouts.
                  </p>
                </div>

                <div className="p-5 bg-gray-950/40 border border-gray-900 rounded-xl hover:border-cyan-500/20 transition-colors">
                  <h3 className="text-base font-bold text-white mb-1">
                    React Native Mobile Engineering
                  </h3>
                  <p className="text-xs text-gray-400">
                    Compiling beautiful, high-framerate fluid systems for iOS
                    and Android environments. Utilizing native animation
                    frameworks, isolated atomic storage containers, and
                    streamlined payload rendering patterns to defeat memory
                    leakage.
                  </p>
                </div>

                <div className="p-5 bg-gray-950/40 border border-gray-900 rounded-xl hover:border-purple-500/20 transition-colors">
                  <h3 className="text-base font-bold text-white mb-1">
                    Electron.js Desktop Software
                  </h3>
                  <p className="text-xs text-gray-400">
                    Building cross-platform secure native desktop applications
                    for Windows, macOS, and Linux. Enforcing strict security
                    protocols, contextual runtime separation, and optimized
                    multi-process IPC message loops.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-blue-500 font-mono text-xl">03.</span>{" "}
                Architectural Principles
              </h2>
              <p>
                Every software layer I compile is governed by structured
                developmental workflows: strict context isolation to mitigate
                security vulnerabilities, strategic asynchronous caching queries
                to prevent client runtime lag, and declarative UI states to
                preserve micro-interactions across variable frame rates.
              </p>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-gray-950/60 border border-gray-900 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-gray-900 pb-2">
                Technical Matrix
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-gray-500 block">Core Identity:</span>
                  <span className="text-gray-200 font-semibold">
                    Hasnain Alam
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Focus Node:</span>
                  <span className="text-blue-400 font-semibold">
                    Full-Stack Cross-Platform
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">
                    Primary Web Stack:
                  </span>
                  <span className="text-gray-200">
                    Next.js / TypeScript / Node.js
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">
                    Database Handlers:
                  </span>
                  <span className="text-gray-200">MongoDB / PostgreSQL</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Mobile Pipeline:</span>
                  <span className="text-cyan-400">React Native Engine</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Desktop Frame:</span>
                  <span className="text-purple-400">
                    Electron.js Architecture
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-linear-to-br from-blue-950/20 to-transparent border border-blue-950 rounded-2xl space-y-4 text-center">
              <h3 className="text-base font-bold text-white">
                Need an Enterprise Solution?
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Whether you require an automated SaaS web platform, a fast
                native mobile app, or an offline desktop ecosystem, let&apos;s
                map out your parameters.
              </p>
              <Link
                href="/contact"
                className="block w-full py-3 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Initiate Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
