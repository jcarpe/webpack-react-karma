var webpack = require('webpack');

module.exports = function (config) {
	config.set({
		browsers: [ 'Chrome' ], 
		singleRun: true,
		frameworks: [ 'mocha' ],
		files: [
			'test/tests.webpack.js' //just load this file
		],
		preprocessors: {
			'test/tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
		},
		reporters: [ 'dots' ],
		webpack: {
			devtool: 'inline-source-map', //just do inline source maps instead of the default
			module: {
				loaders: [
					{ test: /\.js$/, loader: 'babel-loader' }
				]
			}
		},
		webpackServer: {
			noInfo: true //please don't spam the console when running in karma!
		}
	});
};