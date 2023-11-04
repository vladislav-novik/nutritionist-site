/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns:  [{
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    }],
    dangerouslyAllowSVG: true,
  },
  
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig
