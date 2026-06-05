/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'walkingpadassets.s3.us-east-1.amazonaws.com'],
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    EXPORT_MODE: 'true'
  },
};

module.exports = nextConfig;