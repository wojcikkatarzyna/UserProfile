const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const path = require("path");

module.exports = {
    entry: {
        'js/out.js': ['whatwg-fetch', './js/app.jsx'],
        'css/main.css~': './scss/main.scss'
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-2','react']
            }
        },
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=1000000'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/main.css'),
    ]
}
