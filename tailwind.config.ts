const { heroui } = require("@heroui/react");
const flowbite = require("flowbite-react/tailwind");

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",


  ],
  prefix: "",
  theme: {
    extend: {
      
    },
  },
  plugins: [heroui()
  ],
} satisfies Config;

export default config;
