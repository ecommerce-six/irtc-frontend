/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["react-redux"],
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
  },
};

// const removeImports = require("next-remove-imports")();

// module.exports = removeImports({});

module.exports = nextConfig;
