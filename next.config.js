/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './components/imageLoader.js',
    },
}

module.exports = nextConfig