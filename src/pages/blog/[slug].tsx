import { getPostBySlug, getPostsSlugs } from "@/constants/quries";
import { stripHtml } from "@/utils/stripHtml";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import moment from "moment";
import clsx from "clsx";


interface Props {
  post: any;
}

const domain = "https://hasnainalam.com";

const BlogDetail = ({ post }: Props) => {
  if (!post) return null;

  const pageUrl = `${domain}/blog/${post.slug}`;
  const cleanExcerpt = stripHtml(post?.excerpt);
  const imageUrl =
    post?.featuredImage?.node?.sourceUrl || `${domain}/Hasnain-alam.png`;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}/#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    headline: post?.title,
    description: cleanExcerpt,
    image: imageUrl,
    datePublished: post?.date,
    dateModified: post?.modified || post?.date,
    author: {
      "@type": "Person",
      name: "Hasnain Alam",
      url: domain,
    },
    publisher: {
      "@type": "Organization",
      name: "Hasnain Alam",
      logo: { "@type": "ImageObject", url: `${domain}/logo-name.png` },
    },
  };

  return (
    <>
      <Head>
        <title>{`${post.title} | Hasnain Alam Blog`}</title>
        <meta name="description" content={cleanExcerpt} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={cleanExcerpt} />
        <meta property="og:image" content={imageUrl} />
        <meta property="article:published_time" content={post?.date} />
        <meta property="article:author" content="Hasnain Alam" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={cleanExcerpt} />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        <article className="space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 font-bold tracking-wider uppercase border border-blue-500/20">
                {post?.categories?.nodes[0]?.name || "Uncategorized"}
              </span>
              <span className="text-gray-600 font-mono">●</span>
              <time className="text-gray-400" dateTime={post?.date}>
                {moment.utc(post?.date).format("MMMM D, YYYY")}
              </time>
              {/* <span className="text-gray-400 font-medium flex items-center gap-1">
                ⏱️{" "}
                {typeof window !== "undefined"
                  ? getReadTime(post?.content)
                  : ""}
              </span> */}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {post?.title}
            </h1>

            <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed italic border-l-2 border-blue-500/40 pl-4">
              {cleanExcerpt}
            </p>
          </header>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-900 shadow-2xl bg-gray-950">
            <Image
              src={imageUrl}
              alt={
                post?.featuredImage?.node?.altText ||
                post?.title ||
                "Hasnain Alam post image"
              }
              className="w-full h-full object-cover object-center"
              priority
              fill
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div
            className={clsx(
              "prose",
              "pt-6",
              "text-gray-300",
              "font-light",
              "leading-relaxed",
              "space-y-6",
              "prose-headings:text-white",
              "prose-headings:font-bold",
              "prose-headings:tracking-tight",
              "prose-h2:text-2xl",
              "prose-h2:pt-4",
              "prose-h3:text-xl",
              "prose-h3:text-blue-400",
              "prose-p:text-sm",
              "sm:prose-p:text-base",
              "prose-p:leading-relaxed",
              "prose-strong:text-white",
              "prose-strong:font-semibold",
              "prose-a:text-white",
            )}
            // className="prose pt-6 text-gray-300 font-light leading-relaxed space-y-6
            //   prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            //   prose-h2:text-2xl prose-h2:pt-4 prose-h3:text-xl prose-h3:text-blue-400
            //   prose-p:text-sm sm:prose-p:text-base prose-p:leading-relaxed
            //   prose-strong:text-white prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          />

          <footer className="mt-12 pt-8 border-t border-gray-900 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-tr from-blue-500 to-cyan-400 p-px">
                <div className="w-full h-full bg-[#080b13] rounded-full flex items-center justify-center text-xl font-bold">
                  🎯
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Written by Hasnain Alam
                </h4>
                <p className="text-xs text-gray-500">
                  Full-Stack Multiplatform Architecture Specialist
                </p>
              </div>
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 text-xs font-bold text-gray-300 rounded-xl transition-all"
            >
              &larr; Back to Publications
            </Link>
          </footer>
        </article>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await getPostsSlugs();
  const paths =
    res.data?.data?.posts?.nodes.map((post: { slug: string }) => ({
      params: { slug: post.slug },
    })) || [];

  return {
    paths,
    fallback: "blocking", // naya post add hone par crash na ho, on-demand generate ho
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const res = await getPostBySlug(slug);
  const post = res.data?.data?.post;

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 300, // ISR - 5 min baad background regenerate
  };
};

export default BlogDetail;
