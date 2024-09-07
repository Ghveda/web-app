/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@storefront-ui/react'],
  images: {
    domains: [], // Add external domains if needed
  },
};

export default nextConfig;
