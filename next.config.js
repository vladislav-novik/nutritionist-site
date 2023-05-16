/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = withPlaiceholder({
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['cdn.sanity.io'],
    dangerouslyAllowSVG: true,
  },

  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
});

module.exports = nextConfig
