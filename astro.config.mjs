// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: `https://${import.meta.env.GITHUB_REPOSITORY_OWNER}.github.io`,
  vite: {
    plugins: [tailwindcss()],
  },
});
