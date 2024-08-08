import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "sm": {"min":"320px","max":"480px"},
      "md": "481px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
<<<<<<< HEAD
        azul: "#165CFF",
        "baby-blue": "#93D0FF",
        "ghost-white": "#F6F9FF",
        "ironside-grey": "#666666",
        "footer-black":"#2B2E3A",
        "nav-font-color": "#ABABAB"
      }
    }
=======
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
>>>>>>> cabf784f0561e6693f27d9fc44865e08bc5df188
  },
  plugins: [],
};
export default config;
