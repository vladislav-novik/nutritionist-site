/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['cdn.sanity.io'],
    // path: '/images/4osbkm4l',
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
