"use client";
import React, { useState } from "react";

interface InputFieldProps {
  currentPath: string;
  handleCommandSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  currentCommand: string;
  setCurrentCommand: (value: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const InputField = (params: InputFieldProps) => {
  const {
    currentPath,
    handleCommandSubmit,
    handleKeyDown,
    currentCommand,
    setCurrentCommand,
    inputRef,
  } = params;

  return (
    <div className="flex">
      <span className="text-blue font-bold mr-1">visitor@vinayak:~/</span>
      <span className="text-accent font-bold mr-1">{currentPath}</span>
      <span className="font-normal mr-2">$</span>
      <input
        type="text"
        className="bg-inherit outline-none w-full"
        onChange={(e) => setCurrentCommand(e.target.value)}
        value={currentCommand}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        ref={inputRef}
      />
    </div>
  );
};

export default InputField;
