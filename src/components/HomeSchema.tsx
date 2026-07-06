import { faqsData } from "@/constants/faqs";


const domain = "https://hasnainalam.com";

export default function HomeSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${domain}/#person`,
      name: "Hasnain Alam",
      alternateName: [
        "Hasnain",
        "Hasnain Alam Developer",
        "Hasnain Alam MERN Developer",
      ],
      url: domain,
      image: `${domain}/Hasnain-alam.png`,
      jobTitle: "Full-Stack MERN Developer",
      description:
        "Full-Stack Developer specializing in MERN Stack, Next.js, React Native, Electron.js, NestJS, TypeScript, Node.js and MongoDB.",
      knowsAbout: [
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
        "React Native",
        "Electron.js",
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
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      knowsLanguage: ["English", "Urdu"],
      sameAs: [
        "https://github.com/YOUR_GITHUB",
        "https://linkedin.com/in/YOUR_LINKEDIN",
        "https://x.com/YOUR_X",
        "https://www.instagram.com/YOUR_INSTAGRAM",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      name: "Hasnain Alam",
      url: domain,
      logo: `${domain}/logo.png`,
      image: `${domain}/profile.jpg`,
      description: "Personal brand of Full-Stack Developer Hasnain Alam.",
    },

    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${domain}/#services`,
      name: "Hasnain Alam Development Services",
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
        "Portfolio Website Development",
        "Landing Page Development",
        "Business Website Development",
        "WordPress Headless Development",
        "Website Optimization",
        "SEO Optimization",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      name: "Hasnain Alam Portfolio",
      url: domain,
      description:
        "Official portfolio of Full-Stack MERN Developer Hasnain Alam.",
      inLanguage: "en",
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${domain}/#homepage`,
      url: domain,
      name: "Hasnain Alam | Full Stack Developer",
      isPartOf: {
        "@id": `${domain}/#website`,
      },
      about: {
        "@id": `${domain}/#person`,
      },
      description:
        "Portfolio showcasing skills, services, projects, blogs and contact information of Full-Stack Developer Hasnain Alam.",
    },

    [
      {
        "@context": "https://schema.org",
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
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
