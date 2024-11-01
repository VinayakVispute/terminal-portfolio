import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Solarized base colors
        base03: "#002b36", // Darkest background
        base02: "#073642", // Dark background
        base01: "#586e75", // Optional content
        base00: "#657b83", // Body text
        base0: "#839496", // Primary content
        base1: "#93a1a1", // Comments
        base2: "#eee8d5", // Light background
        base3: "#fdf6e3", // Lightest background

        // Solarized accent colors
        yellow: "#b58900",
        orange: "#cb4b16",
        red: "#dc322f",
        magenta: "#d33682",
        violet: "#6c71c4",
        blue: "#268bd2",
        cyan: "#2aa198",
        green: "#859900",

        // Semantic mappings for easier use
        primary: "#839496", // base0
        secondary: "#586e75", // base01
        background: {
          DEFAULT: "#002b36", // base03
          light: "#073642", // base02
        },
        foreground: {
          DEFAULT: "#839496", // base0
          light: "#93a1a1", // base1
        },
        muted: {
          DEFAULT: "#586e75", // base01
          light: "#657b83", // base00
        },
        border: "#073642", // base02
        accent: "#2aa198", // cyan
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
