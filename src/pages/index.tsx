import { getBlogs, getProjects } from "@/constants/quries";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import JsonSchema from "@/seo/home/json";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Faqs from "@/components/Faqs";
import Blog from "@/components/Blog";
import Meta from "@/seo/home/meta";


type Props = {
  posts: any[];
  projects: any[];
};

const Home = ({ posts, projects }: Props) => {
  return (
    <>
      <Meta />
      <JsonSchema />
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
