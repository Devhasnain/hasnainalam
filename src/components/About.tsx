import { BrushCleaning, Zap, Target, Workflow } from "lucide-react";


const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* About Left Text Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="text-blue-500 font-semibold tracking-widest text-xs uppercase">
              About Me
            </span>
            <div className="w-8 h-px bg-blue-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Full-Stack MERN &amp; Next.js Developer Building for Web, Mobile &amp; Desktop
          </h2>

          <p className="text-gray-300 leading-relaxed font-light">
            I&apos;m a Full-Stack Developer helping businesses worldwide build
            fast, scalable applications with the{" "}
            <span className="text-white font-medium">MERN Stack</span> and{" "}
            <span className="text-white font-medium">Next.js</span>. Beyond
            web development, my core expertise extends to building robust,
            real-world cross-platform mobile apps with{" "}
            <span className="text-white font-medium">React Native</span> and
            secure, native desktop applications with{" "}
            <span className="text-white font-medium">Electron.js</span> —
            giving clients a single developer who can ship across every
            platform.
          </p>

          <p className="text-gray-300 leading-relaxed font-light">
            Every project is built with pixel-perfect, responsive UI and
            production-ready performance in mind. Available for freelance
            projects and full-time roles worldwide.
          </p>

          {/* Micro Stats Columns */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
            <div className="bg-gray-950/40 p-5 rounded-2xl border border-gray-900/60 text-center">
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Years Active
              </div>
            </div>
            <div className="bg-gray-950/40 p-5 rounded-2xl border border-gray-900/60 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">45+</div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Projects Shipped
              </div>
            </div>
            <div className="bg-gray-950/40 p-5 rounded-2xl border border-gray-900/60 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">99%</div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Happy Clients
              </div>
            </div>
            <div className="bg-gray-950/40 p-5 rounded-2xl border border-gray-900/60 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">20+</div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Active Techs
              </div>
            </div>
          </div> */}
        </div>

        {/* About Right Layout Detail Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-950/60 border border-gray-900 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg">
              <BrushCleaning />
            </div>
            <h3 className="text-base font-semibold text-white">
              Clean Architecture
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Maintainable, scalable code across MERN Stack and Next.js
              projects, built for long-term growth without technical debt.
            </p>
          </div>
          <div className="bg-gray-950/60 border border-gray-900 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-lg">
              <Zap />
            </div>
            <h3 className="text-base font-semibold text-white">
              Performance Optimization
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fast page loads, smooth 60+ FPS mobile experiences, and
              optimized backend processing on every build.
            </p>
          </div>
          <div className="bg-gray-950/60 border border-gray-900 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-lg">
              <Target />
            </div>
            <h3 className="text-base font-semibold text-white">
              SEO-Optimized Development
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Built with Next.js SSR/SSG, structured data, and clean crawl
              paths so your site is discoverable on Google from launch.
            </p>
          </div>
          <div className="bg-gray-950/60 border border-gray-900 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 font-bold text-lg">
              <Workflow />
            </div>
            <h3 className="text-base font-semibold text-white">
              Cross-Platform Delivery
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              One developer covering your web, React Native mobile app, and
              Electron.js desktop software — no handoffs, no fragmentation.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;