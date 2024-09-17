import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-page-texture": "url('/img/home-page-texture.jpeg')",
        "open-account-texture": "url('/img/open-account-texture.jpg')",
        "open-account-house": "url('/img/open-account-house-image.jpeg')",
        "for-company-background": "url('/img/for-company-background.jpg')",
        "new-horizon": "url('/img/new_horizons.jpg')",
        "rend-variavel": "url('/img/rend-variavel.jpeg')",
      },
      colors: {
        preto_pleno: "#231f20",
        cinza_petroleo: "#1c2b31",
        azul_sereno: "#005779",
        cinza_ameno: "#d9dbda",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        lato: ["Lato"],
        garamond: ["Garamond"],
        roboto: ["Roboto", "sans-serif"],
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
