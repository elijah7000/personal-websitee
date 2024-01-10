import type { Config } from "tailwindcss";
import { Noto_Sans, Oswald } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImgOne: "url('/BusyCity.png')",
        backgroundImgTwo: "url('/tiger.png')",
      },
      fontFamily: {
        notoSans: ["Noto Sans", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
      keyframes: {
        reveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(10%)",
          },
          "20%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
            transform: " translateY(0%)",
          },
          " 100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
        revealTopBot: {
          "0%": {
            opacity: "0",
          },
          "20%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          " 100%": {
            opacity: "1",
          },
        },
        revealPic: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        reveal: "3.5s reveal ease-out",
        revealTopBot: "3.5s revealTopBot ease-out",
        revealPic: "2.5s revealPic ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
