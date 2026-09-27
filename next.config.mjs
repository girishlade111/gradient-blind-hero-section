/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/gradient-blind-hero-section",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig