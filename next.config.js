/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['img.shields.io'],
  },
};

module.exports = nextConfig;
