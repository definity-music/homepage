/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: "dist",
  assetPrefix: "./",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.scdn.co"],
  },
  compiler: { styledComponents: true },
};

module.exports = nextConfig;
