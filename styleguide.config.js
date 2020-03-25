const path = require('path');

module.exports = {
    components: 'src/components/**/[A-Z]*.jsx',
    sections: [
        {
            name: 'Others',
            components: '**/src/components/**/*.jsx',
            ignore: '**/src/components/Icons/**/*.jsx',
        },
    ],
    webpackConfig: require('./webpack/webpack.config.base.js'),
    require: [
        path.join(__dirname, './src/index.scss'),
    ],
};
