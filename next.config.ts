import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
};

module.exports = {
    images: {
        domains: [
            "swarnsathi.com",
            "dhruvacapital.s3.eu-north-1.amazonaws.com",
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
