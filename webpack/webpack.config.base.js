const path = require('path');
const webpack = require('webpack');

module.exports = {
    resolve: {
        modules: [
            'node_modules',
            path.join(process.cwd(), 'node_modules')
        ],
        extensions: ['.js', '.jsx']
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
            // {
            //     test: /\.(scss|css)$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'sass-loader',
            //         'resolve-url-loader',
            //     ],
            // },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.HOT_LOADER': process.env.HOT_LOADER
        })
    ]
};
