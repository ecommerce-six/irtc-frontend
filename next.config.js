/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["react-redux"],
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sabzlearn.ir",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
