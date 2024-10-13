import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

const aliases = {
  "@": path.resolve(__dirname, "./src"),
};

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/TeleWorks/",
  resolve: {
    alias: aliases,
  },
  build: {
    emptyOutDir: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }

          if (
            id.includes("src/app/routes/AppRoutes.tsx") ||
            id.includes("src/app/index.ts")
          ) {
            return "app-routes";
          }
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  server: {
    open: true,
  },
});
