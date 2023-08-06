// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const copyWebpackPlugin = require('copy-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.plugins.push(
    //             new copyWebpackPlugin({
    //                 patterns: [
    //                     {
    //                         from: 'src/test/',
    //                         to: 'static/test/',
    //                     },
    //                 ],
    //             }),
    //         )
    //     }
    //     return config
    // },
}

module.exports = nextConfig
