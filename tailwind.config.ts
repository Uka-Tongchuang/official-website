import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul': '#165CFF',
        'baby-blue': '#93D0FF',
        'ghost-white': '#F6F9FF',
        'ironside-grey': '#666666'
      },
    },
  },
  plugins: [],
};
export default config;
