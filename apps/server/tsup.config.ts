import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  outDir: "api",
  platform: "node",
  target: "node18",
  noExternal: ["fs", "dotenv", "@repo/db", "@repo/shared"],
  dts: false,
  clean: true,
  sourcemap: false,
});
