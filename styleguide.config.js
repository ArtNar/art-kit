const path = require('path');

module.exports = {
    sections: [
        {
            name: 'Components',
            components: '**/src/components/**/*.jsx',
        },
    ],
    webpackConfig: require('./webpack/webpack.config.base.js'),
    require: [
        path.join(__dirname, './src/index.scss'),
    ],
    propsParser(filePath, source, resolver, handlers) {
        return require('react-docgen').parse(source, resolver, handlers);
    },
    skipComponentsWithoutExample: true,
};
