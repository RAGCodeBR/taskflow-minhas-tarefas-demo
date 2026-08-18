import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages serves project sites under /<repo-name>/.
  // Keep this in sync with the repository name, otherwise asset URLs break and the page opens blank.
  // Portable build: assets resolve beside index.html when the folder is shared.
  base: "./",
  define: {
    // The app uses this flag to avoid TanStack Start server behavior in the static GitHub Pages build.
    "import.meta.env.VITE_GITHUB_PAGES": JSON.stringify("true"),
  },
  resolve: {
    alias: {
      "@tanstack/react-start/server": "/src/pages-react-start-stub.ts",
      "@tanstack/react-start": "/src/pages-react-start-stub.ts",
    },
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    // Static files are generated here first, then scripts/prepare-gh-pages.mjs renames the entry file.
    outDir: ".gh-pages-dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "index.pages.html",
      output: {
        // A single non-module bundle can be loaded from file:// as well as a
        // web server, which is essential for the shareable reference copy.
        format: "iife",
        inlineDynamicImports: true,
      },
    },
  },
});
