/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // Optional: Add basePath if deploying to a subdirectory 'https://username.github.io/repo-name'
    // basePath: '/AtomCV', 
};

export default nextConfig;
