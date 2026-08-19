import ProjectCard from "./ProjectCard";


type Props = {
  projects: any[];
};
export default function Projects({ projects }: Props) {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative"
    >
      <div className="mb-16 space-y-6">
        <div className="flex items-center space-x-3">
          <span className="text-blue-500 font-semibold tracking-widest text-xs uppercase">
            Case Studies
          </span>
          <div className="w-8 h-px bg-blue-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Recent MERN Stack &amp; Next.js Projects
        </h2>
        <p className="text-gray-300 text-base max-w-2xl mt-4 font-light">
          A selection of full-stack web, mobile, and desktop applications built
          with the MERN Stack, Next.js, React Native, and Electron.js — each
          demonstrating clean architecture and production-ready code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            proj={{
              ...proj,
              image:
                proj?.featuredImage?.node?.sourceUrl ||
                "/api/placeholder/400/250",
              demo: proj?.projectDetails?.liveurl || "#",
              tags: proj?.tags?.nodes?.map((tag: any) => tag.name) || [],
            }}
          />
        ))}
      </div>
    </section>
  );
}
