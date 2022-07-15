const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = webpackMerge.merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
    watchOptions: {
        poll: 1000, // 轮询间隔时间
        aggregateTimeout: 500, // 防抖（在输入时间停止刷新计时）
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // MiniCssExtractPlugin.loader 需要在css-loader之后解析
                    },
                    'css-loader',
                ],
            },
        ],
    },
});
