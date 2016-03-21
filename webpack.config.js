var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./js/entry.js'
	],
	output: {
		path: path.join(__dirname, 'js/dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js|jsx$/,
			loader: 'react-hot!jsx-loader?harmony'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	}

}