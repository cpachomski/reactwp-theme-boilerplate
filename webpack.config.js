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
	module: {
	    loaders: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        loaders: [ 'react-hot', 'babel-loader'],
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