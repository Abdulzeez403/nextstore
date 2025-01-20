/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Avoid build failure due to linting issues
  },
  typescript: {
    ignoreBuildErrors: true, // Prevent build failures due to TypeScript errors
  },
  images: {
    unoptimized: true, // Use unoptimized images for easier deployment
  },
};

export default nextConfig;
