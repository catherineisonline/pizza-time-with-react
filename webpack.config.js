const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'production', // or 'development'
    entry: './src/index.js', // entry point of your application
    output: {
        filename: 'bundle.js', // output file name
        path: path.resolve(__dirname, 'build') // output directory
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'homepage-contact-form': path.resolve(__dirname, 'src/routes/homepage/homepage-contact/HomepageContactForm.js'),
        },
    },
    optimization: {
        usedExports: true, // Enable tree shaking
        splitChunks: {
            chunks: 'all', // Enable code splitting for all chunks
        },
        minimize: true, // Enable minification
        minimizer: [new TerserPlugin()], // Use TerserPlugin for minification
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(mp4|mov)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    devtool: 'source-map',
};