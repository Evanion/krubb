const path = require("path");

module.exports = {
  reactStrictMode: true,
  output: "standalone",
  poweredByHeader: false,
  experimental: {
    transpilePackages: ["@krubb/ui"],
    outputFileTracingRoot: path.join(__dirname, "../../"),
    appDir: true,
  },
};
