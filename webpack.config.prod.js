const path = require('path');
const context = path.join(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};