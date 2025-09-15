import React from "react";
import Link from "next/link";
import {
  Building2,
  Briefcase,
  Calendar,
  MapPin,
  Trophy,
  Rocket,
  ExternalLink,
} from "lucide-react";

interface Project {
  name: string;
  description: string;
  hasLiveLink: boolean;
  liveLink?: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: Project[];
  achievements: string[];
}

const ProjectCard: React.FC<Project> = ({
  name,
  description,
  hasLiveLink,
  liveLink,
}) => (
  <div className="bg-base03 p-3 rounded-md mb-3 hover:bg-base02 transition-colors">
    <h5 className="font-medium text-yellow flex items-center justify-between">
      <span className="flex items-center">🚀 {name}</span>
      {hasLiveLink && liveLink && (
        <Link
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:text-blue-300 transition-colors flex items-center"
        >
          <span className="mr-1 text-xs">Live</span>
          <ExternalLink size={14} />
        </Link>
      )}
    </h5>
    <p className="text-sm mt-1">{description}</p>
  </div>
);

const ExperienceCard: React.FC<Experience> = ({
  company,
  role,
  period,
  location,
  projects,
  achievements,
}) => {
  return (
    <div className="mb-6 p-4 rounded-md shadow-lg bg-base02 text-foreground border border-base01">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg flex items-center text-yellow">
            <Building2 className="mr-2" />
            {company}
          </h3>
          <p className="text-sm flex items-center mt-1 text-cyan">
            <Briefcase className="mr-2" size={16} />
            {role}
          </p>
        </div>
        <div className="mt-2 sm:mt-0 sm:text-right">
          <p className="text-sm flex items-center sm:justify-end text-green">
            <Calendar className="mr-2" size={16} />
            {period}
          </p>
          <p className="text-sm flex items-center sm:justify-end mt-1 text-red">
            <MapPin className="mr-2" size={16} />
            {location}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-accent flex items-center mb-2">
          <Rocket className="mr-2" size={18} />
          Projects
        </h4>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-yellow flex items-center mb-2">
          <Trophy className="mr-2" size={18} />
          Key Achievements
        </h4>
        <ul className="list-none">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-sm mb-2 flex items-start">
              <span className="text-accent mr-2">✨</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceCommand: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "Bundled Design",
      role: "Full Stack Developer Intern",
      period: "04/2024 – Present",
      location: "Remote",
      projects: [
        {
          name: "Bundled.design",
          description:
            "A SaaS platform offering a suite of Generative AI tools with a unified LLM chat interface.",
          hasLiveLink: true,
          liveLink: "https://bundled.design",
        },
        {
          name: "TheBundledAI Backup Service",
          description:
            "Comprehensive MongoDB backup and restore system with automated scheduling, real-time WebSocket logs, and Google Drive integration. Includes a Next.js dashboard, Redis-backed logging, and Clerk auth for secure operations.",
          hasLiveLink: true,
          liveLink:
            "https://github.com/VinayakVispute/thebundledai-backup-service",
        },
        {
          name: "Image Optimization Stack (AWS)",
          description:
            "Serverless image pipeline using CloudFront, S3, and Lambda (Sharp) for on-demand transforms, aggressive caching, and Origin Shield. URL normalization at the edge, fallback processing via Lambda, and lifecycle-managed S3 storage for cost efficiency.",
          hasLiveLink: false,
        },
      ],
      achievements: [
        "Architected a robust SaaS platform by integrating Generative AI APIs (Replicate, Astria, Stability, and DALL-E) and a unified LLM chat interface to deliver transformative user experiences.",
        "Engineered a modular API in Next.js using Driver/Provider/Dispatcher patterns, achieving ~35% performance improvement, ~20% error reduction, and faster debugging.",
        "Designed architecture for video tools with polling mechanisms and webhook elimination in failure scenarios, reducing overhead by ~30% and improving delivery speed by ~25%.",
        "Built a custom Cloudinary-like media pipeline on AWS for efficient asset management and delivery.",
        "Integrated Dodo Payment for subscription management, improving transaction reliability and system resilience.",
      ],
    },
  ];

  return (
    <div className="font-mono text-foreground">
      <div className="text-accent font-bold mb-4 text-lg">My Experience:</div>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
      <div className="text-muted-light mt-4">
        💼 These experiences have shaped my skills and passion for full-stack
        development!
      </div>
    </div>
  );
};

export default ExperienceCommand;
