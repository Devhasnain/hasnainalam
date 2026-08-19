import { faqsData } from "@/constants/faqs";


const domain = "https://hasnainalam.com";

export default function JsonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${domain}/#person`,
        name: "Hasnain Alam",
        alternateName: [
          "Hasnain",
          "Hasnain Alam Developer",
          "Hasnain Alam MERN Developer",
          "Hasnain Alam Next.js Developer",
        ],
        url: domain,
        image: `${domain}/Hasnain-alam.png`,
        jobTitle: "Full-Stack MERN & Next.js Developer",
        description:
          "Full-Stack Developer specializing in MERN Stack, Next.js, React Native, Electron.js, NestJS, TypeScript, Node.js and MongoDB.",
        knowsAbout: [
          "Full Stack Web Development",
          "MERN Stack Development",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "NestJS",
          "MongoDB",
          "Mongoose",
          "GraphQL",
          "REST API",
          "React Native Development",
          "Electron.js Development",
          "Mobile App Development",
          "Firebase",
          "Redux Toolkit",
          "Tailwind CSS",
          "WordPress Headless CMS",
          "SEO",
          "Git",
          "GitHub",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Full Stack Software Developer",
        },
        knowsLanguage: ["English", "Urdu"],
        sameAs: [
          "https://github.com/devhasnain",
          "https://linkedin.com/in/devhasnain",
          "https://fiverr.com/hasnainalam462",
        ],
      },

      {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        name: "Hasnain Alam Portfolio",
        url: domain,
        description:
          "Official portfolio of Hasnain Alam, a Full-Stack MERN & Next.js Developer.",
        inLanguage: "en",
        publisher: {
          "@id": `${domain}/#person`,
        },
      },

      {
        "@type": "ProfessionalService",
        "@id": `${domain}/#services`,
        name: "Hasnain Alam Development Services",
        url: `${domain}/services`,
        provider: {
          "@id": `${domain}/#person`,
        },
        areaServed: "Worldwide",
        serviceType: [
          "Full Stack Web Development",
          "MERN Stack Development",
          "Next.js Development",
          "React Development",
          "Backend Development",
          "Node.js API Development",
          "NestJS Development",
          "React Native Development",
          "Electron.js Development",
          "Landing Page Development",
          "SaaS Website Development",
          "WordPress Headless Development",
          "SEO Optimization",
        ],
      },

      {
        "@type": "WebPage",
        "@id": `${domain}/#homepage`,
        url: domain,
        name: "Hasnain Alam | Full-Stack MERN & Next.js Developer",
        description:
          "Portfolio showcasing skills, services, projects, blogs and contact information of Hasnain Alam, a Full-Stack MERN & Next.js Developer.",
        isPartOf: {
          "@id": `${domain}/#website`,
        },
        about: {
          "@id": `${domain}/#person`,
        },
        mainEntity: {
          "@id": `${domain}/#faq`,
        },
      },

      {
        "@type": "FAQPage",
        "@id": `${domain}/#faq`,
        mainEntity: faqsData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}