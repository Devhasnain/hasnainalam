import { serviceIconMap } from "@/utils/serviceIconMap";
import Link from "next/link";


type Props = {
  svc: any;
};
const ServiceCard = ({ svc }: Props) => {
  const Icon = serviceIconMap[svc.icon];

  return (
    <article className="group p-8 bg-gray-950/50 hover:bg-gray-950/80 border border-gray-900 hover:border-blue-500/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors" />
      <div className="p-3 bg-gray-900 rounded-xl w-max mb-6 group-hover:scale-110 transition-transform">
       {Icon && <Icon className="w-6 h-6 text-blue-400" />}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">
        <Link
          href={`/services/${svc.slug}`}
          className="hover:text-blue-400 transition-colors"
        >
          {svc.title}
        </Link>
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed font-light">
        {svc.shortDesc}
      </p>
      <Link
        href={`/services/${svc.slug}`}
        aria-label={`Read more about ${svc.title} service`}
        className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1 group/btn mt-5"
      >
        <span>Read more</span>
        <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-200">
          &rarr;
        </span>
      </Link>
    </article>
  );
};

export default ServiceCard;
