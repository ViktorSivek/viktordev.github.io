/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [],
  },
  webpack(config) {
    // Explicitně vynecháme auto detekci tailwindcss pluginu
    return config
  },
}

export default nextConfig
