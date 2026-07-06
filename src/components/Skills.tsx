import { Circle, CircleCheck } from 'lucide-react';
import { skillsData } from "@/constants/skills";
import { useState } from 'react';


type SkillCategory = 'frontend' | 'backend' | 'mobile-desktop' | 'tools-devops';

const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Skills Left Summary Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-blue-500 font-semibold tracking-widest text-xs uppercase">Engine Core</span>
              <div className="w-8 h-px bg-blue-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              My Tactical Stack Proficiency
            </h2>
            <p className="text-gray-400 leading-relaxed font-light">
              Mera core target aisi technology pipelines ke sath develop karna hai jo direct code quality or execution index ko check karti hain. 
            </p>
            <p className="text-gray-400 leading-relaxed font-light">
              Category tabs par click karke aap meri specific stack details ko dynamically screen par verify kar sakte hain.
            </p>

            {/* Interactive Dynamic Tabs Button Layout */}
            <div className="flex flex-col space-y-3 pt-4">
              {(['frontend', 'backend', 'mobile-desktop', 'tools-devops'] as SkillCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-3.5 rounded-xl text-left font-semibold text-sm transition-all duration-300 border flex items-center justify-between ${
                    activeTab === cat
                      ? 'bg-blue-500/10 border-blue-500/40 text-blue-400 shadow-[0_4px_20px_rgba(59,130,246,0.15)]'
                      : 'bg-gray-950/40 border-gray-900 text-gray-400 hover:text-white hover:border-gray-800'
                  }`}
                >
                  <span className="capitalize">{cat.replace('-', ' & ')}</span>
                  <span>{activeTab === cat ? <CircleCheck/> : <Circle/>}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Right Interactive Level Meter Cards */}
          <div className="lg:col-span-7 bg-gray-950/50 border border-gray-900 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <span className="capitalize text-blue-400">{activeTab.replace('-', ' & ')}</span>
              <span className="text-gray-600">/</span>
              <span className="text-sm font-medium text-gray-400">Core Metrics</span>
            </h3>

            <div className="space-y-6">
              {skillsData[activeTab].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-200">{skill.name}</span>
                    <span className="font-bold text-blue-400">{skill.level}%</span>
                  </div>
                  {/* Dynamic Progress Indicator Container */}
                  <div className="w-full h-2.5 bg-gray-900 rounded-full overflow-hidden p-px">
                    <div
                      className="h-full bg-linear-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Architectural Extra Note */}
            <div className="bg-gray-900/40 p-4 rounded-xl border border-gray-900 text-xs text-gray-500 leading-relaxed">
              * Note: High parameters denote real-world enterprise architectures implemented, tested, and actively managed under production scenarios.
            </div>
          </div>

        </div>
      </section>
  )
}

export default Skills