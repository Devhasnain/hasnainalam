import Image from "next/image";
import Link from "next/link";

import SocialIcons from "./SocialIcons";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content Column (6/12 Grid) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          {/* Live Professional Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 w-max">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-blue-300 tracking-wider uppercase">
              Available for Freelance Projects
            </span>
          </div>

          {/* SEO-rich Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
            Hasnain Alam <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-white drop-shadow-[0_2px_20px_rgba(59,130,246,0.2)]">
              Full-Stack MERN Developer
            </span>
          </h1>

          {/* Strategic Definition: What this Website Represents */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
            I&apos;m a Full-Stack Developer specializing in the{" "}
            <span className="text-white font-medium">
              MERN Stack, Next.js & TypeScript
            </span>
            , helping businesses build fast, scalable web applications. I also
            build cross-platform mobile apps with{" "}
            <span className="text-white font-medium">React Native</span> and
            native desktop software with{" "}
            <span className="text-white font-medium">Electron.js</span> —
            turning ideas into production-ready products across every platform.
          </p>

          {/* Dynamic Interactive Tech Highlights */}
          <div className="grid grid-cols-3 gap-4 py-2">
            <div className="bg-gray-950/45 border border-gray-900 rounded-xl p-3.5 hover:border-blue-500/20 transition-all">
              <div className="text-xs text-blue-400 font-semibold mb-1">
                MERN STACK
              </div>
              <div className="text-sm font-bold text-gray-200">Web & APIs</div>
            </div>
            <div className="bg-gray-950/45 border border-gray-900 rounded-xl p-3.5 hover:border-cyan-500/20 transition-all">
              <div className="text-xs text-cyan-400 font-semibold mb-1">
                MOBILE APPS
              </div>
              <div className="text-sm font-bold text-gray-200">
                React Native
              </div>
            </div>
            <div className="bg-gray-950/45 border border-gray-900 rounded-xl p-3.5 hover:border-purple-500/20 transition-all">
              <div className="text-xs text-purple-400 font-semibold mb-1">
                DESKTOP APPS
              </div>
              <div className="text-sm font-bold text-gray-200">Electron.js</div>
            </div>
          </div>

          {/* Premium Call-to-Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl shadow-[0_4px_25px_rgba(59,130,246,0.35)] transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              View My Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-gray-900/60 hover:bg-gray-800/80 text-gray-200 font-bold rounded-xl border border-gray-800 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Hire Me
            </Link>
          </div>

          {/* Social Links Panel & Professional Connectivity */}
          <div className="flex items-center space-x-6 pt-6 border-t border-gray-900/60">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Connect:
            </span>
            <SocialIcons />
          </div>
        </div>

        {/* Hero Right Media Column (5/12 Grid) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-72 sm:w-96 aspect-3/4 rounded-3xl overflow-hidden group border border-gray-800 bg-gray-950/60 p-2">
            <div className="absolute inset-0 bg-linear-to-t from-blue-600/25 via-transparent to-transparent z-10" />
            <div className="absolute -inset-1.5 bg-linear-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#0d1221]">
              <Image
                src="/Hasnain-alam.png"
                alt="Hasnain Alam - Full-Stack MERN, React Native and Electron.js Developer"
                className="object-cover object-top scale-100 group-hover:scale-[1.03] transition-transform duration-500 relative z-0"
                fill
                sizes="(max-width: 640px) 288px, 384px"
                priority
              />
            </div>

            <div className="absolute top-6 left-3.75 z-20 bg-[#080b13]/90 border border-blue-500/30 rounded-2xl px-4 py-2 flex items-center space-x-2 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform">
              <span className="p-1 rounded bg-blue-500/15 text-blue-400 text-xs font-bold">
                NEXT
              </span>
              <span className="text-xs font-semibold text-gray-200">
                TS Master
              </span>
            </div>

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
