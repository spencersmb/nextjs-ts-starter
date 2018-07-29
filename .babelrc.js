module.exports = {
	'presets': [
		'next/babel',
		'@zeit/next-typescript/babel'
	],
	'plugins': [
		[
			'styled-components',
			{
				'ssr': true,
				'displayName': true
			}
		],
		[
			'inline-react-svg'
		],
		['module-resolver', {
			'root': ['.'],
			'alias': {
				'@et/api': './src/api',
				'@et/actions': './src/actions',
				'@et/cart': './src/components/cart',
				'@et/env': './src/env',
				'@et/header': './src/components/header',
				'@et/hoc': './src/components/hoc',
				'@et/products': './src/components/products',
				'@et/stripe': './src/components/stripe',
				'@et/styles': './src/styles',
				'@et/types': './src/types',
				'@et/utils': './src/utils',
				'@et/window': './src/components/window',
			}
		}]
	],
	'retainLines': true
}
