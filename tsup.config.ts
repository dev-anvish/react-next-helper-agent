import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx"], // build all .ts files in src (and subfolders)
  format: ["esm", "cjs"], // output both ESM and CJS
  dts: true, // generate .d.ts files
  clean: true, // clean dist/ before building
  sourcemap: true, // add source maps for debugging
  minify: true, // minify output
  outDir: "dist", // output folder
  external: ["react", "react-dom"], //prevent react 2 copies
});
