var webpack = require('webpack');

module.exports = function (config) {
	config.set({
		browsers: [ 'Chrome' ], 
		singleRun: true,
		frameworks: [ 'mocha' ],
		files: [
			'test/tests.webpack.js'
		],
		preprocessors: {
			'test/tests.webpack.js': [ 'webpack', 'sourcemap' ]
		},
		reporters: [ 'dots' ],
		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{ test: /\.js$/, loader: 'babel-loader' },
					{ test: /\.jsx$/, loader: 'babel-loader' },
					{ test: /\.scss$/, loader: 'style!css!sass?indentedSyntax=false' }
				]
			}
		},
		webpackServer: {
			noInfo: true
		}
	});
};