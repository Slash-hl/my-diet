const helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js']
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
                loader: 'null'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders:['to-string', 'css', 'sass']
            }
        ],
        postLoaders: [
            {
                test: /\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                include: helpers.root('src/app'),
                exclude: [
                    /\.spec\.ts$/,
                    /node_modules/
                ]
            }
        ]
    }
};
