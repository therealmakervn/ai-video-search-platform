/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  experimental: {
    serverActions: true,
    optimizePackageImports: ['@supabase/supabase-js']
  },
  images: {
    domains: ['images.twelveLabs.com']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false
      }
    }
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
