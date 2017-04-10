
var Webpack = require('webpack');
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		main:'./src/main.js'
	},
	output:{
		filename:'[name].js',
		publicPath:'./',
		path:Path.join(__dirname, 'dist')
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader',
				options:{
					loaders:{
						sass:"style-loader!css-loader!sass-loader"
					}
				}
			},
			{
				test:/\.(png|jpe?g|gif)(\?.*)?$/,
				loader:'url-loader',
				options:{
					limits:1024 * 20,
					name: '[name].[hash:20].[ext]'
				}
			},
			{
				test:/\.css/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.scss/,
				loader:'style-loader!css-loader!sass-loader'
			},
			{
				test:/\.json/,
				loader:'json-loader'
			},
			{
				test:/\.js$/, 
				loader:'babel-loader', 
				exclude:/node_modules/,
				options:{
					presets:['env'],
					plugins:['transform-runtime'],
					comments:false
				}
			}
		]
	},
	resolve:{
		extensions:['.js', '.json', '.vue', '.html']
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			title:'my vue project'
		}),
		new Webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		port:8899,
		contentBase:Path.join(__dirname, 'dist'),
		compress:true,
		inline:true,
		hot:true,
		historyApiFallback:true

	}
};