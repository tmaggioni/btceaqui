/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
