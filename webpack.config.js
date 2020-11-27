const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: { presets: ["env"]  }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: "postcss-loader"
                },{
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets',
                            useRelativePath: true
                        }

                    },
                    /*{
                        loader: 'image-webpack-loader',
                        options: {
                            /*mozjpeg: {
                                progressive: true,
                                quality: 75
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }*/
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },

        ]
    },
    devServer: {
        contentBase: "./dist",
        watchContentBase: true,
        inline: true,
        port: 8080,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
};