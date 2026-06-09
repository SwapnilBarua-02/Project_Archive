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
    tagline: "Enterprise Web App · AI Integration · PACE Industry Project",
    description:
      "A PACE industry project in collaboration with Soprema, a global construction materials company. Inherited a legacy frontend, rebuilt the experience from the ground up and integrated a custom AI chatbot trained on Soprema's proprietary product specifications. The chatbot takes client requirements and generates tailored PDF spec documents on the fly. Stack spans React, Node.js, Docker and a fine-tuned Llama/Mistral model. Delivered as a cross-functional team project under real client expectations.",
    tech: ["React", "Node.js", "Docker", "LLaMA", "Mistral", "AI/LLM", "PDF Generation"],
    github: "https://github.com/SwapnilBarua", // ← update: your actual repo URL
    type: "Full-Stack Web App",
    year: "2025",
  },
  {
    id: "vitality",
    num: "02",
    name: "Vitality",
    tagline: "Mobile App · Habit Intelligence · In Development",
    description:
      "A habit tracker that ditches streaks in favour of something more honest, a graph. Every habit you track shows up as a visual curve over time, like a stock chart for your behaviour. You can see exactly when you were consistent, when you slipped and whether the trend is up or down over weeks and months. Currently in active development. The idea is simple: stop gamifying discipline, start visualising it.",
    tech: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/SwapnilBarua", // ← update: your actual repo URL
    type: "Mobile App",
    year: "2025",
  },
  {
    id: "swap-api",
    num: "03",
    name: "Swap",
    tagline: "Workflow Automation · Personal AI · Built from Scratch",
    description:
      "An ambitious personal systems project. Three layers being designed and built from the ground up: a self-hostable workflow automation engine (think Zapier, but yours), a custom vector database that acts as persistent memory for AI and a personal AI assistant, voice and text controlled, that sits on top of both. Currently running on cloud LLM APIs, with a longer-term goal of running fully local on consumer hardware. This is not a vibe-coded side project. It's being built slowly, deliberately and to be understood completely. Currently in planning and early development.",
    tech: ["Node.js", "BullMQ", "Redis", "Vector DB", "LLM APIs", "TypeScript"],
    github: "https://github.com/SwapnilBarua", // ← update: your actual repo URL
    type: "Backend API",
    year: "2025",
  },
  {
    id: "hopely",
    num: "04",
    name: "Hopely",
    tagline: "Social Impact · Pitch Competition · KPMG Incubator Won",
    description:
      "A concept developed for a university startup incubator pitch, backed by a real problem: Australia's domestic violence housing crisis isn't a shortage, it's a distribution failure. In any given month, 35,000 people are made homeless due to domestic violence. Half of women and children seeking emergency shelter are turned away. Social housing waitlists sit at 5–10 years. The gap we identified was the 3–7 days immediately after someone escapes, after crisis shelters, before long-term housing. Nothing exists there. Hopely was designed to fill it: a vetted volunteer host network, matching verified cases with verified hosts through referrals from hotlines like 1800RESPECT. Think Care-BnB. Anonymity by design, no names in the system, location withheld until match, quick-exit button on every page that wipes browser history. Three stay tiers: emergency (3–7 days), short-term (2–4 weeks), long-term co-inhabiting (3–6 months). Built as a demo pitch site. We won.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SwapnilBarua",
    live: "https://swapnilbarua-02.github.io/Hopely---Demo/",
    type: "Web / Design",
    year: "2025",
  },
  {
    id: "swaap-v1",
    num: "05",
    name: "Swaap.jpg",
    tagline: "Photography Portfolio · v1 · Static",
    description:
      "The first version of my personal photography portfolio. Fully handcoded in HTML and CSS, no frameworks, no CMS. A deliberate exercise in keeping it simple. Superseded by v2.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/SwapnilBarua",
    live: "https://swapnilbarua-02.github.io/Swaap.jpg/",
    type: "Photography Portfolio",
    year: "2024",
  },
  {
    id: "swaap-v2",
    num: "06",
    name: "Swaap.jpg v2",
    tagline: "Photography Portfolio · v2 · Scaleable",
    description:
      "The rebuild. Same photography, a proper architecture this time. Dynamic, scalable and built to grow with the work. The v1 was hardcoded images, this one is built to last.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/SwapnilBarua",
    live: "https://swaap-jpg-v2.vercel.app",
    type: "Photography Portfolio",
    year: "2025",
  },
  {
    id: "project-archive",
    num: "07",
    name: "Project Archive",
    tagline: "Portfolio · Creative Direction · Built with AI",
    description:
      "This portfolio. Designed and art-directed by me. The design system, typography, the red, the editorial structure and the project selection are all deliberate choices. Built in collaboration with Claude as co-developer. The taste is mine. The ideas are mine. The code is ours.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Three.js"],
    live: "https://swaap-folio.vercel.app",
    type: "Portfolio",
    year: "2026",
  },
];
