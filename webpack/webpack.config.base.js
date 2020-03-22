const path = require('path');
const webpack = require('webpack');

const srcPath = '../src/';

module.exports = {
    entry: {
        main: path.join(__dirname, srcPath, 'components/index.js'),
    },
    output: {
        path: path.join(__dirname, '../dist'),
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve('src'),
        ],
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        // We no not want to minimize npm code.
        minimize: false,
        usedExports: true,
        sideEffects: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(eot|svg|otf|ttf|woff|woff2|png)$/,
                use: 'file-loader',
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.HOT_LOADER': process.env.HOT_LOADER,
        }),
    ],
};
