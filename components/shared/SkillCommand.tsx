"use client";

import React from "react";
import { Star } from "lucide-react";

const SkillsCommand: React.FC = () => {
  const categories: { title: string; items: string[] }[] = [
    {
      title: "Frontend",
      items: ["HTML", "ReactJS", "NextJs", "Tailwind CSS", "CSS", "Typescript"],
    },
    {
      title: "Backend",
      items: ["NodeJS", "ExpressJs", "Rest API", "Python", "Generative AI"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "PostgreSQL", "Prisma"],
    },
    {
      title: "Tools / Services",
      items: [
        "Azure",
        "AWS",
        "Postman",
        "Docker",
        "Git",
        "GitHub",
        "GitHub Actions",
        "Trello",
      ],
    },
  ];

  return (
    <div className="font-mono text-foreground">
      <div className="text-accent font-bold mb-4 flex items-center">
        <Star className="mr-2 fill-accent" />
        My Tech Skills
      </div>

      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="text-yellow font-bold mb-1">{cat.title}</div>
            <div className="text-foreground">{cat.items.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCommand;
