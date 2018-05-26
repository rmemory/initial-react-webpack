const path = require('path');

/* HtmlWebPagePlugin create the index.html file */
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	// Primary entry point
	entry: './src/index.js',

	// Output of build from webpack
	output: {
		// Put output into the dist folder
		path: path.join(__dirname, '/dist'),

		// in a file name index_bundle.js
		filename: 'index_bundle.js'
	},

	// Rules of what to build
	module: {
		rules: [
			{
				// Do build the .jsx files
				test: /\.js$/,
				// Don't build the node_modules directory
				exclude: /node_modules/,

				// Use the babel-loader
				use: {
					loader: babel-loader
				}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html'
		}
		)
	]
}