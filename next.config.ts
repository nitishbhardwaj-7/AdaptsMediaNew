/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // The double asterisk '**' allows ANY subdomain (www, cdn, etc.)
        hostname: '**.adaptsmedia.com', 
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;