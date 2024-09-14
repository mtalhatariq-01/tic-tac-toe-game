import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FF4136", // red theme color
        blue: "#050715", // black theme color
        white: "#FFFFFF", // white color
      },
    },
  },
  plugins: [],
};
export default config;
