/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
      {
        protocol: "https",
        hostname: "fdn2.gsmarena.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
