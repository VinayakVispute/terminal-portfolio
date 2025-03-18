"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Code, Star } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 1-5 scale
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  isExpanded: boolean;
  toggleExpand: () => void;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  isExpanded,
  toggleExpand,
}) => {
  // Sort skills by level (highest first)
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level);

  return (
    <div className="mb-4 bg-base02 rounded-md overflow-hidden">
      <button
        onClick={toggleExpand}
        className="w-full p-3 text-left flex items-center justify-between bg-base01 hover:bg-base0 transition-colors"
      >
        <span className="text-yellow font-bold flex items-center">
          <Code size={16} className="mr-2" />
          {title}
        </span>
        <span className="text-muted-foreground text-sm">
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {isExpanded && (
        <div className="p-3 space-y-3">
          {sortedSkills.map((skill, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-foreground">{skill.name}</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < skill.level
                          ? "text-yellow fill-yellow"
                          : "text-muted-foreground"
                      } mx-0.5`}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full bg-base03 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-cyan/80 to-green h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SkillsCommand: React.FC = () => {
  // Track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({
    Languages: true, // Open by default
    "Libraries/Frameworks": false,
    Backend: false,
    Databases: false,
    "Tools & Services": false,
    Stacks: false,
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 4 },
        { name: "TypeScript", level: 3 },
        { name: "Python", level: 2 },
        { name: "PHP", level: 2 },
        { name: "C++", level: 3 },
      ],
    },
    {
      title: "Libraries/Frameworks",
      skills: [
        { name: "Next.js", level: 4 },
        { name: "React", level: 4 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 4 },
        { name: "Express.js", level: 4 },
        { name: "Django", level: 3 },
        { name: "REST API", level: 4 },
        { name: "WebRTC", level: 3 },
        { name: "Generative AI", level: 4 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 4 },
        { name: "MySQL", level: 3 },
        { name: "PostgreSQL", level: 3 },
        { name: "Prisma", level: 3 },
        { name: "Redis", level: 3 },
      ],
    },
    {
      title: "Tools & Services",
      skills: [
        { name: "Azure", level: 3 },
        { name: "Docker", level: 3 },
      ],
    },
    {
      title: "Stacks",
      skills: [
        { name: "MERN", level: 4 },
        { name: "Next.js", level: 4 },
      ],
    },
  ];

  return (
    <div className="font-mono text-foreground">
      <div className="text-accent font-bold mb-4 flex items-center">
        <Star className="mr-2 fill-accent" />
        My Tech Skills
      </div>
      {skillsData.map((category) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          skills={category.skills}
          isExpanded={expandedCategories[category.title]}
          toggleExpand={() => toggleCategory(category.title)}
        />
      ))}
      <div className="text-muted-light mt-4 text-sm">
        Always learning, always growing. These are just the tools I&apos;m
        currently wielding in my coding adventures!
        <div className="mt-2 text-xs text-muted-foreground">
          <span className="text-yellow">★★★★★</span> Expert |
          <span className="text-yellow ml-1">★★★★</span>
          <span className="text-muted-foreground">★</span> Advanced |
          <span className="text-yellow ml-1">★★★</span>
          <span className="text-muted-foreground">★★</span> Intermediate
        </div>
      </div>
    </div>
  );
};

export default SkillsCommand;
