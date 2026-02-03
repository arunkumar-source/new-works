import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  platform: "node",
  target: "node18",
  bundle: true,
  external: ["@repo/db", "@repo/shared"],
  clean: true,
  sourcemap: false,
});
