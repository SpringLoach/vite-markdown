import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "plugin/markdown/index.js",
  output: {
    file: "lib/markdown.js",
    format: "es",
  },
  external: ["markdown-it"],
  plugins: [
    resolve(), // 支持 Rollup 找到外部模块
    commonjs(), // 支持依赖中的 commonJS
  ],
};
