const withMdx = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  pageExtensions: ['tsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withMdx(nextConfig);
