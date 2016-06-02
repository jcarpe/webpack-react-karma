var path = require( 'path' );

module.exports = {
	entry: './src/entry.jsx',
	output: {
		path: path.join( __dirname, '/bin' ),
		filename: 'bundle.js'
	},
	
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!sass?indentedSyntax=false'
			},
			{ 
				test   : /\.jsx$/,
				loader : 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};