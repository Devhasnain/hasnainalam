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
          {/* SEO-rich Main Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
            Hasnain Alam <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-white drop-shadow-[0_2px_20px_rgba(59,130,246,0.2)]">
              Full-Stack MERN &amp; Next.js Developer
            </span>
          </h1>

          {/* Strategic Definition: What this Website Represents */}
          <p className="text-gray-300 text-md leading-relaxed max-w-2xl font-light">
            I&apos;m a Full-Stack Developer specializing in the{" "}
            <span className="text-white font-medium">
              MERN Stack, Next.js &amp; TypeScript
            </span>
            , helping businesses worldwide build fast, scalable, SEO-friendly
            web applications. I also build cross-platform mobile apps as a{" "}
            <span className="text-white font-medium">
              React Native developer
            </span>{" "}
            and native desktop software as an{" "}
            <span className="text-white font-medium">
              Electron.js developer
            </span>{" "}
            — turning ideas into production-ready products across every
            platform. Available for freelance and full-time opportunities.
          </p>

          {/* Premium Call-to-Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-xl shadow-[0_4px_25px_rgba(59,130,246,0.35)] transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Hire Me
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-gray-900/60 hover:bg-gray-800/80 text-gray-200 font-medium rounded-xl border border-gray-800 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              My Projects
            </Link>
          </div>

          {/* Social Links Panel & Professional Connectivity */}
          <div className="flex items-center space-x-6 pt-3 border-t border-gray-900/60">
            <SocialIcons />
          </div>
        </div>

        {/* Hero Right Media Column (5/12 Grid) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-72 sm:w-85 aspect-3/4 rounded-3xl overflow-hidden group border border-gray-800 bg-gray-950/60">
            <div className="absolute inset-0 bg-linear-to-t from-blue-600/25 via-transparent to-transparent z-10" />

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
          </div>
        </div>
      </div>
    </section>
  );
}
