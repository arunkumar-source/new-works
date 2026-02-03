import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",        // 🔴 REQUIRED
  format: ["esm"],
  target: "node18",
  sourcemap: true,
  clean: true
})
