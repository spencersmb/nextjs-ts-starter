const withTypescript = require('@zeit/next-typescript')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// const paths = require('./config/paths')
const path = require('path')
// In development, we always serve from the root. This makes config easier.
// const publicPath = '/'

module.exports = withTypescript({

	// webpack (config) {
	// config.module.rules.push({
	// 	test: /\.(ts|tsx)$/,
	// 	use: {
	// 		loader: 'ts-loader',
	// 		options: {
	// 			// disable type checker - we will use it in fork plugin
	// 			transpileOnly: true,
	// 		},
	// 	}
	// })
	// config.plugins.push(new ForkTsCheckerWebpackPlugin({
	// 	async: false,
	// 	tsconfig: paths.appTsConfig,
	// 	tslint: paths.appTsLint,
	// 	watch: paths.appSrc
	// }))
	//
	// 	return config
	// }
})
