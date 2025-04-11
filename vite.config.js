import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  css: {
    minify: "esbuild",
  },
  build: {
    cssCodeSplit: true,
  },
});
