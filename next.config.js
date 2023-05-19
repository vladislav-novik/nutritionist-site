/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = withPlaiceholder({
  experimental: {
    serverActions: true,
  },

  images: {
    domains: ['cdn.sanity.io'],
    dangerouslyAllowSVG: true,
  },
  
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
});

module.exports = nextConfig
