// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const [user, repo] = process.env.GITHUB_REPOSITORY.split("/");

// https://astro.build/config
export default defineConfig({
  site: `https://${user}.github.io`,
  base: repo === user + ".github.io" ? undefined : `/${repo}`,
  vite: {
    plugins: [tailwindcss()],
  },
});
