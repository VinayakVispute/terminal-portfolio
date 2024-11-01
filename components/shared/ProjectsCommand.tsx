import React from "react";
import Link from "next/link";

interface ProjectLink {
  type: "github" | "live" | "blog" | "Workflow";
  url: string;
}

interface Project {
  title: string;
  description: string;
  links: ProjectLink[];
}

const IconLink: React.FC<{ type: ProjectLink["type"]; url: string }> = ({
  type,
  url,
}) => {
  const icons = {
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-purple-500"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    live: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-500"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    blog: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-500"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        <line x1="12" y1="6" x2="16" y2="6"></line>
        <line x1="12" y1="10" x2="16" y2="10"></line>
        <line x1="12" y1="14" x2="16" y2="14"></line>
        <line x1="8" y1="6" x2="8" y2="6.01"></line>
        <line x1="8" y1="10" x2="8" y2="10.01"></line>
        <line x1="8" y1="14" x2="8" y2="14.01"></line>
      </svg>
    ),
    Workflow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-yellow-500"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-3 hover:opacity-80 transition-opacity"
      title={type.charAt(0).toUpperCase() + type.slice(1)}
    >
      {icons[type]}
    </Link>
  );
};

const ProjectCard: React.FC<Project> = ({ title, description, links }) => (
  <div className="mb-6 border border-border p-4 rounded-md bg-background-light">
    <h3 className="text-yellow font-bold mb-2">{title}</h3>
    <p className="text-foreground mb-3">{description}</p>
    <div className="flex">
      {links.map((link, index) => (
        <IconLink key={index} type={link.type} url={link.url} />
      ))}
    </div>
  </div>
);

const ProjectsCommand: React.FC = () => {
  const projects: Project[] = [
    {
      title: "DevCollab Hub",
      description:
        "Scalable real-time web chat app with group creation, image/video sharing, and basic photo editing.",
      links: [
        {
          type: "github",
          url: "https://github.com/VinayakVispute/DevCollab-Hub",
        },
        // { type: "live", url: "https://devcollab-hub.com" },
      ],
    },
    {
      title: "AnimeNook Market",
      description:
        "E-commerce platform for anime-related merchandise with RESTful APIs and secure transactions.",
      links: [
        {
          type: "github",
          url: "https://github.com/VinayakVispute/AnimeNookMarket",
        },
        // { type: "live", url: "https://animenook-market.com" },
      ],
    },
    {
      title: "Adaptive Flow",
      description:
        "Video transcoding and adaptive streaming pipeline with FFmpeg, HLS, and Docker for multiple resolutions.",
      links: [
        {
          type: "github",
          url: "https://github.com/VinayakVispute/AdaptiveFlow",
        },
        { type: "live", url: "https://adaptiveflow.visputevinayak.co/" },
        // {
        //   type: "Workflow",
        //   url: "https://your-whiteboard-url.com/adaptive-flow-design",
        // },
      ],
    },
    {
      title: "Police QR Code Feedback System",
      description:
        "QR code-based feedback system with JWT authentication and MongoDB aggregation pipeline.",
      links: [
        {
          type: "github",
          url: "https://github.com/TechNodes2-0/Police-QR-Code-Feedback-System-2023",
        },
      ],
    },
  ];

  return (
    <div className="font-mono text-foreground">
      <div className="text-accent font-bold mb-4">My Projects:</div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
      <div className="text-muted-light mt-4">
        These are just a few highlights. Check out my GitHub for more projects!
      </div>
    </div>
  );
};

export default ProjectsCommand;
