//rollup config with types
const { defineConfig } = require("rollup");
const pkg = require("./package.json");
const typescript = require("@rollup/plugin-typescript");
const resolve = require("rollup-plugin-node-resolve");
module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "auto",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "auto",
    },
  ],
  external: ["fs", "postcss", "shelljs"],
  plugins: [typescript(), resolve()],
};
