import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const aliases = {
  "@": path.resolve(__dirname, "./src"),
};

export default defineConfig({
  plugins: [react()],
  base: "/TeleWorks/",
  resolve: {
    alias: aliases,
  },
  build: {
    emptyOutDir: false,
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
        },
      },
    },
  },
});
