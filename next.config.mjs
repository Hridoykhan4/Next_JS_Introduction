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

  async redirects() {
    return [
      // Basic redirect
      {
        source: "/products/add",
        destination: "/admin-dashboard/products/add",
        permanent: true,
      },
   
    ];
  },
};

export default nextConfig;
