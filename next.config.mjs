/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
