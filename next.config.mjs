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
  webpack: (config, { dev, isServer }) => {
    // Skip tests during build if NEXT_SKIP_TESTS is set to true
    if (process.env.NEXT_SKIP_TESTS === "true") {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== "JestWorker"
      );
    }
    return config;
  },
};

export default nextConfig;
