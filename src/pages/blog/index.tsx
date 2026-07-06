import { getReadTime } from "@/utils/readTime";
import { getBlogs } from "@/constants/quries";
import BlogCard from "@/components/BlogCard";
import Head from "next/head";


const domain = "https://hasnainalam.com";
const pageUrl = `${domain}/blog`;
const title = "Blog | Hasnain Alam - Full-Stack MERN Developer";
const description =
  "Insights and technical articles on MERN Stack, Next.js, React Native, and Electron.js development, covering performance, architecture, and SEO best practices.";

type Props = {
  posts: any[];
};

const Blog = ({ posts }: Props) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${pageUrl}/#blog`,
    url: pageUrl,
    name: title,
    description: description,
    isPartOf: { "@id": `${domain}/#website` },
    author: { "@id": `${domain}/#person` },
    blogPost: posts?.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${domain}/blog/${post.slug}`,
      image:
        post.featuredImage?.node?.sourceUrl || `${domain}/Hasnain-alam.png`,
      datePublished: post.date,
      author: { "@id": `${domain}/#person` },
    })),
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${domain}/Hasnain-alam.png`} />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${domain}/Hasnain-alam.png`} />
        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-10 text-gray-300 font-light leading-relaxed sm:text-base max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-20">
        <section className="border-b border-gray-900 pb-8 mb-12 pt-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-center">
            My Blog
          </h1>
        </section>

        <section>
          {posts?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts?.map((post) => (
                <BlogCard
                  key={post.slug}
                  post={{
                    ...post,
                    readTime: getReadTime(post.excerpt),
                    image: post.featuredImage?.node?.sourceUrl || "",
                    category:
                      post.categories?.nodes[0]?.name || "Uncategorized",
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
      </div>
    </>
  );
};
export const getStaticProps = async () => {
  const blogRes = await getBlogs(10);
  const posts = blogRes.data?.data?.posts?.nodes || [];
  return { props: { posts } };
};
export default Blog;
