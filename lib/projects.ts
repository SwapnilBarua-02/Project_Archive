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
    github: "https://github.com/SwapnilBarua", // ← update: your actual repo URL
    live: "#", // ← update: live URL if deployed
    type: "Web / Design",
    year: "2024",
  },
];
