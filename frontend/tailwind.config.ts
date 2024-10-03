import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-page-texture": "url('/img/home-page-texture-min-2048.jpg')",
        "open-account-texture": "url('/img/open-account-texture-1024.png')",
        "open-account-house":
          "url('/img/open-account-house-image-min-2048.jpg')",
        "for-company-background": "url('/img/for-company-background-2048.jpg')",
        "new-horizon": "url('/img/new_horizons.jpg')",
        "rend-variavel": "url('/img/rend-variavel-min-2028.jpg')",
        "rend-fixa": "url('/img/rend-fixa.jpg')",
        international: "url('/img/international.jpg')",
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
};
export default config;
