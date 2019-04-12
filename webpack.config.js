var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						publicPath: 'build'
					}
				}
			}
		]
	}
}