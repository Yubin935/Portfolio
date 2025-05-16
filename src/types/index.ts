export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend";
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  logo?: string;
}

