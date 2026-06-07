import { Project, SkillGroup, TimelineEvent } from "./types";

export const STATISTICS = [
  { value: "50+", label: "Projects Completed", desc: "Enterprise applications, responsive frontends, and backend microservices." },
  { value: "30+", label: "Technologies Used", desc: "Spanning across robust backend systems, modern frontends, and AI pipelines." },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Backend",
    colorTheme: "blue",
    skills: [
      { name: ".NET Core", level: "Expert" },
      { name: "C#", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "Node.js (Express)", level: "Advanced" },
      { name: "RESTful Web APIs", level: "Expert" },
      { name: "PostgreSQL & SQL Server", level: "Expert" },
    ],
  },
  {
    category: "Frontend",
    colorTheme: "purple",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Angular", level: "Advanced" },
      { name: "Vue.js", level: "Advanced" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Responsive Design", level: "Expert" },
    ],
  },
  {
    category: "AI & ML",
    colorTheme: "indigo",
    skills: [
      { name: "OpenAI models", level: "Advanced" },
      { name: "TensorFlow", level: "Proficient" },
      { name: "PyTorch", level: "Proficient" },
      { name: "NLP", level: "Advanced" },
      { name: "Gemini API", level: "Expert" },
      { name: "Vector Databases", level: "Advanced" },
    ],
  },
  {
    category: "Cloud & DevOps",
    colorTheme: "pink",
    skills: [
      { name: "Azure", level: "Advanced" },
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "CI/CD Pipelines", level: "Advanced" },
      { name: "Git & Version Control", level: "Expert" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "eduai-spotlight",
    title: "EduAI Platform",
    description: "Next-gen AI adaptation pipelines driving classroom curricular alignments, localized smart textbook recommendations, and individual learning progress charts. Offers teachers automated assessment indicators and equips students with context-aware companion tutors.",
    tags: ["Gemini API", "React", "Node.js", "Docker"],
    category: "ai",
    metrics: "1,500+ active beta students, 94% retention rate",
    architectureDetails: "Combines text embeddings of regional blueprints with vector searches, routed through custom Express handlers with stateful context. Client dashboards visualize cognitive achievements in real-time."
  },
  {
    id: "uni-preference",
    title: "University Preference System",
    description: "An advanced guidance portal helping high school graduates choose optimal college domains and career majors based on historical candidate pools, preference weights, location metrics, and regional employment graphs.",
    tags: [".NET Core", "React", "SQL Server", "TypeScript"],
    category: "backend",
    metrics: "50,000+ searches, 93% guidance accuracy score",
    githubUrl: "https://github.com",
    liveUrl: "#",
    architectureDetails: "Built as modular backend microservices exposing high-performance Web APIs with Entity Framework, integrated with an interactive React frontend using responsive container grids and detailed data visualizations."
  },
  {
    id: "lib-automation",
    title: "Library Automation System",
    description: "An automated inventory and metadata parsing pipeline transforming physical registry details into classified digital catalogs. Integrates barcode processing workflows and features Natural Language Processing elements to automate book genre categorization.",
    tags: ["Node.js", "Vue.js", "MongoDB", "NLP"],
    category: "frontend",
    metrics: "10,000+ works categorized, decreased checkout time by 80%",
    githubUrl: "https://github.com",
    liveUrl: "#",
    architectureDetails: "Backend processes OCR outcomes, feeding raw textual indexes into high-performance TF-IDF text classifiers to map files. Operates as an event-driven system with MongoDB storage."
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2024",
    title: "EduAI Concept & MVP Development",
    subtitle: "Inception and Architecting MVP",
    description: "Conceived the foundational educational machine learning adaptation system. Formulated standard course correlation schemas and wrapped baseline recommendation protocols.",
    iconType: "concept",
  },
  {
    year: "2025",
    title: "Platform Beta Launch & Initial User Base",
    subtitle: "Empirical User Trials",
    description: "Released beta build to primary regional testing schools and local colleges. Recorded highly constructive feedback loops, achieving stable platform operation with 1,500+ students.",
    iconType: "beta",
  },
  {
    year: "2026",
    title: "AI Assistant Integration & Pilot Schools",
    subtitle: "Custom Tutor Integrations",
    description: "Integrated state-of-the-art LLM companion tutors which analyze detailed student conversation styles in real-time. Started deep curriculum matching pilots for high-impact STEM areas.",
    iconType: "assistant",
  },
  {
    year: "2027",
    title: "National Partnership & Expansion",
    subtitle: "Enterprise Curricular Integrations",
    description: "Collaborating with local educational authorities to establish standardized content templates. Enhancing reliability by transitioning backends to multi-cloud setups on Azure & AWS.",
    iconType: "partnership",
  },
  {
    year: "2028+",
    title: "Global Adoption & Continuous Innovation",
    subtitle: "Scale-out & Offline ML Modes",
    description: "Aiming to empower low-resource classrooms globally via compressed offline local AI assistants. Deep research into advanced automated scoring mechanics and multi-modal guidance models.",
    iconType: "global",
  }
];
