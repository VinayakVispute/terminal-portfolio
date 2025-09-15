"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type EffectsContextType = {
  matrixEffect: boolean;
  toggleMatrixEffect: () => void;
  crtEffect: boolean;
  toggleCrtEffect: () => void;
};

const EffectsContext = createContext<EffectsContextType | undefined>(undefined);

export const EffectsProvider = ({ children }: { children: ReactNode }) => {
  const [matrixEffect, setMatrixEffect] = useState(false);
  const [crtEffect, setCrtEffect] = useState(false);

  const toggleMatrixEffect = () => setMatrixEffect((prev) => !prev);
  const toggleCrtEffect = () => setCrtEffect((prev) => !prev);

  return (
    <EffectsContext.Provider
      value={{
        matrixEffect,
        toggleMatrixEffect,
        crtEffect,
        toggleCrtEffect,
      }}
    >
      {children}
    </EffectsContext.Provider>
  );
};

export const useEffects = () => {
  const context = useContext(EffectsContext);
  if (context === undefined) {
    throw new Error("useEffects must be used within an EffectsProvider");
  }
  return context;
};
