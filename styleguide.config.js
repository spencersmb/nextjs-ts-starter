const path = require('path')
const glob = require('glob')

module.exports = {
	// components: function () {
	// 	return glob.sync('src/components/**/*.{ts,tsx}')
	// 		.filter(function (module) {
	// 			return /\/[A-Z]\w*\.tsx$/.test(module)
	// 		})
	// },
	assetsDir: 'docs/',
	// components: 'src/components/**/*.{ts,tsx}',
	ignore: [
		'src/setupTests.ts',
		'**/*.spec.ts',
		'**/*.spec.tsx',
		'**/*.test.ts',
		'**/*.test.tsx',
		'**/*.d.ts'
	],
	pagePerSection: true,
	propsParser: require('react-docgen-typescript').parse,
	// propsParser: require('react-docgen-typescript').withDefaultConfig({propFilter: {skipPropsWithoutDoc: true}}).parse,
	// resolver: require('react-docgen').resolver.findAllComponentDefinitions,
	resolver: require('react-docgen').resolver.findAllExportedComponentDefinitions,
	sections: [
		{
			components: () => [],
			content: 'docs/Overview.md',
			exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
			name: 'Every-Tuesday Ecommerce App',
			usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
		},
		{
			name: 'Shared Components',
			sectionDepth: 0,
			sections: [
				{

					components: () => [
						'./src/components/cart/myCart.tsx'
					],
					exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
					name: 'Buttons',
					usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
				}
			]
		}
	],
	// styleguideComponents: {
	// 	// Wrapper: path.join(__dirname, './utils/Wrapper')
	// 	Wrapper: '/Users/et64/CloudStation/github/et-shoppe-ts/utils/Wrapper'
	// },
	// skipComponentsWithoutExample: true,
	// styles: {
	// 	StyleGuide: {
	// 		content: {
	// 			'& .rsg--code-49': {
	// 				fontWeight: 'bold'
	// 			}
	// 		}
	// 	}
	// },
	title: 'React Style Guide Example',
	// webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js')
	webpackConfig: require('./config/styleguide-webpack.config.dev.js')
	// webpackConfig: {
	// 	entry: './pages/index.tsx',
	// 	output: {
	// 		filename: 'bundle.js',
	// 		path: path.resolve(__dirname, 'build'),
	// 	},
	// 	module: {
	// 		rules: [
	// 			{
	// 				test: /\.(ts|tsx)$/,
	// 				use: [
	// 					{
	// 						loader: require.resolve('ts-loader'),
	// 						options: {
	// 							// disable type checker - we will use it in fork plugin
	// 							// transpileOnly: true,
	// 						},
	// 					},
	// 				],
	// 			},
	// 		]
	// 	}
	// }
}
