/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  webpack(config) {
    config.resolve.alias['~'] = `${__dirname}/src`
    return config
  }
}
