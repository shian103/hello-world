"use strict";
// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
const { defineConfig } = require("@vue/cli-service");
module.exports = {
  // 部署应用包时的基本URL,默认为'/'
  publicPath: "/",
  // 将构建好的文件输出到哪里
  outputDir: "dist",
  // 放置生成的静态资源(js,css,img,fonts)的目录
  assetsDir: "",
  // 关闭eslint校验功能
  lintOnSave: false,
};
module.exports = defineConfig({
  transpileDependencies: true,
});
