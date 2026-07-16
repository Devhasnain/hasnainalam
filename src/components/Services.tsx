import { serviceArray } from "@/constants/services";

import ServiceCard from "./ServiceCard";


export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1 mb-3">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Solutions Portfolio
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Services I Deliver
        </h2>
        <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4 font-light">
          End-to-end MERN Stack, React Native, and Electron.js development —
          engineered for performance, scalability, and seamless user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceArray.slice(0,6).map((svc, idx) => (
          <ServiceCard svc={svc} key={idx} />
        ))}
      </div>
    </section>
  );
}
