/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
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
  output: 'export',
  trailingSlash: true,
   
};

module.exports = nextConfig;
