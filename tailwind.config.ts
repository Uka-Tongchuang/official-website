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
      md: "870px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        "azul": "#165CFF",
        "baby-blue": "#93D0FF",
        "ghost-white": "#F6F9FF",
        "ironside-grey": "#666666",
        "footer-black":"#2B2E3A",
        "nav-font-color": "#ABABAB",
        "card-bg-color":"#FAFBFF",
        "ccc":"#666666",
        "m-color":"#F7F7F7",
        "a-color":"#F8FAFD"
      },
      fontSize:{
        ssm:"8px",
        xs:"10px",
        sm:"12px",
        md:"14px",
        lg:"16px",
        xl:"20px",
        "2xl":"24px",
        "3xl":"30px",
        "4xl":"42px",
      },
      fontFamily: {
        square: ['PingFang SC', 'Noto Sans SC', 'sans-serif'],
        microsoftYahei: ['Microsoft YaHei', '微软雅黑', 'sans-serif'],
      },
    }
  },
  plugins: [],
};
export default config;
