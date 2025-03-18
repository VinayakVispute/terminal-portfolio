"use client";

import React from "react";
import { useEffects } from "@/lib/context/EffectsContext";

const CrtEffect = () => {
  const { crtEffect } = useEffects();

  if (!crtEffect) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-scanlines opacity-10"></div>

      {/* Flicker animation */}
      <div className="absolute inset-0 animate-flicker bg-white opacity-[0.02]"></div>

      {/* CRT edges and glow */}
      <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_15px_rgba(0,0,0,0.7)] pointer-events-none"></div>

      {/* TV screen curvature effect */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow:
            "inset 0 0 100px rgba(0, 40, 80, 0.3), 0 0 12px rgba(120, 220, 255, 0.3)",
        }}
      ></div>

      {/* Color aberration effect */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,0,0,0.3), rgba(0,255,0,0.3), rgba(0,0,255,0.3))",
          backgroundSize: "100% 3px",
          transform: "translateX(2px)",
        }}
      ></div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-60"
        style={{
          background: "radial-gradient(circle, transparent 60%, black 150%)",
        }}
      ></div>
    </div>
  );
};

export default CrtEffect;
