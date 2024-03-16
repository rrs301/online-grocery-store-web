/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{
        domains:['localhost','res.cloudinary.com','192.168.0.218','online-grocery-store-strapi-cms.onrender.com']
    }
};

export default nextConfig;
