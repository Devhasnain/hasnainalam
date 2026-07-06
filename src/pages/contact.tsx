import { Mail, Zap } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";


const domain = "https://hasnainalam.com";
const pageUrl = `${domain}/contact`;
const title =
  "Contact Hasnain Alam | Hire MERN, React Native & Electron Developer";
const description =
  "Get in touch with Hasnain Alam for freelance, remote, or full-time software engineering projects involving Next.js, MERN stack, React Native mobile apps, and Electron.js desktop software.";
const imageUrl = `${domain}/Hasnain-alam.png`;

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      try {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
      await axios.post("/api/contact", payload);
      setStatus("success");
      e?.currentTarget?.reset()
    } catch {
      setStatus("error");
    }
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}/#contact`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": `${domain}/#website` },
    mainEntity: { "@id": `${domain}/#person` },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: domain },
      { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
              Connect Node
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-white">
              Exceptional
            </span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Have an enterprise application to build, a legacy codebase to
            migrate, or a cross-platform pipeline to optimize? Drop your
            specifications below.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-950/40 border border-gray-900 rounded-2xl p-6 space-y-6 shadow-xl">
              <h2 className="text-xl font-bold text-white tracking-tight border-b border-gray-900 pb-3">
                Direct Contact Hub
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 font-mono text-sm">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Official Routing
                    </h3>
                    <Link
                      href="mailto:contact@hasnainalam.com"
                      className="text-sm text-gray-200 hover:text-blue-400 transition-colors font-mono"
                    >
                      contact@hasnainalam.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 font-mono text-sm">
                    <Zap size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Current Availability
                    </h3>
                    <p className="text-sm text-gray-200 font-light">
                      Open for Freelance Contracts, Remote Engagements, &
                      Architecture Consultations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-linear-to-br from-gray-950/60 to-gray-950/20 border border-gray-900/80 rounded-2xl space-y-3">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
                Deployment Matrix Note
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                All client transmissions are securely handled. Form schemas
                validate endpoints using custom TypeScript validation
                constraints to ensure input parameters meet security standards
                before database injection.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <section className="lg:col-span-7 bg-gray-950/40 border border-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-gray-400 block"
                  >
                    Full Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-900/50 border border-gray-800 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-gray-400 block"
                  >
                    Email Address <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-900/50 border border-gray-800 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-bold uppercase tracking-wider text-gray-400 block"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full bg-gray-900/50 border border-gray-800 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-gray-400 block"
                >
                  Project Scope Parameters{" "}
                  <span className="text-blue-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Outline your application specifications, timeline targets, or integration rules..."
                  className="w-full bg-gray-900/50 border border-gray-800 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Dispatching..."
                  : "Dispatch Specifications →"}
              </button>

              {status === "success" && (
                <p className="text-xs text-green-400 text-center">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
