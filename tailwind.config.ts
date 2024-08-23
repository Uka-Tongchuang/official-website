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
        "ironside-grey": "#666666",
        "footer-black":"#2B2E3A",
        "nav-font-color": "#ABABAB",
        "a-color":"#F8FAFD",
        "title-text-color":"#222222",
        "app-hr":"#E8EBED",
        "circle-bg":"#F2F7FF",
        "card-a-bg":"#FFF9F1",
        "card-a-t":"#5598F9",
        "card-b-t":"#FA887D",
        "card-c-t":"#FAA352",
        "card-d-t":"#62DDE9",
        "g-color":"#333333",
        "lg-bg":"#CDE2FF",
        "dashed-color":"#E9FAFC",
        "red-color":"#FFF6F5"
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
        h2: "32px"
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
