const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');

module.exports = webpackMerge.merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new WebpackBar({
            name: '正在打包',
            color: '#fa8c16',
        }),
    ],

    watchOptions: {
        poll: 1000, // 轮询间隔时间
        aggregateTimeout: 500, // 防抖（在输入时间停止刷新计时）
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.less/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'less-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
});
