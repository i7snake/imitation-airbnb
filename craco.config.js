const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);
module.exports = {
  //less配置
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // webpack 配置路径别名
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
};
