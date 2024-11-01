import React from "react";

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({
  title,
  skills,
}) => (
  <div className="mb-2">
    <span className="text-yellow font-bold">{title}:</span>{" "}
    <span className="text-foreground">{skills.join(", ")}</span>
  </div>
);

const SkillsCommand: React.FC = () => {
  const skillsData = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "PHP", "C++"],
    },
    { title: "Libraries/Frameworks", skills: ["Next.js", "React"] },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "REST API",
        "WebRTC",
        "Generative AI",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Redis"],
    },
    { title: "Tools & Services", skills: ["Azure", "Docker"] },
    {
      title: "Stacks",
      skills: ["MERN (MongoDB, Express.js, React, Node.js)", "Next.js"],
    },
  ];

  return (
    <div className="font-mono text-foreground">
      <div className="text-accent font-bold mb-2">My Tech Skills:</div>
      {skillsData.map((category, index) => (
        <SkillCategory
          key={index}
          title={category.title}
          skills={category.skills}
        />
      ))}
      <div className="text-muted-light mt-2">
        Always learning, always growing. These are just the tools I'm currently
        wielding in my coding adventures!
      </div>
    </div>
  );
};

export default SkillsCommand;
