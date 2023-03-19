/** @type {import('next').NextConfig} */
const isDev = true;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/logged-assets/trust-badge/**',
      },
    ],
  },
};

module.exports = nextConfig;
