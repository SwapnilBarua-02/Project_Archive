export type Project = {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  type: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "sopraspec",
    num: "01",
    name: "SopraSpec",
    tagline: "AI-powered specification platform",
    description:
      "Full-stack enterprise web platform built for Sopra Steria. Features an AI chatbot for software specification assistance, Docker-orchestrated microservices, real-time collaboration, and production-ready handover documentation.",
    tech: ["React", "Node.js", "Docker", "AI / LLM", "PostgreSQL", "REST API"],
    github: "https://github.com/SwapnilBarua", // ← update: your actual repo URL
    type: "Full-Stack Web App",
    year: "2024",
  },
  {
    id: "vitality",
    num: "02",
    name: "Vitality",
    tagline: "Habit tracking, redesigned for mobile",
    description:
      "React Native / Expo mobile application for building and sustaining daily habits. Clean UI with progress visualization, streak tracking, and push notification reminders. Ships to iOS and Android from a single codebase.",
    tech: ["React Native", "Expo", "TypeScript", "EAS Build"],
    github: "https://github.com/SwapnilBarua", // ← update: your actual repo URL
    type: "Mobile App",
    year: "2024",
  },
  {
    id: "swap-api",
    num: "03",
    name: "Swap API",
    tagline: "Queue-driven backend service",
    description:
      "Node.js / Express REST API with BullMQ for asynchronous job processing backed by Redis. Handles distributed task queues, worker concurrency, retry logic, and rate limiting — built for production-grade workloads.",
    tech: ["Node.js", "Express", "BullMQ", "Redis", "Docker"],
    github: "https://github.com/SwapnilBarua", // ← update: your actual repo URL
    type: "Backend API",
    year: "2024",
  },
  {
    id: "hopely",
    num: "04",
    name: "Hopely",
    tagline: "Pitch deck that ships as a site",
    description:
      "Static landing page doubling as an investor-facing pitch deck for a startup concept. Built for persuasion and clarity — clean hierarchy, fast load, and a downloadable PDF presentation bundled alongside.",
    tech: ["HTML", "CSS", "Design"],
    github: "https://github.com/SwapnilBarua",
    live: "https://swapnilbarua-02.github.io/Hopely---Demo/",
    type: "Web / Design",
    year: "2024",
  },
  {
    id: "swaap-v1",
    num: "05",
    name: "Swaap.jpg",
    tagline: "Where photography lives",
    description:
      "The first edition of a personal photography portfolio — an archive of images shot across Japan, Australia, Thailand, and beyond. Built to put the work front and centre with minimal interface and maximum atmosphere.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SwapnilBarua",
    live: "https://swapnilbarua-02.github.io/Swaap.jpg/",
    type: "Photography Portfolio",
    year: "2024",
  },
  {
    id: "swaap-v2",
    num: "06",
    name: "Swaap.jpg v2",
    tagline: "A cinematic archive, rebuilt",
    description:
      "Second edition of the photography portfolio — rebuilt on Next.js 16 with a Cloudinary CDN backend for fast image delivery across collections: People, Places (Japan, Australia, Thailand), and Things. Features a custom infinite parallax canvas on the Explore page and a deep dark aesthetic (#050505) that puts the photography at the centre.",
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Framer Motion", "Cloudinary"],
    github: "https://github.com/SwapnilBarua",
    live: "https://swaap-jpg-v2.vercel.app/",
    type: "Photography Portfolio",
    year: "2025",
  },
];
