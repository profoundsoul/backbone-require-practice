/**
 * Created by mumu on 2017/4/5.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dest')
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    //presets: ['es2015'],
                    plugins:['transform-runtime'],
                    presets:['env']
                }
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]
}