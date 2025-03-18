"use client";

import React, { useEffect, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";

interface ResumeCommandProps {
  shouldRedirect: boolean;
}

const ResumeCommand: React.FC<ResumeCommandProps> = ({ shouldRedirect }) => {
  const [loadingChar, setLoadingChar] = useState("/");
  const [isOpened, setIsOpened] = useState(false);
  const resumeLink = process.env.NEXT_PUBLIC_RESUMELINK || "";

  useEffect(() => {
    if (shouldRedirect && !isOpened) {
      const timer = setTimeout(() => {
        window.open(resumeLink, "_blank");
        setIsOpened(true);
      }, 1000); // Open the resume link in a new tab after 1 second

      return () => clearTimeout(timer);
    }
  }, [shouldRedirect, isOpened, resumeLink]);

  useEffect(() => {
    if (!isOpened) {
      const chars = ["/", "-", "\\", "|"];
      let index = 0;

      const interval = setInterval(() => {
        index = (index + 1) % chars.length;
        setLoadingChar(chars[index]);
      }, 250); // Update loading character every 250ms

      return () => clearInterval(interval);
    }
  }, [isOpened]);

  return (
    <div className="font-mono text-foreground mt-2">
      <p className="flex items-center">
        <FileText className="mr-2 text-cyan" size={20} />
        {isOpened ? (
          <span className="text-green">Resume opened in a new tab!</span>
        ) : (
          <span className="text-yellow flex items-center">
            <span className="animate-pulse mr-2">●</span>
            Opening resume in new tab {loadingChar}
          </span>
        )}
      </p>
      <p className="text-muted-foreground mt-1">
        {isOpened ? (
          <>
            You can also{" "}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline flex items-center inline-flex"
            >
              click here
              <ExternalLink size={12} className="ml-1" />
            </a>{" "}
            to open it again.
          </>
        ) : (
          <>
            If not redirected, please{" "}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline flex items-center inline-flex"
            >
              click here
              <ExternalLink size={12} className="ml-1" />
            </a>
          </>
        )}
      </p>
    </div>
  );
};

export default ResumeCommand;
