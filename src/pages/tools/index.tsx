import ToolCard from "@/components/ToolCard";
import { tools } from "@/constants/tools";
import Head from "next/head";


const domain = "https://hasnainalam.com";
const pageUrl = `${domain}/tools`;
const title = "Free Online Tools | Hasnain Alam - Full-Stack MERN Developer";
const description =
  "Free, fast, browser-based tools for developers and writers — word counter, JSON formatter, case converter and more. No sign-up required.";

const Tools = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}/#tools`,
    url: pageUrl,
    name: title,
    description: description,
    isPartOf: { "@id": `${domain}/#website` },
    author: { "@id": `${domain}/#person` },
    hasPart: tools.map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      url: `${domain}/tools/${tool.slug}`,
      applicationCategory: tool.category,
      description: tool.shortDescription,
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
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
        <meta
          property="og:image"
          content={`${domain}/Hasnain-alam-og-image.png`}
        />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${domain}/Hasnain-alam-og-image.png`}
        />
        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-10 text-gray-300 font-light leading-relaxed sm:text-base max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <section className="border-b border-gray-900 pb-8 mb-12 pt-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-center">
            Free Tools
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Small, fast utilities I built and use myself — no sign-up, no
            tracking, runs right in your browser.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Tools;
