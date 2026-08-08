import { stripHtml } from "@/utils/stripHtml";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";


type Props = {
  post: {
    title: string;
    image: string;
    category: string;
    date: string;
    slug: string;
    excerpt: string;
    readTime: string;
  };
};

const BlogCard = ({ post }: Props) => {
  return (
    <article className="group bg-gray-950/40 hover:bg-gray-950/70 border border-gray-900 hover:border-blue-500/20 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl">
      {/* 1. TOP COVER IMAGE SECTION */}
      <div className="relative w-full h-48 bg-gray-900 overflow-hidden border-b border-gray-900/60">
        {/* Subtle Dark Gradient Overlay for Professional Aesthetics */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-300" />

        <Image
          src={post.image || "/api/placeholder/400/250"}
          title={post.title}
          alt={`${post.title} architectural concept blueprint`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          width={400}
          height={400}
        />

        {/* Absolute Floating Category Badge on Image */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </div>

      {/* 2. CORE TEXT CONTENT PIPELINE */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* SEO Optimized Semantic Date Element */}
          <div className="text-[11px] text-gray-500 font-mono tracking-wide">
            <time className="text-gray-400" dateTime={post?.date}>
              {moment.utc(post?.date).format("MMMM D, YYYY")}
            </time>
          </div>

          {/* Main Context Title Heading */}
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt Summary Content */}
          <p className="text-gray-400 text-xs leading-relaxed font-light line-clamp-3">
            {stripHtml(post.excerpt)}
          </p>
        </div>
      </div>

      {/* 3. FOOTER METRICS & CALL TO ACTION */}
      <div className="px-6 pb-6 pt-4 flex items-center justify-between border-t border-gray-900/40 bg-gray-950/20">
        {/* Metric Parameter */}
        <div className="flex items-center space-x-1.5 text-xs text-gray-500">
          <span>⏱️</span>
          <span className="font-medium">{post.readTime}</span>
        </div>

        {/* Interactive Link Action */}
        <Link
          href={`/blog/${post.slug}`}
          aria-label={`Read fully detailed article regarding ${post.title}`}
          className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1 group/btn"
        >
          <span>Read Article</span>
          <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-200">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
