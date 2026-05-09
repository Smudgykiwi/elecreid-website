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
    ]
  },
}

module.exports = nextConfig
