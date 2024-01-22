/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nextjs',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
