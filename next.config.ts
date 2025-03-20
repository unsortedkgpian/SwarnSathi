import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
};

module.exports = {
    images: {
        domains: [
            "swarnsathi.com",
            "dhruvacapital.s3.eu-north-1.amazonaws.com",
            "localhost:4000"
        ],
        remotePatterns: [
      {
        protocol: 'http', // or 'https' if applicable
        hostname: 'localhost',
        port: '4000', // Optional: specify the port if needed
        pathname: '/uploads/images/**', // Optional: restrict to specific paths
      },
    ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
