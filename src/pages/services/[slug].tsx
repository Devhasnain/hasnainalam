import { serviceIconMap } from "@/utils/serviceIconMap";
import { GetStaticProps, GetStaticPaths } from "next";
import { serviceArray } from "@/constants/services";
import Link from "next/link";
import Head from "next/head";


interface Props {
  service: any;
}

const domain = "https://hasnainalam.com";

const ServiceDetail = ({ service }: Props) => {
  if (!service) return null;

  const pageUrl = `${domain}/services/${service.slug}`;
  const imageUrl = `${domain}/Hasnain-alam-og-image.png`;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Person",
      name: "Hasnain Alam",
      url: domain,
    },
    areaServed: "Worldwide",
    serviceType: service.title,
    url: pageUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${domain}/services`,
      },
      { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
    ],
  };

  return (
    <>
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        <article className="space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 font-bold tracking-wider uppercase border border-blue-500/20">
                Service
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed italic border-l-2 border-blue-500/40 pl-4">
              {service.shortDesc}
            </p>
          </header>

          <div className="prose prose-invert max-w-none pt-2 text-gray-300 font-light leading-relaxed space-y-6">
            <p className="text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {service.techStack?.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-semibold bg-gray-900 border border-gray-800 text-blue-400 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              What&apos;s Included
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features?.map((feature: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-300 bg-gray-950/40 border border-gray-900 rounded-xl p-4"
                >
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <footer className="mt-12 pt-8 border-t border-gray-900 flex items-center justify-between gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all"
            >
              Get a Quote &rarr;
            </Link>

            <Link
              href="/services"
              className="px-4 py-2 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 text-xs font-bold text-gray-300 rounded-xl transition-all"
            >
              &larr; Back to Services
            </Link>
          </footer>
        </article>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = serviceArray.map((svc) => ({
    params: { slug: svc.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const service = serviceArray.find((s) => s.slug === slug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service },
  };
};

export default ServiceDetail;
