module.exports = {
  reactStrictMode: true,
  output: "standalone",
  poweredByHeader: false,
  experimental: {
    transpilePackages: ["@krubb/ui"],
    appDir: true,
  },
};
