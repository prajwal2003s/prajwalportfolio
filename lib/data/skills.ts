export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  

  {
    category: "Languages",
    items: ["JavaScript", "Python", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Django", "Node.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Postman", "Vercel", "Netlify"],
  },

];
