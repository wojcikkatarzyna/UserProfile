const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry : {
        'js/out.js': './js/App.jsx',
        'css/main.css~': './scss/main.scss'
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    devServer: {
        inline: true,
        hot: true,
        contentBase: './',
        port: 3003
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2', 'react'] }
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
                // include: path.join(__dirname, 'images'),
                loader: 'url-loader?limit=1000000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin( './../css/main.css' )
    ]
}
