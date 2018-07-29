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
				'api': './src/api',
				'actions': './src/actions',
				'env': './src/env',
				'@et/header': './src/components/header',
				'hoc': './src/hoc',
				'products': './src/components/products',
				'stripe': './src/components/stripe',
				'styles': './src/components/styles',
				'types': './src/types',
				'utils': './src/utils',
			}
		}]
	],
	'retainLines': true
}
