/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns:  [{
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    }, {
      hostname: 'cdn.rareblocks.xyz',
    }, {
      hostname: 'landingfoliocom.imgix.net',
    }],
  },
  
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig
