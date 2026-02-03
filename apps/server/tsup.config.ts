import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: false,
  noExternal:["@repo/db","@repo/shared"],
  format:"esm",
  outDir:"."
})