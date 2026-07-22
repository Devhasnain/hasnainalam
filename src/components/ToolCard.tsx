import { toolsIconMap } from "@/utils/serviceIconMap";
import { Tool } from "@/constants/tools";
import Link from "next/link";


type Props = {
  tool: Tool;
};

const ToolCard = ({ tool }: Props) => {
      const Icon = toolsIconMap[tool.icon];
  return (
    <article className="group p-8 bg-gray-950/50 hover:bg-gray-950/80 border border-gray-900 hover:border-blue-500/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors" />
      <div className="p-3 bg-gray-900 rounded-xl w-max mb-6 group-hover:scale-110 transition-transform">
        {Icon && <Icon className="w-6 h-6 text-blue-400" />}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">
        <Link
          href={`/tools/${tool.slug}`}
          className="hover:text-blue-400 transition-colors"
        >
          {tool.name}
        </Link>
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3">
        {tool.description}
      </p>
      <Link
        href={`/tools/${tool.slug}`}
        aria-label={`Use tool ${tool.name}`}
        className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1 group/btn mt-5"
      >
        <span>User Tool</span>
        <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-200">
          &rarr;
        </span>
      </Link>
    </article>
  );
};

export default ToolCard;
