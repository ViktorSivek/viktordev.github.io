/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ---- 🆕 GitHub Pages / static export bits ---- */
  output: 'export', // static HTML/CSS/JS only
  trailingSlash: true, // fixes refresh-on-sub-page 404s
  images: { unoptimized: true }, // disable the Node image optimizer

  /* ---- your existing options ---- */
  experimental: {
    swcPlugins: [],
  },
  webpack(config) {
    // Explicitně vynecháme auto detekci tailwindcss pluginu
    return config
  },
}

export default nextConfig
