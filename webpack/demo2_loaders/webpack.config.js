/**
 * Created by mumu on 2017/4/5.
 */
module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        filename: '[name].js',
        path: 'dest'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    //presets: ['es2015'],
                    plugins:['transform-runtime'],
                    presets:['env']
                }
        }]
    }
}