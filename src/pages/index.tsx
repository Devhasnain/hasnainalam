import { getBlogs, getProjects } from "@/constants/quries";
import HomeSchema from "@/components/HomeSchema";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Faqs from "@/components/Faqs";
import Blog from "@/components/Blog";
import Head from "next/head";


type Props = {
  posts: any[];
  projects: any[];
};

const Home = ({ posts, projects }: Props) => {
  return (
    <>
     <Head>
        {/* Basic SEO */}
        <title>
          Hasnain Alam | Full-Stack MERN, Next.js & Mobile Developer
        </title>

        <meta
          name="description"
          content="Professional portfolio of Hasnain Alam, a Full-Stack MERN, Next.js, React Native, Electron.js, and NestJS developer building high-performance web, mobile, and desktop applications."
        />

        <meta
          name="keywords"
          content="Hasnain Alam, Hasnain Alam Developer, MERN Stack Developer, Full Stack Developer, Next.js Developer, React.js Developer, React Native Developer, Electron.js Developer, NestJS Developer, Node.js Developer, MongoDB Developer, TypeScript Developer, JavaScript Developer, Portfolio Website, Frontend Developer, Backend Developer, API Developer, Web Developer Pakistan"
        />

        <meta name="author" content="Hasnain Alam" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href="https://hasnainalam.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Hasnain Alam | Full-Stack MERN, Next.js & Mobile Developer"
        />

        <meta
          property="og:description"
          content="Explore modern web, mobile, and desktop applications built by Hasnain Alam using MERN Stack, Next.js, React Native, Electron.js, NestJS, and TypeScript."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://hasnainalam.com/"
        />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />
        <meta property="og:locale" content="en_US" />

        <meta
          property="og:image"
          content="https://hasnainalam.com/Hasnain-alam-og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Hasnain Alam Full-Stack Developer Portfolio"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hasnain Alam | Full-Stack MERN, Next.js & Mobile Developer"
        />
        <meta
          name="twitter:description"
          content="Professional MERN Stack, Next.js, React Native, Electron.js & NestJS developer portfolio."
        />
        <meta
          name="twitter:image"
          content="https://hasnainalam.com/Hasnain-alam-og-image.png"
        />

        {/* Theme */}
        <meta name="theme-color" content="#0A0A0A" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <HomeSchema />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects projects={projects} />
      <Blog posts={posts} />
      <Faqs />
      <Contact />
    </>
  );
};

export const getStaticProps = async () => {
  const blogRes = await getBlogs(6);
  const posts = blogRes.data?.data?.posts?.nodes || [];

  const projsRes = await getProjects(6);
  const projects = projsRes.data?.data?.projects?.nodes || [];
  return { props: { posts, projects } };
};

export default Home;
