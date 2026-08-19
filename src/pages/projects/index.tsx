import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/constants/quries";
import Head from "next/head";


const domain = "https://hasnainalam.com";
const pageUrl = `${domain}/projects`;
const title = "Projects | MERN Stack & Next.js Developer Portfolio | Hasnain Alam";
const description =
  "A showcase of full-stack projects built with MERN Stack, Next.js, React Native, and Electron.js — covering web, mobile, and desktop platforms.";

type Props = {
  projects: any[];
};

const Projects = ({ projects }: Props) => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}/#projects`,
      url: pageUrl,
      name: title,
      description: description,
      isPartOf: { "@id": `${domain}/#website` },
      about: { "@id": `${domain}/#person` },
      hasPart: projects?.map((project) => ({
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.excerpt?.replace(/<[^>]*>/g, "").slice(0, 160),
        url: `${domain}/projects/${project.slug}`,
        image:
          project.featuredImage?.node?.sourceUrl || `${domain}/Hasnain-alam.png`,
        creator: { "@id": `${domain}/#person` },
        applicationCategory: "WebApplication",
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: domain,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${domain}/Hasnain-alam-projects-cover.webp`} />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${domain}/Hasnain-alam-projects-cover.webp`} />
        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-10 text-gray-300 font-light leading-relaxed sm:text-base max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <section className="border-b border-gray-900 pb-8 mb-12 pt-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-center">
            MERN Stack &amp; Next.js Developer Portfolio
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A collection of production applications built with the MERN
            Stack, Next.js, React Native, and Electron.js — spanning web
            platforms, mobile apps, and desktop software.
          </p>
        </section>

        <section>
          {projects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects?.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  proj={{
                    ...project,
                    image:
                      project?.featuredImage?.node?.sourceUrl ||
                      "/api/placeholder/400/250",
                    demo: project?.projectDetails?.liveurl || "#",
                    tags:
                      project?.tags?.nodes?.map((tag: any) => tag.name) || [],
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-950/20 border border-gray-900 rounded-2xl">
              <div className="text-2xl text-gray-600 mb-2">
                No Projects Found
              </div>
              <p className="text-gray-500 text-xs">
                New builds are on the way — check back soon.
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const projectsRes = await getProjects(20);
  const projects = projectsRes.data?.data?.projects?.nodes || [];
  return {
    props: { projects },
    revalidate: 300,
  };
};

export default Projects;