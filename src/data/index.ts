import { Project, Skill, Experience} from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Show Projects",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/yubin/ecommerce"
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Show Projects",
    technologies: ["React Native", "Redux", "Firebase", "HealthKit API"],
    link: "https://example.com/fitness-app",
    github: "https://github.com/yubin/fitness-app"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Web application that leverages AI to generate marketing content, blog posts, and social media updates.",
    image: "https://images.pexels.com/photos/8438981/pexels-photo-8438981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Show Projects",
    technologies: ["Python", "TensorFlow", "OpenAI API", "Flask"],
    link: "https://example.com/ai-content"
  },
];


export const skills: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Next.js", level: 80, category: "frontend" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "JP Morgan",
    position: "virtual Experience",
    duration: "2025 - Present",
    description: "Built REST APIs with controller integration using Java and Spring Boot. Integrated Apache Kafka for stream processing and H2 for in-memory database management.",
    logo: "https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    company: "Campus Summer Intership",
    position: "Nlp Web Scrapping ",
    duration: "2-months",
    description: "Developed and maintained web applications for clients across various industries. Worked with React, Node.js, and GraphQL.",
    logo: "https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  
];
export const aboutMe = {
  name: "Yubin",
  title: "Full Stack Developer",
  description: "I'm a passionate software engineer with 7+ years of experience creating digital experiences that combine technical excellence with beautiful design. My focus is on building scalable, user-friendly applications that solve real-world problems.",
  longDescription: "I specialize in modern web technologies including React, TypeScript, and Node.js, with a strong background in both frontend and backend development. Throughout my career, I've worked with startups and established companies to turn their visions into reality through thoughtful code and intuitive interfaces.\n\nWhen I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying at the forefront of technological innovation.",
  location: "Amritsar,Punjab",
  email: "mahajanyubin@gmail.com",
  phone: "+91 7888717578",
  social: {
    github: "https://github.com/Yubin935",
    linkedin: "https://www.linkedin.com/in/yubin-b2327a255/",
    twitter: "https://twitter.com/yubin"
  }
};