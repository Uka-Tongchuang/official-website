/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 基准值，这通常是浏览器的默认字体大小（16px）
      propList: ["px","rem"], // 你希望转换的属性
      minPixelValue: 2, // 设置最小的转换像素值，所有小于这个值的不会被转换
      selectorBlackList: [], // 你希望忽略的选择器
      mediaQuery: true, // 允许在媒体查询中转换px
      replace: true, // 替换px而不是添加fallback
    }
  },
};

export default config;
