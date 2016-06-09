var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.template.html',
			inject: true
		})
	],

	module: {
	    loaders: [
	      {
	        test: /\.js$/,
	        loaders: ['uglify', 'react-hot', 'babel'],
	        include: path.join(__dirname, 'src')
	      },
	      {
	        test: /\.scss$/,
	        loaders: ["style-loader", "css-loader", "sass-loader"]
	      },
	      {
	        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
	        loader: "url?limit=10000&minetype=application/font-woff"
	      },
	      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream" },
	      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
	      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml" }
	    ]
  	}
};