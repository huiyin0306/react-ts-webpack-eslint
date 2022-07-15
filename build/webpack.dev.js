const path = require('path');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = webpackMerge.merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        port: 8080,
        open: true,
        hot: true,
        devMiddleware: {
            writeToDisk: (filename) => {
                return /bundle.js/.test(filename);
            },
        },
    },
});
