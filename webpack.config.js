const path = require('path')

module.exports = {
    context: __dirname,
    entry: ['babel-polyfill', './frontend/nickflicks.jsx'],
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }, {
                test: /\.(jpg|jpeg|png)(\?.*)?$/,
                use: {
                loader: 'file-loader', 
                options: {
                    name: '[name][md5:hash].[ext]',
                    outputPath: 'webpack-assets/',
                    publicPath: '/assets/webpack-assets/'
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"],
        alias: {
            assets: path.resolve('./app/assets'),
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        },
    }
};