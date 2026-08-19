import Head from 'next/head';


const Meta = () => {
  return (
    <Head>
        {/* Basic SEO */}
        <title>Hasnain Alam | Full-Stack MERN & Next.js Developer</title>

        <meta
          name="description"
          content="Hasnain Alam is a full-stack developer specializing in MERN, Next.js, React Native & Electron.js — building fast, scalable web, mobile, and desktop apps. View projects or hire for your next build."
        />

        <meta name="author" content="Hasnain Alam" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href="https://hasnainalam.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Hasnain Alam | Full-Stack MERN & Next.js Developer"
        />
        <meta
          property="og:description"
          content="Explore modern web, mobile, and desktop applications built with MERN Stack, Next.js, React Native & Electron.js. Available for freelance & full-time roles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hasnainalam.com/" />
        <meta property="og:site_name" content="Hasnain Alam Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://hasnainalam.com/Hasnain-alam-og-image.webp"
        />
        <meta property="profile:first_name" content="Hasnain" />
        <meta property="profile:last_name" content="Alam" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Hasnain Alam - Full-Stack MERN & Next.js Developer Portfolio"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hasnain Alam | Full-Stack MERN & Next.js Developer"
        />
        <meta
          name="twitter:description"
          content="Full-stack developer building high-performance apps with MERN, Next.js, React Native & Electron.js."
        />
        <meta
          name="twitter:image"
          content="https://hasnainalam.com/Hasnain-alam-og-image.webp"
        />

        {/* Theme */}
        <meta name="theme-color" content="#0A0A0A" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
  )
}

export default Meta