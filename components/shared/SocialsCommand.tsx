"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Send,
  User,
} from "lucide-react";

interface SocialLinkProps {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  category?: string;
  copyable?: boolean;
}

// Group type for organizing social links
type SocialGroup = {
  name: string;
  icon: React.ReactNode;
  links: SocialLinkProps[];
};

const SocialLink: React.FC<SocialLinkProps> = ({
  platform,
  username,
  url,
  icon,
  copyable = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center mb-3 group">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center text-foreground group-hover:text-blue transition-colors"
      >
        <span className="mr-2 text-cyan">{icon}</span>
        <span className="text-yellow font-bold mr-2">{platform}:</span>
        <span className="group-hover:underline">{username}</span>
        <ExternalLink
          size={12}
          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </Link>

      {copyable && (
        <button
          onClick={() => handleCopy(username)}
          className="ml-2 p-1 rounded-md hover:bg-base01 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={16} className="text-green" />
          ) : (
            <Copy size={16} className="text-muted-foreground hover:text-blue" />
          )}
        </button>
      )}
    </div>
  );
};

const SocialsCommand: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [showContactForm, setShowContactForm] = useState(false);

  // Organize social links into groups
  const socialGroups: SocialGroup[] = [
    {
      name: "Professional",
      icon: <User size={16} />,
      links: [
        {
          platform: "LinkedIn",
          username: "vispute-vinayak",
          url: "https://www.linkedin.com/in/vispute-vinayak",
          icon: <Linkedin size={18} />,
          category: "professional",
        },
        {
          platform: "GitHub",
          username: "VinayakVispute",
          url: "https://github.com/VinayakVispute",
          icon: <Github size={18} />,
          category: "professional",
        },
      ],
    },
    {
      name: "Social Media",
      icon: <Twitter size={16} />,
      links: [
        {
          platform: "Twitter (X)",
          username: "@vinayakvispute7",
          url: "https://x.com/VinayakVispute7",
          icon: <Twitter size={18} />,
          category: "social",
        },
      ],
    },
    {
      name: "Contact",
      icon: <Mail size={16} />,
      links: [
        {
          platform: "Email",
          username: "vinayakvispute4@gmail.com",
          url: "mailto:vinayakvispute4@gmail.com",
          icon: <Mail size={18} />,
          category: "contact",
          copyable: true,
        },
      ],
    },
  ];

  // Get all links flattened
  const allLinks = socialGroups.flatMap((group) => group.links);

  // Filter links based on active tab
  const getFilteredLinks = () => {
    if (activeTab === "all") return allLinks;
    return allLinks.filter((link) => link.category === activeTab);
  };

  return (
    <div className="font-mono text-foreground">
      <div className="text-accent font-bold mb-4 flex items-center">
        <span className="mr-2">Connect with me:</span>
        <div className="flex space-x-2 ml-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-2 py-1 text-xs rounded ${
              activeTab === "all"
                ? "bg-base01 text-cyan"
                : "hover:bg-base01 text-muted-foreground"
            }`}
          >
            All
          </button>
          {socialGroups.map((group) => (
            <button
              key={group.name}
              onClick={() => setActiveTab(group.links[0].category || "all")}
              className={`px-2 py-1 text-xs rounded flex items-center ${
                activeTab === group.links[0].category
                  ? "bg-base01 text-cyan"
                  : "hover:bg-base01 text-muted-foreground"
              }`}
            >
              <span className="mr-1">{group.icon}</span>
              {group.name}
            </button>
          ))}
        </div>
      </div>

      <div className="border-l-2 border-base01 pl-3 mb-4">
        {getFilteredLinks().map((social, index) => (
          <SocialLink key={index} {...social} />
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-muted-light">
          Feel free to reach out! I&apos;m always open to interesting
          conversations and collaborations.
        </div>

        <button
          onClick={() => setShowContactForm(!showContactForm)}
          className="flex items-center text-xs bg-base01 hover:bg-base0 transition-colors text-cyan py-1 px-3 rounded-md"
        >
          <MessageSquare size={14} className="mr-1" />
          {showContactForm ? "Hide Form" : "Quick Message"}
        </button>
      </div>

      {showContactForm && (
        <div className="mt-4 p-3 bg-base01 rounded-md animated-section">
          <div className="text-sm text-yellow mb-2 flex items-center">
            <MessageSquare size={14} className="mr-1" />
            Quick Contact Form
          </div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-base02 border border-base00 p-2 rounded-md text-sm"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-base02 border border-base00 p-2 rounded-md text-sm"
            />
            <textarea
              placeholder="Your message"
              rows={3}
              className="w-full bg-base02 border border-base00 p-2 rounded-md text-sm"
            />
            <div className="flex justify-end">
              <button className="bg-blue hover:bg-opacity-80 text-white py-1 px-3 rounded-md text-sm flex items-center">
                <Send size={14} className="mr-1" />
                Send Message
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Note: This is a demo form. For actual contact, please use the
              email above.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialsCommand;
