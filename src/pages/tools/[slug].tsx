import TimestampConverter from "@/components/tools/Timestampconverter";
import PasswordGenerator from "@/components/tools/Passwordgeneratort";
import Base64Converter from "@/components/tools/Base64converter";
import ColorConverter from "@/components/tools/Colorconverter";
import { getToolBySlug, tools, Tool } from "@/constants/tools";
import WordCounterTool from "@/components/tools/WordCounter";
import SlugGenerator from "@/components/tools/Sluggenerator";
import JsonFormatter from "@/components/tools/JsonFormatter";
import CaseConverter from "@/components/tools/Caseconverter";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";


const domain = "https://hasnainalam.com";

type Props = {
  tool: Tool;
};

const ComingSoonTool = () => (
  <div className="rounded-xl border border-dashed border-gray-800 p-10 text-center text-gray-500 text-sm">
    This tool's interface is being finished up — check back soon.
  </div>
);

const toolComponents: Record<string, () => ReactNode> = {
  "word-counter": WordCounterTool,
  "json-formatter": JsonFormatter,
  "case-converter": CaseConverter,
  "password-generator":PasswordGenerator,
  "base64-converter":Base64Converter,
  "slug-generator":SlugGenerator,
  "timestamp-converter":TimestampConverter,
  "color-converter":ColorConverter
  
};

const ToolPage = ({ tool }: Props) => {
  const pageUrl = `${domain}/tools/${tool.slug}`;
  const title = `${tool.name} - Free Online Tool | Hasnain Alam`;
  const ToolComponent = toolComponents[tool.slug] || ComingSoonTool;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}/#tool`,
    name: tool.name,
    url: pageUrl,
    applicationCategory: tool.category,
    operatingSystem: "Any",
    description: tool.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: { "@id": `${domain}/#person` },
    isPartOf: { "@id": `${domain}/#website` },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={tool.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={tool.description} />
        <meta
          property="og:image"
          content={`${domain}/Hasnain-alam-og-image.png`}
        />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={tool.description} />
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

      <div className="text-gray-300 font-light leading-relaxed sm:text-base max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <section className="pt-28 pb-8">
          <Link
            href="/tools"
            className="text-xs text-gray-500 hover:text-gray-300"
          >
            ← All tools
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 mb-3">
            {tool.name}
          </h1>
          <p className="text-gray-400 max-w-2xl">{tool.description}</p>
        </section>

        <section className="border-t border-gray-900 pt-8">
          <ToolComponent />
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: tools.map((tool) => ({ params: { slug: tool.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tool = getToolBySlug(params?.slug as string);
  if (!tool) {
    return { notFound: true };
  }
  return { props: { tool } };
};

export default ToolPage;
