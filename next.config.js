/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgProps: { fill: 'currentColor' }, icon: true }
        }
      ]
    })

    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'images.dog.ceo']
  }
}

module.exports = nextConfig
