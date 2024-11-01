import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface SocialLinkProps {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  platform,
  username,
  url,
  icon,
}) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center mb-2 text-foreground hover:text-blue transition-colors"
  >
    <span className="mr-2">{icon}</span>
    <span className="text-yellow font-bold mr-2">{platform}:</span>
    <span className="hover:underline">{username}</span>
  </Link>
);

const SocialsCommand: React.FC = () => {
  const socialData: SocialLinkProps[] = [
    {
      platform: "GitHub",
      username: "VinayakVispute",
      url: "https://github.com/VinayakVispute",
      icon: <Github size={18} />,
    },
    {
      platform: "LinkedIn",
      username: "vispute-vinayak",
      url: "https://www.linkedin.com/in/vispute-vinayak",
      icon: <Linkedin size={18} />,
    },
    {
      platform: "Twitter (X)",
      username: "@vinayakvispute7",
      url: "https://x.com/VinayakVispute7",
      icon: <Twitter size={18} />,
    },
    {
      platform: "Email",
      username: "vinayakvispute4@gmail.com",
      url: "mailto:vinayakvispute4@gmail.com",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <div className="font-mono text-foreground">
      <div className="text-accent font-bold mb-4">Connect with me:</div>
      {socialData.map((social, index) => (
        <SocialLink key={index} {...social} />
      ))}
      <div className="text-muted-light mt-4">
        Feel free to reach out! I'm always open to interesting conversations and
        collaborations.
      </div>
    </div>
  );
};

export default SocialsCommand;
