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
        'alice-blue': '#F1F8FF',
        'alabaster': '#F8FAFD',
        'dark-jungle': '#222222',
        'dune': '#333333',
        'ironside-grey': '#666666',
        'silver-chalice': '#ABABAB',
        'periwinkle': '#C0D3FF'
      },
    },
  },
  plugins: [],
};
export default config;
