/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'drive.google.com' ,
           
           
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com' ,
           
           
          },
          {
            protocol: 'http',
            hostname: 'res.cloudinary.com' ,
           
           
          },
        ],
      }
      ,
      async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ];
  },
        // images: {
        //   domains: ['res.cloudinary.com' ,'drive.google.com'],
        // },
      // },
}

module.exports = nextConfig
