import React from "react";

interface HistoryCommandProps {
  commandHistory: string[];
}

const HistoryCommand: React.FC<HistoryCommandProps> = ({ commandHistory }) => {
  return (
    <div className="font-mono text-foreground space-y-1">
      {commandHistory && commandHistory.map((command) => <p>{command}</p>)}
    </div>
  );
};

export default HistoryCommand;
