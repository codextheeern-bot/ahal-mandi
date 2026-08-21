import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackRouter({ quoteStyle: "single" }),
    tanstackStart(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  nitro: {
    preset: "vercel",
  },
});
