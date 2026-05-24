/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Blog slug renames - keep links and crawls alive.
      {
        source: '/blog/why-we-do-not-specify-lutron',
        destination: '/blog/lutron-control-systems-melbourne',
        permanent: true,
      },
      {
        source: '/blog/what-100k-smart-home-melbourne',
        destination: '/blog/300k-smart-home-melbourne-cost-breakdown',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
