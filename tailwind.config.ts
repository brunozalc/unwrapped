import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        offblack: "#121212",
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
        "fade-in-delay-1.5s": "fade-in 1s ease-in-out 1.5s forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
