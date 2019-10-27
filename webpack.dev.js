//
//Webpack Development
//

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        index: './src/Page-Index/index.js'
    },

    devServer: {
        port: 8080
    },

    module: {
        rules: [
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
                    'style-loader',
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
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
    ],
};