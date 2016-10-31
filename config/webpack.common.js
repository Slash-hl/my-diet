const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const helpers = require('./helpers');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        preLoaders: [
            {
                test: /\.scss$/,
                loader: 'import-glob'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders:[ExtractTextPlugin.extract('css'), 'to-string', 'css', 'sass']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common'],
            minChunks: 2
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
