/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler:{
    styledComponents:true,
  },
  swcMinify: true,
  env: {
    RANDOM_API: 'abe4e77e-89f9-4082-b77d-ca64add5513d'
  }
}

module.exports = nextConfig
