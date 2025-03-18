"use client";

import React from "react";
import { useEffects } from "@/lib/context/EffectsContext";
import { Monitor, Tv, Check, BrainCircuit, Eye, Zap } from "lucide-react";

interface EffectsCommandProps {
  effectArg?: string;
}

const EffectsCommand: React.FC<EffectsCommandProps> = ({ effectArg }) => {
  const { matrixEffect, toggleMatrixEffect, crtEffect, toggleCrtEffect } =
    useEffects();

  React.useEffect(() => {
    if (effectArg) {
      if (effectArg === "matrix") {
        toggleMatrixEffect();
      } else if (effectArg === "crt") {
        toggleCrtEffect();
      }
    }
  }, [effectArg, toggleMatrixEffect, toggleCrtEffect]);

  return (
    <div className="font-mono text-foreground space-y-4 mt-2">
      <div className="bg-base02 p-4 rounded-md max-w-2xl">
        <h3 className="text-accent font-semibold mb-3 flex items-center">
          <Monitor className="mr-2" size={18} />
          Terminal Effects
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 bg-black/20 rounded-md">
            <div className="flex items-center">
              <BrainCircuit className="text-green mr-2" size={18} />
              <span className="text-yellow">Matrix Effect</span>
            </div>
            <button
              onClick={toggleMatrixEffect}
              className={`px-3 py-1 rounded-md transition-colors flex items-center ${
                matrixEffect
                  ? "bg-green/20 text-green"
                  : "bg-base01 text-muted-foreground"
              }`}
            >
              {matrixEffect ? (
                <>
                  <Check size={16} className="mr-1" />
                  ON
                </>
              ) : (
                "OFF"
              )}
            </button>
          </div>

          <div className="flex items-center justify-between p-2 bg-black/20 rounded-md">
            <div className="flex items-center">
              <Tv className="text-blue mr-2" size={18} />
              <span className="text-yellow">CRT Screen Effect</span>
            </div>
            <button
              onClick={toggleCrtEffect}
              className={`px-3 py-1 rounded-md transition-colors flex items-center ${
                crtEffect
                  ? "bg-blue/20 text-blue"
                  : "bg-base01 text-muted-foreground"
              }`}
            >
              {crtEffect ? (
                <>
                  <Check size={16} className="mr-1" />
                  ON
                </>
              ) : (
                "OFF"
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          <p className="flex items-center">
            <Eye className="mr-2" size={14} />
            Toggle effects with:{" "}
            <span className="text-cyan ml-1 font-bold">
              effects matrix
            </span> or{" "}
            <span className="text-cyan ml-1 font-bold">effects crt</span>
          </p>
          {(matrixEffect || crtEffect) && (
            <p className="mt-2 flex items-center text-yellow">
              <Zap className="mr-2" size={14} />
              Effects are active! Use the same command to turn them off.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EffectsCommand;
