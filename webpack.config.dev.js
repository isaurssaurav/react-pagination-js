const path = require('path');
const context = path.join(__dirname, 'src/demo');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context,
    entry: './index',
    output: {
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'react-pagination-js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        port: 3300,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};