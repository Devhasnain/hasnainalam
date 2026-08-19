import { serviceArray } from "@/constants/services";

import ServiceCard from "./ServiceCard";


export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative"
    >
      <div className="text-start mb-16 space-y-6">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Development Services
          </span>
            <div className="w-8 h-px bg-blue-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          MERN Stack &amp; Next.js Development Services
        </h2>
        <p className="text-gray-300 text-base max-w-2xl mt-4 font-light">
          End-to-end MERN Stack, Next.js, React Native, and Electron.js
          development for businesses worldwide — engineered for performance,
          scalability, and seamless user experience across web, mobile, and
          desktop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceArray.slice(0, 6).map((svc, idx) => (
          <ServiceCard svc={svc} key={idx} />
        ))}
      </div>
    </section>
  );
}
