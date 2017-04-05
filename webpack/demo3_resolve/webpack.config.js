let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let config = {
	entry:{
		main:'./main.js'
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname, 'dest')
	},
	module:{
		rules:[{
				test:/\.js$/, 
				loader:'babel-loader',
				exclude:/node_modules/,
				options:{
					presets:['env'],
					plugins:['transform-runtime']
				}
		}]
	},
	resolve:{
		extensions:['.js', '.json'],
		alias:{
			Com:path.resolve(__dirname, 'common')
		}
	},
	devServer:{
		contentBase:path.resolve(__dirname, 'dest'),
		compress:true,
		port:8091
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'auto generate html!',
			filename:'index.html',
			template:'./index.html',
			minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
		})
	]
};

module.exports=config;