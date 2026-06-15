import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        accent: {
          DEFAULT: "#6c6cf5",
          light: "#8b8bff",
        },
        telegram: {
          DEFAULT: "#3b8fd6",
          light: "#5fa8e8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
