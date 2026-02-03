import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",    
  format: ["esm"],
  target: "node18",
  noExternal: ["@repo/db", "@repo/shared"],
  sourcemap: true,
  clean: false,
})
