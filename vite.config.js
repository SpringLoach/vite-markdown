import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import markdown from "./plugin/markdown/index";

export default defineConfig({
  plugins: [vue(), markdown()],
});
