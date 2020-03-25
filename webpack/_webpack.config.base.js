const path = require('path');
// const nodeExternals = require('webpack-node-externals');

const srcPath = '../src/';

module.exports = {
    entry: path.join(__dirname, srcPath, 'components/index.js'),
    output: {
        path: path.join(__dirname, srcPath, '../dist'),
        filename: 'main.js',
        library: '',
        libraryTarget: 'commonjs',
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve('src'),
        ],
        extensions: ['.js', '.jsx'],
    },
    // externals: [nodeExternals()],
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
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                },
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
