"use client";

import React, { useRef, useEffect } from "react";
import { useEffects } from "@/lib/context/EffectsContext";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { matrixEffect } = useEffects();

  useEffect(() => {
    if (!matrixEffect || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Characters for the Matrix effect (katakana, digits, etc.)
    const chars =
      "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890";

    // Create array of drops
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);

    // Set up drops array: position and speed for each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Primary color
    const baseGreen = "rgba(0, 255, 70, 1)";
    const fadedGreen = "rgba(0, 255, 70, 0.2)";

    // Drawing the matrix rain animation
    const draw = () => {
      if (!matrixEffect) return;

      // Background with transparency for trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set font style for characters
      ctx.font = `${fontSize}px monospace`;

      // Drawing the characters
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Brightness of the character (head of drop is brighter)
        const y = Math.floor(drops[i] * fontSize);

        if (y > 0 && y < canvas.height) {
          // Head of the drop (brighter)
          ctx.fillStyle = baseGreen;
          ctx.fillText(char, i * fontSize, y);

          // Tail effect (fainter characters behind the head)
          const tailLength = 5 + Math.floor(Math.random() * 15);
          for (let j = 1; j <= tailLength; j++) {
            const tailY = y - j * fontSize;
            if (tailY > 0) {
              // Decreasing opacity for tail characters
              const opacity = 1 - j / tailLength;
              ctx.fillStyle = `rgba(0, 255, 70, ${opacity * 0.6})`;
              ctx.fillText(
                chars[Math.floor(Math.random() * chars.length)],
                i * fontSize,
                tailY
              );
            }
          }
        }

        // Move drop down
        drops[i] += 0.05 + Math.random() * 0.1;

        // Reset drop when it reaches bottom of screen or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!matrixEffect) return;
      draw();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [matrixEffect]);

  if (!matrixEffect) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-25"
    />
  );
};

export default MatrixRain;
