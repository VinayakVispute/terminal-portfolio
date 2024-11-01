"use client";
import React, { useState } from "react";

const InputField = (params: any) => {
  const {
    currentPath,
    handleCommandSubmit,
    handleKeyDown,
    currentCommand,
    setCurrentCommand,
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
      />
    </div>
  );
};

export default InputField;
