/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.imgbb.com/1/upload',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
