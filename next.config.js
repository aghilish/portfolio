/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment - update this to your repo name
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
