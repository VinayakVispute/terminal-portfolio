import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";

interface ResumeCommandProps {
  shouldRedirect: boolean;
}

const ResumeCommand: React.FC<ResumeCommandProps> = ({ shouldRedirect }) => {
  const [loadingChar, setLoadingChar] = useState("/");
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (shouldRedirect && !isOpened) {
      const timer = setTimeout(() => {
        window.open(process.env.NEXT_PUBLIC_RESUMELINK || "", "_blank");
        setIsOpened(true);
      }, 1500); // Open the resume link in a new tab after 1.5 seconds

      return () => clearTimeout(timer);
    }
  }, [shouldRedirect, isOpened]);

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
          <span className="text-yellow">I&apos;m loading! {loadingChar}</span>
        )}
      </p>
      <p className="text-muted-foreground mt-1">
        {isOpened ? (
          <>
            You can also{" "}
            <a
              href={process.env.NEXT_PUBLIC_RESUMELINK || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline ml-1"
            >
              click here
            </a>{" "}
            to open it again.
          </>
        ) : (
          <>
            If not redirected, please
            <a
              href={process.env.NEXT_PUBLIC_RESUMELINK || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline ml-1"
            >
              click here
            </a>
            .
          </>
        )}
      </p>
    </div>
  );
};

export default ResumeCommand;
