
export type IService = {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  features: string[];
  metaTitle: string;
  metaDescription: string;
  faqs: {
    q: string;
    a: string;
  }[];
  externalLinks: {
    fiverr: string;
  };
} 
export const serviceArray = [
  {
    slug: "mern-stack-development",
    title: "MERN Stack Development",
    icon: "Layers",
    shortDesc:
      "Scalable full-stack web apps with MongoDB, Express, React & Node.js.",
    fullDesc:
      "Wondering what MERN stack development actually means for your project? It's a full JavaScript setup — MongoDB handling the database, Express and Node.js running the backend, and React managing everything the user sees — so the entire app runs on one language from front to back instead of stitching together mismatched technologies. I use this stack to build dashboards, e-commerce platforms, and custom SaaS tools that need to scale without turning into a mess six months in. That means clean, documented APIs, a database structured properly from day one, and a frontend that's fast in practice, not just in a demo.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "JWT Auth",
    ],
    features: [
      "Custom REST API development",
      "Database schema design & optimization",
      "Authentication & authorization systems",
      "Responsive, modern UI/UX",
      "Third-party API integrations (payment, email, etc.)",
      "Deployment & hosting setup",
    ],
    metaTitle: "MERN Stack Development Services | Hasnain Alam",
    metaDescription:
      "What is MERN stack development? MongoDB, Express, React & Node.js combined into one scalable web app — built by Hasnain Alam.",
    faqs: [
      {
        q: "What is the MERN stack used for?",
        a: "The MERN stack (MongoDB, Express, React, Node.js) is used to build full-stack web applications — everything from admin dashboards and e-commerce platforms to custom SaaS products — using JavaScript across the entire codebase.",
      },
      {
        q: "How long does it take to build a MERN stack app?",
        a: "A simple MERN app with basic CRUD functionality can take 2-4 weeks, while a more complex platform with authentication, payments, and dashboards usually takes 6-12 weeks depending on scope.",
      },
      {
        q: "Is MERN stack good for e-commerce websites?",
        a: "Yes. MERN gives you full control over the product catalog, cart logic, and checkout flow, which makes it a solid choice when off-the-shelf platforms like Shopify don't fit your requirements.",
      },
      {
        q: "What's the difference between MERN and MEAN stack?",
        a: "Both use MongoDB, Express, and Node.js. The difference is the frontend — MERN uses React, while MEAN uses Angular. React tends to have a gentler learning curve and a larger component ecosystem.",
      },
      {
        q: "Do you provide post-launch support after MERN development?",
        a: "Yes, I offer ongoing maintenance and support after launch — bug fixes, updates, and feature additions — so the app keeps running smoothly as your user base grows.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/zWYe9PE",
    },
  },
  {
    slug: "react-native-development",
    title: "React Native App Development",
    icon: "Smartphone",
    shortDesc:
      "Cross-platform mobile apps for iOS & Android from a single codebase.",
    fullDesc:
      "I build cross-platform mobile apps with React Native that deliver native-like performance on both iOS and Android from a single codebase. Whether you're launching a new app idea or enhancing an existing one, I deliver high-quality mobile experiences with clean architecture, smooth navigation, and native module integration.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux/Zustand",
      "Firebase",
      "REST/GraphQL APIs",
      "Native Modules",
    ],
    features: [
      "Cross-platform iOS & Android development",
      "Native device feature integration (camera, GPS, push notifications)",
      "State management & performance optimization",
      "App Store & Play Store deployment support",
      "Offline-first functionality",
      "Third-party SDK integrations",
    ],
    metaTitle: "React Native App Development Services | Hasnain Alam",
    metaDescription:
      "Cross-platform mobile app development using React Native — build once, deploy on iOS & Android with Hasnain Alam.",
    faqs: [
      {
        q: "Is React Native good for building both iOS and Android apps?",
        a: "Yes, React Native lets you write one codebase that runs on both iOS and Android, which saves significant time and cost compared to building two separate native apps.",
      },
      {
        q: "How much does a React Native app cost to build?",
        a: "It depends on complexity — a simple app with a few screens might cost less, while an app with real-time features, backend integration, and native modules costs more. I provide a custom quote after understanding your requirements.",
      },
      {
        q: "Does React Native support native device features like camera and GPS?",
        a: "Yes, React Native supports native device features through built-in APIs and third-party libraries, and I can also write custom native modules when a specific integration needs it.",
      },
      {
        q: "Can you publish my app to the App Store and Play Store?",
        a: "Yes, I can handle the full submission process for both the Apple App Store and Google Play Store, including setting up developer accounts and meeting each platform's requirements.",
      },
      {
        q: "Will my React Native app feel like a native app?",
        a: "Yes. React Native renders actual native UI components rather than a webview, so the app looks and performs close to a fully native build.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/jjA9gxw",
    },
  },
  {
    slug: "electron-desktop-development",
    title: "Electron.js Desktop App Development",
    icon: "Monitor",
    shortDesc:
      "Cross-platform desktop applications for Windows, macOS & Linux.",
    fullDesc:
      "I build cross-platform desktop applications with Electron.js, turning web technologies like React and Node.js into native desktop experiences for Windows, macOS, and Linux. Ideal for tools that need offline access, system-level integration, or native performance — without maintaining separate codebases for each platform.",
    techStack: [
      "Electron.js",
      "React.js",
      "Node.js",
      "SQLite/IndexedDB",
      "IPC Communication",
      "Auto-Updater",
    ],
    features: [
      "Cross-platform desktop builds (Windows/macOS/Linux)",
      "Native OS integration (file system, notifications, tray icons)",
      "Offline data storage & sync",
      "Auto-update functionality",
      "Performance optimization for desktop environments",
      "Packaging & distribution setup",
    ],
    metaTitle: "Electron.js Desktop App Development Services | Hasnain Alam",
    metaDescription:
      "Cross-platform desktop app development using Electron.js — native-like apps for Windows, macOS & Linux by Hasnain Alam.",
    faqs: [
      {
        q: "What is Electron.js used for?",
        a: "Electron.js is used to build desktop applications with web technologies like React and Node.js, letting you ship one codebase that runs natively on Windows, macOS, and Linux.",
      },
      {
        q: "Is Electron good for offline-first desktop apps?",
        a: "Yes, Electron works well for offline-first apps since it can use local storage options like SQLite or IndexedDB and sync data once a connection is available again.",
      },
      {
        q: "Can Electron apps access system-level features?",
        a: "Yes, Electron apps can access the file system, show native notifications, use tray icons, and integrate with OS-level features through its main and renderer process architecture.",
      },
      {
        q: "Does an Electron app need to be updated manually?",
        a: "No, I set up auto-update functionality so your app can check for and install new versions automatically, without requiring users to manually download updates.",
      },
      {
        q: "How big are Electron apps compared to native apps?",
        a: "Electron apps are generally larger since they bundle a Chromium runtime, but this trade-off is usually worth it for the development speed and cross-platform consistency it provides.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/38z7vRr",
    },
  },
  {
    slug: "react-js-development",
    title: "React JS Development",
    icon: "Code2",
    shortDesc: "Fast, modern, and scalable web interfaces built with React JS.",
    fullDesc:
      "What does a React developer actually do day to day? Mostly this — turning designs and product requirements into fast, reusable components that don't break every time a new feature gets added. I build everything from single-page apps to complex admin dashboards, with a focus on component architecture your team (or future you) can actually maintain. If you're deciding whether React is the right fit for your next project, it usually comes down to needing rich interactivity, a large ecosystem of tools, and a codebase that can grow without a rewrite every year.",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux/Zustand",
      "Tailwind CSS",
      "REST/GraphQL APIs",
      "React Query",
    ],
    features: [
      "Custom React component development",
      "State management architecture",
      "API integration & data fetching",
      "Performance optimization (lazy loading, code splitting)",
      "Responsive & accessible UI design",
      "SEO-friendly setup with Next.js (optional)",
    ],
    metaTitle:
      "React JS Development Services | Hire React Developer | Hasnain Alam",
    metaDescription:
      "What does a React developer do? Builds fast, scalable interfaces from components to dashboards. Hire Hasnain Alam for custom React work.",
    faqs: [
      {
        q: "Why should I choose React JS for my web app?",
        a: "React is a good fit when you need rich interactivity, reusable components, and a codebase that scales — it has a huge ecosystem of libraries and strong long-term community support.",
      },
      {
        q: "Is React JS good for SEO?",
        a: "Plain React apps render on the client side, which can hurt SEO. If SEO matters, I pair React with Next.js for server-side rendering so search engines see fully-formed pages.",
      },
      {
        q: "What's the difference between React JS and React Native?",
        a: "React JS builds web applications that run in a browser, while React Native uses similar concepts to build native mobile apps for iOS and Android.",
      },
      {
        q: "Can you convert my existing website into a React app?",
        a: "Yes, I can migrate an existing site into React, rebuilding the UI as reusable components while preserving your existing design and functionality.",
      },
      {
        q: "Do you handle state management in React projects?",
        a: "Yes, I set up state management using tools like Redux or Zustand depending on project complexity, so data flow stays predictable as the app grows.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/vvNXA7r",
    },
  },
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    icon: "LayoutTemplate",
    shortDesc:
      "High-converting, fast-loading landing pages that turn visitors into customers.",
    fullDesc:
      "I design and develop high-converting landing pages that are fast, visually compelling, and built to turn visitors into leads or customers. Every landing page is crafted with a clear focus on conversion rate optimization, mobile responsiveness, and quick load times — perfect for product launches, marketing campaigns, or portfolio sites.",
    techStack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML/CSS",
      "SEO Optimization",
    ],
    features: [
      "Conversion-focused design & copy layout",
      "Mobile-first, fully responsive pages",
      "Fast page load speed & performance tuning",
      "SEO-optimized structure & meta tags",
      "Contact/lead capture form integration",
      "Analytics & tracking setup (Google Analytics, Meta Pixel)",
    ],
    metaTitle: "Landing Page Development Services | Hasnain Alam",
    metaDescription:
      "Custom, high-converting landing page design and development for businesses, startups & marketing campaigns by Hasnain Alam.",
    faqs: [
      {
        q: "How long does it take to build a landing page?",
        a: "A single, well-designed landing page usually takes 3-7 days depending on the amount of content, design revisions, and integrations like forms or analytics.",
      },
      {
        q: "Will my landing page be mobile-friendly?",
        a: "Yes, every landing page I build is mobile-first and fully responsive, since most traffic to marketing pages typically comes from mobile devices.",
      },
      {
        q: "Can you connect my landing page to Google Analytics or Meta Pixel?",
        a: "Yes, I set up tracking tools like Google Analytics and Meta Pixel so you can measure visitor behavior and campaign performance from day one.",
      },
      {
        q: "Do you write the copy for the landing page too?",
        a: "I focus on the design and development, but I structure the layout around conversion best practices. If you need copywriting, I can work with your provided content or coordinate with a copywriter.",
      },
      {
        q: "What's the difference between a landing page and a full website?",
        a: "A landing page is a single, focused page built around one goal — like collecting leads or promoting a product — while a full website has multiple pages covering broader content and navigation.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/akQlYDg",
    },
  },
  {
    slug: "saas-website-development",
    title: "SaaS Website Development",
    icon: "CloudCog",
    shortDesc:
      "End-to-end SaaS platforms with subscriptions, dashboards & scalable architecture.",
    fullDesc:
      "What actually goes into building a SaaS platform? It's not just a website — it's authentication, subscription billing, an admin dashboard, and backend architecture that has to hold up under real users from day one. I build all of that as one connected system rather than bolted-together pieces, using React or Next.js on the frontend with Node.js and MongoDB or PostgreSQL underneath. Whether you're validating an MVP or rebuilding a SaaS product that's outgrown its current stack, the goal stays the same: something that works today and doesn't force a rewrite a year from now.",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB/PostgreSQL",
      "Stripe/Paddle",
      "JWT/OAuth",
      "AWS/Vercel",
    ],
    features: [
      "Multi-tenant SaaS architecture",
      "Subscription & payment gateway integration",
      "User authentication & role-based access",
      "Admin & analytics dashboards",
      "Scalable cloud deployment",
      "API development for third-party integrations",
    ],
    metaTitle: "SaaS Website Development Services | Hasnain Alam",
    metaDescription:
      "What's involved in SaaS website development? Auth, billing, dashboards & scalable architecture — built end-to-end by Hasnain Alam.",
    faqs: [
      {
        q: "How much does it cost to build a SaaS platform?",
        a: "Costs vary widely depending on features — a basic MVP with auth and a dashboard costs less than a full multi-tenant platform with billing and analytics. I provide a detailed quote after a requirements discussion.",
      },
      {
        q: "What payment system do you use for SaaS billing?",
        a: "I typically integrate Stripe or Paddle for subscription billing, since both handle recurring payments, invoicing, and plan management reliably.",
      },
      {
        q: "Can you build a multi-tenant SaaS architecture?",
        a: "Yes, I design multi-tenant systems where each customer's data is properly isolated and secured, while sharing the same underlying infrastructure for efficiency.",
      },
      {
        q: "How long does it take to build a SaaS MVP?",
        a: "A focused SaaS MVP with core features, auth, and billing typically takes 6-10 weeks, depending on how many features are included in the first version.",
      },
      {
        q: "Do you help with SaaS platform scaling after launch?",
        a: "Yes, I design the architecture to scale from the start and can continue supporting the platform as your user base and feature set grow.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/m5q8XBR",
    },
  },
  {
    slug: "nodejs-backend-development",
    title: "Node.js Backend Development",
    icon: "Server",
    shortDesc: "Secure, scalable backend systems & APIs powered by Node.js.",
    fullDesc:
      "I build secure, scalable backend systems and RESTful/GraphQL APIs using Node.js and Express. My backend development covers everything from database architecture and authentication to third-party integrations and performance optimization — giving your application a solid, reliable foundation that scales as your business grows.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "JWT/OAuth",
      "Docker",
    ],
    features: [
      "RESTful & GraphQL API development",
      "Database design (SQL & NoSQL)",
      "Authentication & role-based access control",
      "Third-party API & webhook integrations",
      "Server performance & security optimization",
      "API documentation & deployment support",
    ],
    metaTitle: "Node.js Backend Development Services | Hasnain Alam",
    metaDescription:
      "Hire a Node.js backend developer for secure, scalable APIs and server-side architecture. Custom backend solutions by Hasnain Alam.",
    faqs: [
      {
        q: "Why use Node.js for backend development?",
        a: "Node.js is fast, handles many concurrent connections efficiently, and lets you use JavaScript across the whole stack, which simplifies development and hiring.",
      },
      {
        q: "Do you build REST APIs or GraphQL APIs?",
        a: "I build both, depending on the project — REST for simpler, resource-based APIs, and GraphQL when the frontend needs flexible, precise data fetching.",
      },
      {
        q: "Is Node.js good for handling high traffic?",
        a: "Yes, Node.js is built on a non-blocking, event-driven architecture that handles high volumes of concurrent requests well, especially for I/O-heavy applications.",
      },
      {
        q: "Can you work with both SQL and NoSQL databases?",
        a: "Yes, I work with both — MongoDB for flexible, document-based data and PostgreSQL for relational data that needs strict structure and complex queries.",
      },
      {
        q: "Do you provide API documentation?",
        a: "Yes, I document APIs using tools like Swagger or Postman collections, so your team or future developers can understand and use the endpoints easily.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/zWYe9PE",
    },
  },
  {
    slug: "hire-full-stack-developer",
    title: "Hire a Full Stack Developer",
    icon: "UserCheck",
    shortDesc:
      "End-to-end web & app development from one dedicated full stack developer.",
    fullDesc:
      "What's the real difference between hiring a full stack developer and hiring separate frontend and backend freelancers? Mostly coordination — with one full stack developer, you get someone who owns the whole project end to end, from database design to the interface people actually touch, without you managing handoffs between two or three different people. I work across React, Next.js, Node.js, and both SQL and NoSQL databases, so a project can go from idea to production without losing context along the way. That works well for startups building an MVP, and just as well for existing products that need someone who can move fast without breaking what's already there.",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
      "AWS/Vercel",
      "Docker",
    ],
    features: [
      "Full project ownership (frontend to backend)",
      "MVP development for startups",
      "Existing project maintenance & scaling",
      "Technical consulting & architecture planning",
      "Direct communication, no middlemen",
      "Flexible engagement (hourly, fixed, or long-term)",
    ],
    metaTitle:
      "Hire a Full Stack Developer | Web & App Development | Hasnain Alam",
    metaDescription:
      "Why hire a full stack developer instead of two freelancers? One person, full ownership, faster delivery. Hire Hasnain Alam.",
    faqs: [
      {
        q: "What does a full stack developer actually do?",
        a: "A full stack developer handles both frontend and backend work — building the user interface, the server-side logic, the database, and deployment — instead of specializing in just one layer.",
      },
      {
        q: "Is it cheaper to hire a full stack developer than a team?",
        a: "Usually yes, since you avoid the overhead of coordinating multiple specialists and paying for separate frontend and backend hires for smaller to mid-size projects.",
      },
      {
        q: "Can a full stack developer build an MVP from scratch?",
        a: "Yes, that's one of the most common use cases — taking an idea through database design, backend APIs, and a working frontend, all the way to a launch-ready MVP.",
      },
      {
        q: "What technologies do you work with as a full stack developer?",
        a: "I primarily work with React, Next.js, and Node.js on the frontend and backend, along with MongoDB or PostgreSQL for databases and AWS or Vercel for deployment.",
      },
      {
        q: "Do you offer long-term engagement, not just one-time projects?",
        a: "Yes, I work with clients on both one-off projects and ongoing, long-term collaborations depending on what your product needs.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/38z7vRr",
    },
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    icon: "Rocket",
    shortDesc: "SEO-friendly, high-performance web apps built with Next.js.",
    fullDesc:
      "Why do people pick Next.js over plain React? Mostly for two things — SEO and speed. Next.js renders pages on the server or at build time, so search engines see fully-formed content instead of a blank page waiting on JavaScript to load, and users get a site that feels instant even on a slow connection. I reach for Next.js when a project genuinely needs to rank on Google or load fast — marketing sites, content platforms, or full web apps where performance isn't optional. That includes API routes, image optimization, and deployment tuned for real traffic, not just a good Lighthouse score in a demo.",
    techStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Vercel",
      "SEO Optimization",
    ],
    features: [
      "Server-side rendering (SSR) & static generation (SSG)",
      "SEO-first architecture & metadata setup",
      "API routes & backend integration",
      "Image & performance optimization",
      "Incremental static regeneration (ISR)",
      "Deployment on Vercel/AWS",
    ],
    metaTitle:
      "Next.js Development Services | Hire Next.js Developer | Hasnain Alam",
    metaDescription:
      "Why choose Next.js over React? Better SEO and faster load times through server rendering. Hire Hasnain Alam for Next.js development.",
    faqs: [
      {
        q: "Why is Next.js better for SEO than React?",
        a: "Next.js renders pages on the server or at build time, so search engines get fully-formed HTML immediately instead of waiting for client-side JavaScript to run, which improves crawlability and rankings.",
      },
      {
        q: "What is server-side rendering (SSR) in Next.js?",
        a: "SSR means the page is rendered on the server for every request, so the user gets fully-loaded content right away instead of a blank page while JavaScript loads.",
      },
      {
        q: "Should I use Next.js for a marketing website?",
        a: "Yes, Next.js is a strong choice for marketing sites since it combines fast load times, strong SEO, and the flexibility to add interactive features when needed.",
      },
      {
        q: "Can Next.js handle both static and dynamic content?",
        a: "Yes, Next.js supports static generation, server-side rendering, and incremental static regeneration, so you can mix static and dynamic content in the same project.",
      },
      {
        q: "Where do you deploy Next.js applications?",
        a: "I typically deploy on Vercel for its native Next.js support, though I also deploy to AWS or other cloud providers depending on project requirements.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/vvNXA7r",
    },
  },
  {
    slug: "ecommerce-website-development",
    title: "E-commerce Website Development",
    icon: "ShoppingCart",
    shortDesc:
      "Custom online stores with secure payments & smooth shopping experience.",
    fullDesc:
      "Should you build a custom e-commerce site or just stick with Shopify? If your store needs something Shopify or WooCommerce genuinely can't handle — a custom checkout flow, specific integrations, or performance at a scale their themes struggle with — then custom makes sense. I build online stores with secure payment gateways, product and inventory management, and checkout flows designed to actually convert, not just look good in a screenshot. Everything's mobile-first from the start, because most shopping traffic today isn't coming from a desktop.",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Stripe/PayPal",
      "MongoDB/PostgreSQL",
      "Tailwind CSS",
    ],
    features: [
      "Custom product catalog & cart system",
      "Secure payment gateway integration",
      "Order management & admin dashboard",
      "Mobile-optimized shopping experience",
      "Inventory & discount/coupon systems",
      "SEO-friendly product pages",
    ],
    metaTitle: "E-commerce Website Development Services | Hasnain Alam",
    metaDescription:
      "Custom e-commerce site or Shopify? When you need more than a theme can offer, I build stores that convert. By Hasnain Alam.",
    faqs: [
      {
        q: "Should I build a custom e-commerce site or use Shopify?",
        a: "Shopify works well for standard stores, but a custom build makes sense when you need specific integrations, custom checkout flows, or performance that theme-based platforms can't deliver.",
      },
      {
        q: "What payment gateways can you integrate?",
        a: "I integrate secure payment gateways like Stripe and PayPal, along with region-specific options depending on where your customers are located.",
      },
      {
        q: "Will my e-commerce store be mobile-friendly?",
        a: "Yes, every store I build is mobile-first and fully responsive, since most online shopping traffic today comes from mobile devices.",
      },
      {
        q: "Can you add inventory and discount management?",
        a: "Yes, I build inventory tracking and discount/coupon systems into the admin dashboard so you can manage stock and promotions without needing a developer for every change.",
      },
      {
        q: "How long does it take to build a custom online store?",
        a: "A custom e-commerce site typically takes 4-8 weeks depending on the number of products, payment integrations, and custom features required.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/m5q8XBR",
    },
  },
  {
    slug: "wordpress-development",
    title: "WordPress Website Development",
    icon: "Globe",
    shortDesc: "Custom WordPress websites, themes & plugin development.",
    fullDesc:
      "I build and customize WordPress websites tailored to your business needs — from custom themes and plugins to full site setups with fast load times and clean design. Whether you need a business website, blog, or a WordPress site migrated to a modern stack like React/Next.js, I deliver reliable and easy-to-manage solutions.",
    techStack: [
      "WordPress",
      "PHP",
      "Elementor",
      "WooCommerce",
      "Custom Themes",
      "Plugin Development",
    ],
    features: [
      "Custom WordPress theme development",
      "Plugin development & customization",
      "WooCommerce store setup",
      "Site speed & SEO optimization",
      "WordPress to React/Next.js migration",
      "Ongoing maintenance & support",
    ],
    metaTitle: "WordPress Website Development Services | Hasnain Alam",
    metaDescription:
      "Professional WordPress website development, custom themes, plugins & WooCommerce stores by Hasnain Alam.",
    faqs: [
      {
        q: "Is WordPress good for e-commerce websites?",
        a: "Yes, WordPress with WooCommerce is a solid choice for e-commerce, especially for small to mid-size stores that need flexibility without the cost of a fully custom build.",
      },
      {
        q: "Can you build a custom WordPress theme from scratch?",
        a: "Yes, I build custom themes tailored to your design and business needs, rather than relying on generic pre-made templates that look like every other site.",
      },
      {
        q: "Do you migrate WordPress sites to React or Next.js?",
        a: "Yes, I handle migrations from WordPress to a modern stack like React or Next.js when a business outgrows WordPress and needs better performance or more custom functionality.",
      },
      {
        q: "How do you make a WordPress site load faster?",
        a: "I optimize speed through image compression, caching, clean code in themes and plugins, and removing unnecessary bloat that's often left behind by page builders.",
      },
      {
        q: "Do you offer ongoing WordPress maintenance?",
        a: "Yes, I provide ongoing maintenance covering plugin updates, security patches, and bug fixes to keep your WordPress site running smoothly.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/2KXb6XN",
    },
  },
  {
    slug: "api-integration-services",
    title: "API Development & Integration",
    icon: "Plug",
    shortDesc:
      "Custom API development and seamless third-party API integrations.",
    fullDesc:
      "What actually goes into API integration, and why does it sometimes go wrong? Usually it comes down to authentication, error handling, and documentation nobody bothered to write properly. I build custom REST and GraphQL APIs and connect third-party services — payment gateways, CRMs, email tools, social logins — with proper security and clear documentation, so the next developer (or you, six months later) isn't left guessing how it works. If two systems need to talk to each other reliably, this is that.",
    techStack: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Stripe",
      "Firebase",
      "OAuth/JWT",
    ],
    features: [
      "Custom REST/GraphQL API development",
      "Payment gateway integration (Stripe, PayPal)",
      "CRM & third-party tool integrations",
      "Webhook setup & automation",
      "API documentation (Swagger/Postman)",
      "Authentication & security implementation",
    ],
    metaTitle: "API Development & Integration Services | Hasnain Alam",
    metaDescription:
      "What's involved in API integration? Secure auth, clean error handling & real documentation. Custom API work by Hasnain Alam.",
    faqs: [
      {
        q: "What's the difference between REST and GraphQL APIs?",
        a: "REST APIs expose fixed endpoints for each resource, while GraphQL lets the client request exactly the data it needs in a single query. I build either depending on what fits your project.",
      },
      {
        q: "Can you integrate payment gateways like Stripe or PayPal?",
        a: "Yes, I integrate payment gateways including Stripe and PayPal, handling secure transaction flows, webhooks, and error handling for failed payments.",
      },
      {
        q: "Do you write API documentation?",
        a: "Yes, I document every API using tools like Swagger or Postman, so your team knows exactly how to use each endpoint without guessing.",
      },
      {
        q: "Can you connect my app to a CRM or third-party tool?",
        a: "Yes, I integrate CRMs, email services, and other third-party tools into existing applications, handling authentication and data syncing between systems.",
      },
      {
        q: "How do you handle API security?",
        a: "I implement proper authentication (OAuth/JWT), input validation, and rate limiting to keep APIs secure against common vulnerabilities and abuse.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/zWYe9PE",
    },
  },
  {
    slug: "website-maintenance-support",
    title: "Website Maintenance & Support",
    icon: "Wrench",
    shortDesc:
      "Ongoing bug fixes, updates & performance monitoring for your website.",
    fullDesc:
      "How often does a website actually need maintenance? More than most people expect — dependencies go out of date, security patches pile up, and small bugs turn into bigger problems if nobody's watching. I offer ongoing maintenance for React, Next.js, Node.js, and WordPress sites, covering bug fixes, security updates, performance checks, and small feature additions, so you've got someone keeping things running without the cost of a full-time hire.",
    techStack: [
      "React.js",
      "Node.js",
      "WordPress",
      "Next.js",
      "Git/GitHub",
      "Monitoring Tools",
    ],
    features: [
      "Bug fixing & error resolution",
      "Regular security & dependency updates",
      "Performance monitoring & optimization",
      "Feature additions & enhancements",
      "Uptime monitoring & backups",
      "Flexible monthly retainer options",
    ],
    metaTitle: "Website Maintenance & Support Services | Hasnain Alam",
    metaDescription:
      "How often should a website be maintained? Regularly — security, updates & bug fixes handled ongoing by Hasnain Alam.",
    faqs: [
      {
        q: "How often does a website need maintenance?",
        a: "Most websites benefit from monthly checks at minimum — dependencies go out of date, security patches pile up, and small bugs can turn into bigger issues if left unattended.",
      },
      {
        q: "What's included in a website maintenance plan?",
        a: "Typically bug fixes, security and dependency updates, performance monitoring, uptime checks, backups, and small feature additions as needed.",
      },
      {
        q: "Do you offer maintenance for WordPress sites too?",
        a: "Yes, I maintain React, Next.js, Node.js, and WordPress sites, covering plugin updates, security patches, and general upkeep.",
      },
      {
        q: "Is website maintenance cheaper than hiring a full-time developer?",
        a: "For most small to mid-size sites, yes — a flexible monthly retainer covers ongoing needs without the cost of a full-time in-house hire.",
      },
      {
        q: "What happens if my website goes down?",
        a: "I set up uptime monitoring so issues are flagged quickly, and I handle fixes and backups to minimize downtime and data loss.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/38z7vRr",
    },
  },
  {
    slug: "hire-freelance-web-developer",
    title: "Hire a Freelance Web Developer",
    icon: "Briefcase",
    shortDesc:
      "Reliable freelance web developer for short-term or long-term projects.",
    fullDesc:
      "Is it better to hire a freelance web developer or go through an agency? For most small to mid-size projects, freelance means faster turnaround, lower cost, and direct communication with the person actually writing the code — no account manager relaying messages back and forth. I work with startups and businesses on both one-off projects and ongoing collaborations, using React, Node.js, Next.js, and TypeScript, with transparent updates so you always know where things stand.",
    techStack: [
      "React.js",
      "Node.js",
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Flexible hourly, part-time, or project-based work",
      "Direct communication, no agency layers",
      "Quick turnaround on small to mid-size tasks",
      "Transparent progress updates",
      "Long-term collaboration available",
      "Available across time zones",
    ],
    metaTitle:
      "Hire a Freelance Web Developer | Flexible & Reliable | Hasnain Alam",
    metaDescription:
      "Freelancer or agency? Freelance means faster turnaround & direct communication. Hire Hasnain Alam for your next project.",
    faqs: [
      {
        q: "Is it better to hire a freelance developer or an agency?",
        a: "For most small to mid-size projects, freelancers offer faster turnaround, lower cost, and direct communication with the person actually writing the code, without agency overhead.",
      },
      {
        q: "Do you work on short-term or one-off projects?",
        a: "Yes, I take on both short-term, project-based work and longer, ongoing collaborations depending on what you need.",
      },
      {
        q: "How do you charge for freelance web development?",
        a: "I offer flexible engagement models — hourly, fixed-price per project, or a monthly retainer — depending on project scope and your preference.",
      },
      {
        q: "Can you work with clients in different time zones?",
        a: "Yes, I work with clients across different time zones and keep communication transparent with regular progress updates.",
      },
      {
        q: "What technologies do you specialize in as a freelancer?",
        a: "I mainly work with React, Node.js, Next.js, TypeScript, and MongoDB, covering both frontend and backend development.",
      },
    ],
    externalLinks: {
      fiverr: "https://www.fiverr.com/s/vvNXA7r",
    },
  },
];