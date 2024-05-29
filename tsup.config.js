import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "bin/baluka-cli.js"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
});
