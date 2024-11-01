import React from "react";

const HelpCommand = () => {
  const commands = [
    { name: "about", description: "Display information about me" },
    { name: "projects", description: "Show a list of my projects" },
    { name: "skills", description: "List my technical skills" },
    { name: "socials", description: "Display my social media links" },
    { name: "resume", description: "View or download my resume" },
    { name: "experiences", description: "Show my work experiences" },
    { name: "goals", description: "Display my current goals" },
    { name: "clear", description: "Clear the terminal screen" },
    { name: "history", description: "Show command history" },
    { name: "echo [text]", description: "Display a line of text" },
  ];

  return (
    <div className="font-mono text-foreground">
      <p className="text-accent mb-2">Available Commands:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {commands.map((cmd, index) => (
          <div key={index} className="flex">
            <span className="text-yellow w-28">{cmd.name}</span>
            <span className="text-muted-light">- {cmd.description}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-muted">
        Type a command and press Enter to execute.
      </p>
      <p className="mt-2 text-muted">
        Use arrow keys ↑↓ to navigate command history.
      </p>
    </div>
  );
};

export default HelpCommand;