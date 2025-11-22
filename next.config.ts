/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "*.tiktokcdn.com",
      },
      {
        protocol: "https",
        hostname: "*.tiktokcdn-us.com",
      },
      {
        protocol: "https",
        hostname: "*.tiktokcdn-eu.com",
      },
      {
        protocol: "https",
        hostname: "*.byteimg.com",
      },
      {
        protocol: "https",
        hostname: "*.bytecdn.com",
      },
    ],
  },
};

export default nextConfig;
