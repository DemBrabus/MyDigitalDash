//
//Webpack Production
//

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const buildPath = path.resolve(__dirname, 'dist1');


module.exports = {

    // Determine method of mapping 
    devtool: 'source-map',

    entry: {
        index: './src/Page-Index/index.js'
    },

    output: {
        filename: '[name].[hash:20].js',
        path: buildPath
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './src/Page-Index/index.html',
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html',
            minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        })
    ],

    optimization: {
        minimizer: [

            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),

            new OptimizeCssAssetsPlugin({})
        ]
    }



}