/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dtt1wnvfb/**',
            },
        ],
    },
};