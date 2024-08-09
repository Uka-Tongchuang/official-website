import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        azul: "#165CFF",
        "baby-blue": "#93D0FF",
        "ghost-white": "#F6F9FF",
        "ironside-grey": "#666666",
        "footer-black":"#2B2E3A",
        "nav-font-color": "#ABABAB"
      }
    }
  },
  plugins: [],
};
export default config;
