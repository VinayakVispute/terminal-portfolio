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
      if (command === "clear") {
        setCommandHistory([]);
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
    }
    if (type === "cancel") {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      setCommandHistory((prev) => [...prev, `${target.value} ^C`]);
      setCurrentCommand("");
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
        handleShortcuts(e, "cancel");
      }
    }
  };

  const ConditionalRender = (cmd: string) => {
    if (cmd.startsWith("echo ")) {
      const text = cmd.slice(5).trim(); // Remove "echo " from the command
      const cleanedText = text.replace(/^["'](.*)["']$/, "$1"); // Remove surrounding quotes if present
      return <EchoCommand text={cleanedText} />;
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
      case "history":
        return <HistoryCommand commandHistory={commandHistory} />;
      default:
        return <DefaultCommand command={cmd} />;
    }
  };

  return (
    <div className="bg-background text-foreground p-4 min-h-screen flex flex-col">
      <div className="flex-shrink-0">
        <Heading />
      </div>
      <div className="flex-grow mt-4 flex flex-col overflow-auto">
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
