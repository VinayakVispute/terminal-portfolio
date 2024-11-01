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
      company: "AntiChurn",
      role: "Full Stack Developer Intern",
      period: "04/2024 – Present",
      location: "Remote",
      projects: [
        {
          name: "FounderFeed",
          description:
            "A content aggregation platform for startup founders and entrepreneurs.",
          hasLiveLink: false,
        },
        {
          name: "TheBundled.ai",
          description:
            "A SaaS platform offering a suite of Generative AI tools with a unified LLM chat interface.",
          hasLiveLink: true,
          liveLink: "https://thebundled.ai",
        },
      ],
      achievements: [
        "Developed scripts to scrape content from platforms like Medium and TechCrunch, implementing MongoDB storage and admin controls.",
        "Built an Admin Dashboard for content approval, deployed and optimized Next.js apps on Vercel.",
        "Created a universal API in Next.js for AI tool integrations, reducing complexity by 40%.",
        "Implemented an icon generator using DALL-E and integrated caching with Vercel KV.",
        "Designed architecture for video tools and reverse proxy for WordPress blogs, optimizing scalability.",
        "Integrated Razorpay for subscriptions, managing real-time webhook responses with MongoDB change streams.",
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
