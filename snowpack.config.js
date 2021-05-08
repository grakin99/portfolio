// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
  },
  plugins: ["@snowpack/plugin-postcss", "@snowpack/plugin-webpack"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: "portfolio",
  },
  // optimize: { bundle: true, minify: true, target: "es2017" },
  exclude: ["**/node_modules/**", "**/scss/**"],
};
