import { serviceArray } from "@/constants/services";
import ServiceCard from "@/components/ServiceCard";
import Head from "next/head";


const domain = "https://hasnainalam.com";
const pageUrl = `${domain}/services`;
const title =
  "Services | Hasnain Alam - MERN, React Native & Electron.js Developer";
const description =
  "Explore development services offered by Hasnain Alam — MERN Stack web apps, React Native mobile apps, and Electron.js desktop applications.";

const Services = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}/#services`,
    url: pageUrl,
    name: title,
    description: description,
    isPartOf: { "@id": `${domain}/#website` },
    about: { "@id": `${domain}/#person` },
    hasPart: serviceArray?.map((svc) => ({
      "@type": "Service",
      name: svc.title,
      url: `${domain}/services/${svc.slug}`,
      description: svc.shortDesc,
      provider: { "@id": `${domain}/#person` },
      areaServed: "Worldwide",
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
        <meta property="og:image" content={`${domain}/Hasnain-alam-services-cover.webp`} />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${domain}/Hasnain-alam-services-cover.webp`} />
        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-10 text-gray-300 font-light leading-relaxed sm:text-base max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <section className="border-b border-gray-900 pb-8 mb-12 pt-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-center">
            My Services
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            End-to-end development services across web, mobile, and desktop
            platforms — built with modern, scalable tech stacks.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceArray?.map((svc, idx) => (
              <ServiceCard key={idx} svc={svc} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
