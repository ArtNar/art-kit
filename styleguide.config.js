module.exports = {
    components: 'src/components/**/[A-Z]*.jsx',
    webpackConfig: require('./webpack/webpack.config.base.js'),
    // sections: [
    //     {
    //         name: 'Others',
    //         components: '**/src/components/**/*.jsx',
    //         ignore: '**/src/components/Icons/**/*.jsx',
    //     },
    // ],
};
