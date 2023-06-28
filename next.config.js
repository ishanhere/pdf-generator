// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
  },
  images: {
    domains: [
      "s3.amazonaws.com",
      "s3-ap-southeast-1.amazonaws.com",
      "kristal-prod-backend.s3.ap-southeast-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
