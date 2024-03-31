import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@cm": path.resolve(__dirname, "./src/components"),
      "@img": path.resolve(__dirname, "./src/assets/images"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@hk": path.resolve(__dirname, "./src/hooks"),
      "@lt": path.resolve(__dirname, "./src/layout"),
      "@pg": path.resolve(__dirname, "./src/pages"),
      "@rt": path.resolve(__dirname, "./src/router"),
      "@str": path.resolve(__dirname, "./src/store"),
      "@utl": path.resolve(__dirname, "./src/utils"),
      "@tps": path.resolve(__dirname, "./src/types"),
    },
  },
});
