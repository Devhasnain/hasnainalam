import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content Column (6/12 Grid) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          {/* Live Professional Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 w-max">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-blue-300 tracking-wider uppercase">
              Enterprise Multi-Platform Engineer
            </span>
          </div>

          {/* Majestic SEO-rich Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
            Engineering Clean <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-white drop-shadow-[0_2px_20px_rgba(59,130,246,0.2)]">
              Web, Mobile & Desktop
            </span>{" "}
            <br />
            Architectures
          </h1>

          {/* Strategic Definition: What this Website Represents */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
            This system represents a production-grade, component-driven
            portfolio engineered in{" "}
            <span className="text-white font-medium">Next.js & TypeScript</span>
            . It serves as a live presentation of architectural patterns
            showcasing responsive full-stack applications, integrated native
            ecosystems, and robust cross-platform software.
          </p>

          {/* Dynamic Interactive Tech Highlights */}
          <div className="grid grid-cols-3 gap-4 py-2">
            <div className="bg-gray-950/45 border border-gray-900 rounded-xl p-3.5 hover:border-blue-500/20 transition-all">
              <div className="text-xs text-blue-400 font-semibold mb-1">
                MERN WEB
              </div>
              <div className="text-sm font-bold text-gray-200">SaaS & APIs</div>
            </div>
            <div className="bg-gray-950/45 border border-gray-900 rounded-xl p-3.5 hover:border-cyan-500/20 transition-all">
              <div className="text-xs text-cyan-400 font-semibold mb-1">
                MOBILE APP
              </div>
              <div className="text-sm font-bold text-gray-200">
                React Native
              </div>
            </div>
            <div className="bg-gray-950/45 border border-gray-900 rounded-xl p-3.5 hover:border-purple-500/20 transition-all">
              <div className="text-xs text-purple-400 font-semibold mb-1">
                DESKTOP
              </div>
              <div className="text-sm font-bold text-gray-200">Electron.js</div>
            </div>
          </div>

          {/* Premium Call-to-Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#projects"
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl shadow-[0_4px_25px_rgba(59,130,246,0.35)] transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              My Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-gray-900/60 hover:bg-gray-800/80 text-gray-200 font-bold rounded-xl border border-gray-800 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links Panel & Professional Connectivity */}
          <div className="flex items-center space-x-6 pt-6 border-t border-gray-900/60">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              Connect:
            </span>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-900/80 rounded-lg transition-colors"
                title="GitHub Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-900/80 rounded-lg transition-colors"
                title="LinkedIn Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-900/80 rounded-lg transition-colors"
                title="Twitter Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Right Media Column (5/12 Grid) */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Visual Frame & Backglowing Effects */}
          <div className="relative w-72 sm:w-96 aspect-3/4 rounded-3xl overflow-hidden group border border-gray-800 bg-gray-950/60 p-2">
            <div className="absolute inset-0 bg-linear-to-t from-blue-600/25 via-transparent to-transparent z-10" />
            <div className="absolute -inset-1.5 bg-linear-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            {/* Profile Image Render with fallback properties */}
            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#0d1221]">
              <Image
                src="/Hasnain-alam.png"
                alt="Hasnain Alam Full-Stack Engineer"
                className="w-full h-full object-cover object-top scale-100 group-hover:scale-[1.03] transition-transform duration-500 relative z-0"
                height={300}
                width={300}
                loading="eager"
                placeholder="empty"
              />
            </div>

            {/* Float Floating Tech Pill A */}
            <div className="absolute top-6 left-3.75 z-20 bg-[#080b13]/90 border border-blue-500/30 rounded-2xl px-4 py-2 flex items-center space-x-2 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform">
              <span className="p-1 rounded bg-blue-500/15 text-blue-400 text-xs font-bold">
                NEXT
              </span>
              <span className="text-xs font-semibold text-gray-200">
                TS Master
              </span>
            </div>

            {/* Float Floating Tech Pill B */}
            <div className="absolute bottom-12 right-3.75 z-20 bg-[#080b13]/90 border border-cyan-500/30 rounded-2xl px-4 py-2 flex items-center space-x-2 shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform">
              <span className="p-1 rounded bg-cyan-500/15 text-cyan-400 text-xs font-bold">
                NATIVE
              </span>
              <span className="text-xs font-semibold text-gray-200">
                Mobile Guru
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
