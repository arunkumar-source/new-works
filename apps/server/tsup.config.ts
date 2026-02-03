import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.js'],
  splitting: false,
  sourcemap: false,
  clean: false,
  noExternal:["@repo/db","@repo/shared"],
  format:"esm",
  outDir:"."
})