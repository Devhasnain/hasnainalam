// FAQs Data Array for State Management
export const faqsData = [
  {
    question: "What core stack do you leverage for scalable web application systems?",
    answer: "I use a state-of-the-art MERN architecture, with Next.js (App Router), TypeScript, and Tailwind CSS for the frontend, while Node.js/Express and MongoDB/PostgreSQL are the primary choices for backend processing and database clusters. The focus is always on absolute type safety and server-side indexing optimization."
  },
  {
    question: "How do you achieve high framerates (60+ FPS) in complex React Native mobile apps?",
    answer: "Performance is critical in mobile engineering. I use React Native Reanimated for animations (which runs tasks off the UI thread on native drivers) and lightweight state management like Zustand/Redux Toolkit. I also optimize heavy list rendering with FlashList to reduce memory leaks."
  },
  {
    question: "Can you guarantee high security inside Electron.js native desktop applications?",
    answer: "Absolutely. When deploying Electron apps, I apply core architectural security parameters: enforce Context Isolation (`contextIsolation: true`), disable Node Integration in the renderer layer, and use only strictly validated secure IPC event schemas for cross-process communication."
  },
  {
    question: "Do you design your Next.js systems to be fully search-engine indexed (SEO-optimized)?",
    answer: "Yes, I choose Next.js runtime structure for that reason. I implement proper Server-Side Rendering (SSR) and Static Site Generation (SSG) protocols, configure semantic dynamic metadata arrays, deploy structured JSON-LD rich snippets, and inject automated XML sitemaps so the application can capture a high Google ranking."
  },
  {
    question: "How do you manage complex distributed data states across local devices and clouds?",
    answer: "For structured web apps, Redux Toolkit or TanStack Query maintains cached state. If the application needs to withstand network disruption (offline-first models), I use hardware caching layers or PouchDB/SQLite database driver integration that pushes cloud-based updates through an active synchronization pipeline."
  }
];