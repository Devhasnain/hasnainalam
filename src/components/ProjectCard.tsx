import { stripHtml } from "@/utils/stripHtml";
import Image from "next/image";
import Link from "next/link";


type Props = {
  proj: {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    tags: string[];
    demo: string;
  };
};
const ProjectCard = ({ proj }: Props) => {
  return (
    <div className="group bg-gray-950/60 border border-gray-900 hover:border-blue-500/30 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl">
      {/* 1. PROJECT IMAGE CONTAINER */}
      <div className="relative w-full h-48 sm:h-52 bg-gray-900 overflow-hidden border-b border-gray-900/80">
        {/* Gradient Overlay for Sleek Cinematic Look */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Blue Glow on Hover */}
        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 z-10 transition-colors duration-300" />

        <Image
          src={proj?.image || "/api/placeholder/400/250"}
          alt={`${proj?.title} Showcase Preview`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          width={400}
          height={400}
        />
      </div>

      {/* 2. CARD CONTENT CONTAINER */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
         
         <Link href={`/projects/${proj?.slug}`}>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
            {proj?.title}
          </h3>
         </Link>

          {/* Excerpt / Description */}
          <p className="text-gray-400 leading-relaxed font-light line-clamp-3">
            {stripHtml(proj?.excerpt)}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {proj?.tags?.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[12px] font-mono px-2.5 py-1 rounded-md bg-gray-900 text-gray-400 border border-gray-800 group-hover:border-gray-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 3. INTERACTION CALL-TO-ACTIONS */}
      <div className="px-6 pb-6 pt-4 border-t border-gray-900/40 bg-gray-950/20">
        <Link
          href={proj?.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
};


export default ProjectCard;