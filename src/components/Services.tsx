import { Monitor, Smartphone, MonitorSmartphone } from "lucide-react";


const services = [
  {
    title: "Web Application Development",
    desc: "Building scalable, SEO-friendly web applications with the MERN Stack, Next.js, TypeScript, and Tailwind CSS — engineered for pristine performance and search visibility.",
    icon: <Monitor aria-hidden="true" />,
  },
  {
    title: "Mobile App Development",
    desc: "Building native iOS and Android apps with React Native, leveraging fluid animations and native device feature integrations.",
    icon: <Smartphone aria-hidden="true" />,
  },
  {
    title: "Cross-Platform Desktop Apps",
    desc: "Developing powerful cross-platform desktop software with Electron.js, ensuring optimized native OS-level compatibility and performance.",
    icon: <MonitorSmartphone aria-hidden="true" />,
  },
];

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
          engineered for performance, scalability, and seamless user
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="group p-8 bg-gray-950/50 hover:bg-gray-950/80 border border-gray-900 hover:border-blue-500/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors" />
            <div className="p-3 bg-gray-900 rounded-xl w-max mb-6 group-hover:scale-110 transition-transform">
              {svc.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              {svc.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}