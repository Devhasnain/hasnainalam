import { BrushCleaning, Zap, Target, Workflow } from "lucide-react";
import React from "react";


const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* About Left Text Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="text-blue-500 font-semibold tracking-widest text-xs uppercase">
              About Me
            </span>
            <div className="w-8 h-px bg-blue-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bridging Interfaces with High-Performance Systems
          </h2>

          <p className="text-gray-400 leading-relaxed font-light">
            Main ek specialized multi-platform developer hun jo hardware-level
            desktop platforms se lekar dynamic search-optimized global platforms
            tak har kism ki applications code karne ka tajruba rakhta hai. MERN
            stack application systems likhne ke sath, React Native framework ke
            sath real-world robust cross-platform mobile systems aur Electron.js
            application configurations likhna meri core expertise hai.
          </p>

          <p className="text-gray-400 leading-relaxed font-light">
            Mera basic focus aisi application state management deliver karna
            hota hai jo minimum processing overheads ke sath users ko
            pixel-perfect interactive UI components responsive frames ke sath
            explore karne ka chance de.
          </p>

          {/* Micro Stats Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
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
          </div>
        </div>

        {/* About Right Layout Detail Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="bg-gray-950/60 border border-gray-900 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg">
              <BrushCleaning/>
            </div>
            <h3 className="text-base font-semibold text-white">
              Clean Architecture
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Maintainable, testable system code for long-term scalability
              without structural fragmentation.
            </p>
          </div>
          <div className="bg-gray-950/60 border border-gray-900 p-6 rounded-2xl space-y-3 mt-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-lg">
              <Zap/>
            </div>
            <h3 className="text-base font-semibold text-white">
              Performance Tuning
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Ensuring sub-second render metrics, seamless mobile FPS, and
              optimized OS processes.
            </p>
          </div>
          <div className="bg-gray-950/60 border border-gray-900 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-lg">
              <Target/>
            </div>
            <h3 className="text-base font-semibold text-white">
              SEO Driven Focus
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Leveraging SSR frameworks like Next.js for precise crawling
              layouts and rich rich snippets.
            </p>
          </div>
          <div className="bg-gray-950/60 border border-gray-900 p-6 rounded-2xl space-y-3 mt-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 font-bold text-lg">
              <Workflow />
            </div>
            <h3 className="text-base font-semibold text-white">
              System Integration
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Interfacing cross-platform mobile components and secure IPC
              bridges in Electron.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
