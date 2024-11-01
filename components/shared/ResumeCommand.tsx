import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";

interface ResumeCommandProps {
  shouldRedirect: boolean;
}

const ResumeCommand: React.FC<ResumeCommandProps> = ({ shouldRedirect }) => {
  const [loadingChar, setLoadingChar] = useState("/");

  useEffect(() => {
    if (shouldRedirect) {
      const timer = setTimeout(() => {
        window.location.href = "https://your-resume-link-here.com";
      }, 1500); // Redirect after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [shouldRedirect]);

  useEffect(() => {
    const chars = ["/", "-", "\\", "|"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % chars.length;
      setLoadingChar(chars[index]);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-foreground mt-2">
      <p className="flex items-center">
        <FileText className="mr-2 text-cyan" size={20} />
        <span className="text-yellow">I'm loading! {loadingChar}</span>
      </p>
      <p className="text-muted-foreground mt-1">
        If you are not redirected automatically, please
        <a
          href="https://your-resume-link-here.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue hover:underline ml-1"
        >
          click here
        </a>
      </p>
    </div>
  );
};

export default ResumeCommand;
