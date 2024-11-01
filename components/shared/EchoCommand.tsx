import React from "react";

interface EchoCommandProps {
  text: string;
}

const EchoCommand: React.FC<EchoCommandProps> = ({ text }) => {
  // Remove surrounding quotes if present
  const cleanedText = text.replace(/^["'](.*)["']$/, "$1");
  return (
    <div className="font-mono text-foreground mt-1">
      <span className="text-cyan">{cleanedText}</span>
    </div>
  );
};

export default EchoCommand;
