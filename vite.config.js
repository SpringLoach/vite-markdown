import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import markdown from "./plugin/markdown/index";
import unitFit from "./plugin/unitFit/index";

export default defineConfig({
  // plugins: [vue(), markdown()],
  plugins: [vue(), markdown(), unitFit()],
});
