"use client";

import React, { useState, useEffect, useRef } from "react";
import Heading from "@/components/shared/Heading";
import InputField from "@/components/shared/InputField";
import HelpCommand from "@/components/shared/HelpCommand";
import AboutCommand from "@/components/shared/AboutCommand";
import SkillsCommand from "@/components/shared/SkillCommand";
import SocialsCommand from "@/components/shared/SocialsCommand";
import ProjectsCommand from "@/components/shared/ProjectsCommand";
import ExperienceCommand from "@/components/shared/ExperienceCommand";
import GoalsCommand from "@/components/shared/GoalsCommand";
import ResumeCommand from "@/components/shared/ResumeCommand";
import HistoryCommand from "@/components/shared/HistoryCommand";
import EchoCommand from "@/components/shared/EchoCommand";
import DefaultCommand from "@/components/shared/DefaultCommand";
import EffectsCommand from "@/components/shared/EffectsCommand";
import MatrixRain from "@/components/effects/MatrixRain";
import CrtEffect from "@/components/effects/CrtEffect";
import CodetimeCommand from "@/components/shared/CodetimeCommand";

const availableCommands = [
  "help",
  "about",
  "skills",
  "socials",
  "projects",
  "experience",
  "goals",
  "resume",
  "history",
  "clear",
  "effects",
  "codetime",
];

const TerminalPage = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentPath, setCurrentPath] = useState("portfolio");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistoryIndex(commandHistory.length);
  }, [commandHistory]);

  useEffect(() => {
    // Scroll to the bottom of the terminal when command history updates
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commandHistory]);

  const handleCommandSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const command = target.value.trim();
    if (command) {
      setCommandHistory((prev) => [...prev, command]);

      // Change currentPath based on the command
      if (availableCommands.includes(command)) {
        if (command === "clear") {
          setCurrentPath("portfolio");
          setCommandHistory([]);
        } else {
          setCurrentPath(command); // Set current path to the command name
        }
      } else {
        setCurrentPath("portfolio"); // Default to "portfolio" for unrecognized commands
      }
    }
    setCurrentCommand("");
    setHistoryIndex(commandHistory.length + 1);
  };

  const handleShortcuts = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: string
  ) => {
    if (type === "clear") {
      e.preventDefault();

      setCommandHistory([]);
      setCurrentCommand("");
      setCurrentPath("portfolio");
    }
    if (type === "cancel") {
      e.preventDefault();
      if (currentCommand.trim() == "") {
        return;
      }
      const target = e.target as HTMLInputElement;
      setCommandHistory((prev) => [...prev, `${target.value} ^C`]);
      setCurrentCommand("");
      return;
    }
  };

  const handleAutoComplete = () => {
    const matchedCommand = availableCommands.find((command) =>
      command.startsWith(currentCommand)
    );

    if (matchedCommand) {
      setCurrentCommand(matchedCommand);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommandSubmit(e);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setCurrentCommand(commandHistory[historyIndex - 1]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < commandHistory.length) {
        setHistoryIndex(historyIndex + 1);
        setCurrentCommand(commandHistory[historyIndex] || "");
      }
    }
    if (e.ctrlKey) {
      if (e.key === "l") {
        handleShortcuts(e, "clear");
      } else if (e.key === "c") {
        console.log("Ctrl + C");
        handleShortcuts(e, "cancel");
      }
    }
    if (e.key === "Tab") {
      e.preventDefault();
      handleAutoComplete();
    }
  };

  const ConditionalRender = (cmd: string) => {
    if (cmd.startsWith("echo ")) {
      const text = cmd.slice(5).trim(); // Remove "echo " from the command
      const cleanedText = text.replace(/^["'](.*)["']$/, "$1"); // Remove surrounding quotes if present
      return <EchoCommand text={cleanedText} />;
    }

    if (cmd.startsWith("effects")) {
      const parts = cmd.split(" ");
      // If there's an argument (effects type)
      if (parts.length > 1) {
        return <EffectsCommand effectArg={parts[1]} />;
      }
      return <EffectsCommand />;
    }

    if (cmd.startsWith("history")) {
      // Handle history command with optional filter argument
      const parts = cmd.split(/\s(.+)/); // Split on first space only
      if (parts.length > 1 && parts[1].trim()) {
        return (
          <HistoryCommand
            commandHistory={commandHistory}
            filterArg={parts[1].trim()}
          />
        );
      }
      return <HistoryCommand commandHistory={commandHistory} />;
    }

    switch (cmd) {
      case "help":
        return <HelpCommand />;
      case "about":
        return <AboutCommand />;
      case "skills":
        return <SkillsCommand />;
      case "socials":
        return <SocialsCommand />;
      case "projects":
        return <ProjectsCommand />;
      case "experience":
        return <ExperienceCommand />;
      case "goals":
        return <GoalsCommand />;
      case "resume":
        return <ResumeCommand shouldRedirect={true} />;
      case "codetime":
        return <CodetimeCommand />;
      default:
        if (cmd.endsWith("^C")) return;
        return <DefaultCommand command={cmd} />;
    }
  };

  return (
    <div className="bg-background text-foreground p-4 min-h-screen flex flex-col">
      {/* Special effects components */}
      <MatrixRain />
      <CrtEffect />

      <div className="flex-shrink-0 relative z-10">
        <Heading />
      </div>
      <div className="flex-grow mt-4 flex flex-col overflow-auto relative z-10">
        <div className="p-4">
          {commandHistory.map((cmd, index) => (
            <div key={index} className="mb-2">
              <span className="text-blue font-bold mr-1">
                visitor@vinayak:~/
              </span>
              <span className="text-accent font-bold mr-1">{currentPath}</span>
              <span className="font-normal mr-2">$</span>
              {cmd}
              {ConditionalRender(cmd)}
            </div>
          ))}
          <div ref={terminalEndRef} />
          <InputField
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
            handleCommandSubmit={handleCommandSubmit}
            handleKeyDown={handleKeyDown}
            currentCommand={currentCommand}
            setCurrentCommand={setCurrentCommand}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;
