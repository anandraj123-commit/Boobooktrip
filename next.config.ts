/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname, // force THIS folder as root
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },
};

module.exports = nextConfig;
