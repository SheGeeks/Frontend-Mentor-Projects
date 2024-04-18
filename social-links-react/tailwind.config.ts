import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#c5f82a",
        lprimary: "#545945",
      },
      backgroundImage: {
        neonL: "url('/images/NeonBG_light.jpg')",
        neonD: "url('/images/NeonBG.png')",
      },
    },
  },
  plugins: [],
};

export default config;
