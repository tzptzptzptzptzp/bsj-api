/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-c799e6d1bb0a429987fe4c059717f3e4.r2.dev",
      },
    ],
  },
};

export default nextConfig;
