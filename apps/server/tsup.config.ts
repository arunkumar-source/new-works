import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  platform: "node",
  target: "node18",
  external: ["fs", "dotenv", "@repo/db", "@repo/shared"],
  dts: false,
  clean: true,
  sourcemap: false,
});
