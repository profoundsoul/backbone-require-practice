
var Webpack = require('webpack');
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		main:'./src/main.js'
	},
	output:{
		filename:'[name].js',
		path:Path.join(__dirname, 'dist')
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.css/,
				loader:'css-loader'
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