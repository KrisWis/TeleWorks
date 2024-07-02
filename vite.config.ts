import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Resolve aliases
const aliases = {
  "@": path.resolve(__dirname, "./src"), // Replace 'src' with your actual source directory
};

export default defineConfig({
  plugins: [react()],
  base: "/TeleWorks/",
  resolve: {
    alias: aliases,
  },
  build: { emptyOutDir: false },
});
