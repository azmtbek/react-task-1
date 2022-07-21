const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.m?jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
            {
                test:/\.css$/i,
                use: ["style-loader", "css-loader"],
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Plugin Webpack App',
			template: 'index.html'
		})
	]
}
