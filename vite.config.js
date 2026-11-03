import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 5277,
    host: true,
  },
  build: {
    target: "es2020",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        en: resolve(__dirname, "en/index.html"),
        confidentialite: resolve(__dirname, "confidentialite.html"),
        confidentialiteEn: resolve(__dirname, "en/confidentialite.html"),
      },
    },
  },
});
