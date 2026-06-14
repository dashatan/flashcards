import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { serwist } from "@serwist/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    serwist({
      swSrc: "src/sw.ts",
      swDest: "sw.js",
      globDirectory: "dist",
      globPatterns: ["**/*.{js,css,html,ico,png,svg,json,webmanifest}"],
      injectionPoint: "self.__SW_MANIFEST",
      rollupFormat: "iife",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
