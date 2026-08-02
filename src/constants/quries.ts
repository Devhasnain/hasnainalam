import axiosInstance from "@/services/axiosInstance";


export const queries = {
  getBlogs: (first: number = 6) => `query GetPosts($first: Int = ${first}) {
    posts(first: $first) {
    nodes {
      id
      databaseId
      title
      slug
      date
      excerpt

      featuredImage {
        node {
          sourceUrl
          altText
          title
          description
        }
      }

      categories {
        nodes {
          id
          name
          slug
        }
      }
    }
  }
}`,
  getProjects: (first: number = 6) => `query GetPosts($first: Int = ${first}) {
  projects(first: $first) {
    nodes {
      title
      slug
      excerpt  
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      projectDetails{
        liveurl
      }
    }
  }
}`,
  getPostsSlugs: `query GetAllPostSlugs {
  posts(first: 1000) {
    nodes {
      slug
    }
  }
}`,
  getPostBySlugQuery: (slug: string) => `query GetPostBySlug{
  post(id: "${slug}", idType: SLUG) {
   title
    slug
    date
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
  }
}
`,
  getProjectsSlugs: `query GetProjectSlugs {
  projects(first: 1000) {
    nodes {
      slug
    }
  }
}`,
  getProjectBySlugQuery: (slug: string) => `query GetProjectBySlug {
  project(id: "${slug}", idType: SLUG) {
    id
    title
    slug
    date
    content
    excerpt

    featuredImage {
      node {
        sourceUrl
        altText
      }
    }

    projectDetails {
      liveurl
      githuburl
    }

    tags {
      nodes {
        name
        slug
      }
    }

    categories {
        nodes {
          id
          name
          slug
        }
      }
  }
}`
}

export const getBlogs = async (n = 6) => await axiosInstance.post('', {
  query: queries.getBlogs(n)
});

export const getProjects = async (n = 6) => await axiosInstance.post('', {
  query: queries.getProjects(n)
});

export const getPostsSlugs = async () => await axiosInstance.post('', {
  query: queries.getPostsSlugs
});

export const getPostBySlug = async (slug: string) => await axiosInstance.post('', {
  query: queries.getPostBySlugQuery(slug)
});

export const getProjectsSlugs = async () => await axiosInstance.post('', {
  query: queries.getProjectsSlugs
});
export const getProjectBySlug = async (slug: string) => await axiosInstance.post('', {
  query: queries.getProjectBySlugQuery(slug)
});