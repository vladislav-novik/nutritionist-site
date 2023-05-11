/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = withPlaiceholder({
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['cdn.sanity.io'],
    // path: '/images/4osbkm4l',
    dangerouslyAllowSVG: true,
  },
});

module.exports = nextConfig
