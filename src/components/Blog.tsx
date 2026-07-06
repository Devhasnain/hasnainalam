import { getReadTime } from "@/utils/readTime";

import BlogCard from "./BlogCard";


type Props = {
  posts: any[] | [];
};

const Blog = ({ posts }: Props) => {


  return (
    <>
      <section
        id="blog"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative"
      >
        <div className="mb-16">
            <div className="flex items-center space-x-3">
              <span className="text-blue-500 font-semibold tracking-widest text-xs uppercase">
                Knowledge Stack
              </span>
              <div className="w-8 h-px bg-blue-500" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Publications & Insights
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl font-light">
              Engaging architectural thoughts written with SEO optimization rules
              in mind to explore performance solutions, client acquisition, and
              native interfaces.
            </p>
        </div>

        {posts?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <BlogCard
                key={post.slug}
                post={{
                  ...post,
                  readTime: getReadTime(post.excerpt),
                  image: post.featuredImage?.node?.sourceUrl || "",
                  category: post.categories?.nodes[0]?.name || "Uncategorized",
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-950/20 border border-gray-900 rounded-2xl">
            <div className="text-2xl text-gray-600 mb-2">
              No Publication Found
            </div>
            <p className="text-gray-500 text-xs">
              Try different key phrases to discover tactical knowledge.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Blog;