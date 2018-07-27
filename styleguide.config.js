const path = require('path')
const glob = require('glob')
const dir = __dirname + './utils/Wrapper'

module.exports = {
	assetsDir: 'docs/',
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
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/utils/Wrapper')
	},
	title: 'React Style Guide Example',
	webpackConfig: require('./config/styleguide-webpack.config.dev.js')
}
