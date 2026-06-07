export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "backend" | "frontend" | "ai" | "devops";
  metrics: string;
  githubUrl?: string;
  liveUrl?: string;
  architectureDetails?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  iconType: "concept" | "beta" | "assistant" | "partnership" | "global";
}

export interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
}

export interface SkillGroup {
  category: "Backend" | "Frontend" | "AI & ML" | "Cloud & DevOps";
  skills: SkillItem[];
  colorTheme: "blue" | "purple" | "indigo" | "pink";
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
