/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔥 ESLint errors ko ignore karega
  },
};

module.exports = nextConfig;
