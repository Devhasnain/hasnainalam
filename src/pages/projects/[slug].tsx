import { getProjectBySlug, getProjectsSlugs } from "@/constants/quries";
import { stripHtml } from "@/utils/stripHtml";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


interface Props {
  project: any;
}

const domain = "https://hasnainalam.com";

const ProjectDetail = ({ project }: Props) => {
  if (!project) return null;

  const pageUrl = `${domain}/projects/${project.slug}`;
  const cleanExcerpt = stripHtml(project?.excerpt);
  const imageUrl =
    project?.featuredImage?.node?.sourceUrl || `${domain}/Hasnain-alam.png`;

  // ACF fields — apne field group ke mutabiq names adjust karein
  const githubUrl = project?.projectDetails?.githuburl;
  const liveUrl = project?.projectDetails?.liveurl;
  const tags: string[] = project?.tags?.nodes?.map((tag: any) => tag.name) || [];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${pageUrl}/#project`,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    name: project?.title,
    description: cleanExcerpt,
    image: imageUrl,
    dateCreated: project?.date,
    dateModified: project?.modified || project?.date,
    creator: {
      "@type": "Person",
      name: "Hasnain Alam",
      url: domain,
    },
    keywords: tags.join(", "),
    ...(liveUrl ? { url: liveUrl } : {}),
  };

  return (
    <>
      <Head>
        <title>{`${project.title} | Hasnain Alam Projects`}</title>
        <meta name="description" content={cleanExcerpt} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={cleanExcerpt} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={cleanExcerpt} />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        <article className="space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 font-bold tracking-wider uppercase border border-blue-500/20">
                {project?.categories?.nodes[0]?.name || "Uncategorized"}
              </span>
              <span className="text-gray-600 font-mono">/</span>
              <time className="text-gray-400" dateTime={project?.date}>
                {new Date(project?.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project?.title}
            </h1>

            <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed italic border-l-2 border-blue-500/40 pl-4">
              {cleanExcerpt}
            </p>

            {/* Tech Stack Badges */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-md bg-gray-900/60 border border-gray-800 text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Links */}
            <div className="flex gap-4 pt-2">
              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold rounded-xl shadow-[0_4px_25px_rgba(59,130,246,0.35)] transition-all"
                >
                  Live Demo
                </Link>
              )}
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 text-sm font-bold text-gray-300 rounded-xl transition-all"
                >
                  View Code
                </Link>
              )}
            </div>
          </header>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-900 shadow-2xl bg-gray-950">
            <Image
              src={imageUrl}
              alt={
                project?.featuredImage?.node?.altText ||
                project?.title ||
                "Hasnain Alam project image"
              }
              className="w-full h-full object-cover object-center"
              priority
              fill
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div
            className="prose prose-invert max-w-none pt-6 text-gray-300 font-light leading-relaxed space-y-6 
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:pt-4 prose-h3:text-xl prose-h3:text-blue-400
              prose-p:text-sm sm:prose-p:text-base prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: project?.content }}
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
                  Built by Hasnain Alam
                </h4>
                <p className="text-xs text-gray-500">
                  Full-Stack Multiplatform Architecture Specialist
                </p>
              </div>
            </div>

            <Link
              href="/projects"
              className="px-4 py-2 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 text-xs font-bold text-gray-300 rounded-xl transition-all"
            >
              &larr; Back to Projects
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await getProjectsSlugs();
  const paths =
    res.data?.data?.projects?.nodes.map((project: { slug: string }) => ({
      params: { slug: project.slug },
    })) || [];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const res = await getProjectBySlug(slug);
  const project = res.data?.data?.project;

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
    revalidate: 300,
  };
};

export default ProjectDetail;
