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
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1 mb-3">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Case Studies
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Recent Shipped Applications
        </h2>
        <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4 font-light">
          Each system card demonstrates code modularity, precise system
          boundaries, and structural clean design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} proj={{
            ...proj,
            image: proj?.featuredImage?.node?.sourceUrl || "/api/placeholder/400/250",
            demo:proj?.projectDetails?.liveurl || "#",
            tags:proj?.tags?.nodes?.map((tag:any) => tag.name) || []
          }} />
        ))}
      </div>
    </section>
  );
}
