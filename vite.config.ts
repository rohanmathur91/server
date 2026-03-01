import { defineConfig } from "vite";

export default defineConfig({
  build: {
    ssr: "src/index.ts",
    outDir: "dist",
    rollupOptions: {
      output: {
        format: "cjs",
      },
    },
  },
  ssr: {
    noExternal: true, // bundle ALL deps into the output file, don't leave require() calls
    target: "node",
  },
});
