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
        white: "#fefefe",
        accent: "#4971AB",
        background: "#236F21",
        primary: "#FF9900",
        secondary: "#292E2F",
        text: "#FCFAF8",
      },
      screens: {
        sm: { max: "639px" },
        // => @media (min-width: 640px) { ... }

        md: { max: "767px" },
        // => @media (min-width: 768px) { ... }

        lg: { max: "1023px" },
        // => @media (min-width: 1024px) { ... },
        xl: { max: "1279px" },
      },
      boxShadow: {
        "3xl": "0px 7px 16px 0px rgba(0, 0, 0, 0.50)",
      },
      dropShadow: {
        btc: "0px 5px 8px rgba(0, 0, 0, 0.80)",
        title: "2px 2px 2px rgba(255, 255, 255, 1)",
      },

      container: {
        center: true,
        screens: {
          sm: "85vw",
          md: "85vw",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
