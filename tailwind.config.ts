import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nav-pattern": "url('/assets/images/grid.svg')",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
      height: {
        "full-viewport": "100dvh",
      },
      screens: {
        xs: "360px",

        "2xl": "1250px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
